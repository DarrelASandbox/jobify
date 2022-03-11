import { useEffect } from 'react';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAppContext } from '../context/appContext';
import Job from './Job';
import Loading from './Loading';

const JobContainer = () => {
  const { getAllJobs, jobs, isLoading, page, totalJobs } = useAppContext();
  useEffect(() => {
    getAllJobs();
  }, []);

  if (isLoading) return <Loading center />;
  if (jobs.length === 0)
    return (
      <Wrapper>
        <h2>No jobs available.</h2>
      </Wrapper>
    );

  return (
    <Wrapper>
      <h5>
        {totalJobs} job {jobs.length > 1 && 's'} found.
      </h5>
      <div className='jobs'>
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {/* TODO: pagination buttons */}
    </Wrapper>
  );
};

export default JobContainer;
