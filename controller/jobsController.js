import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import Job from '../models/Job.js';
import checkPermission from '../utils/checkPermission.js';
import moment from 'moment';

const createJob = async (req, res, next) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError('Please provide all values');
  }

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const { status, jobType, sort, search } = req.query;
  const queryObject = { createdBy: req.user.userId };

  if (status && status !== 'All') queryObject.status = status;
  if (jobType && jobType !== 'All') queryObject.jobType = jobType;
  // https://docs.mongodb.com/manual/reference/operator/query/regex/
  if (search) queryObject.position = { $regex: search, $options: 'i' };

  let result = Job.find(queryObject); // NO AWAIT

  if (sort === 'Latest') result = result.sort('-createdAt');
  if (sort === 'Oldest') result = result.sort('createdAt');
  if (sort === 'a-z') result = result.sort('position');
  if (sort === 'z-a') result = result.sort('-position');

  const jobs = await result; // chain sort conditions

  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;
  if (!position || !company)
    throw new BadRequestError('Please provide all values');

  const job = await Job.findOne({ _id: jobId });
  if (!job) throw new NotFoundError(`No job with id :${jobId}`);

  checkPermission(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedJob });
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId });
  if (!job) throw new NotFoundError(`No job with id :${jobId}`);

  checkPermission(req.user, job.createdBy);

  await job.remove();
  res.status(StatusCodes.OK).json({ msg: 'Job removed!' });
};

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    Pending: stats.Pending || 0,
    Interview: stats.Interview || 0,
    Declined: stats.Declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } }, // Sort latest date for entire DB
    { $limit: 6 }, // 6 months
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      // moment.js months is from 0 to 11 while mongodb is from 1 to 12.
      const date = moment()
        .month(month - 1)
        .year(year)
        .format('MMM Y');

      return { date, count };
    })
    .reverse(); // Sort oldest date for the past 6 months.

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
