import { useEffect } from 'react';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAppContext } from '../context/appContext';
import Job from './Job';
import Loading from './Loading';
import PageButtonContainer from './PageButtonContainer';

const JobContainer = () => {
  const {
    getAllJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext();

  useEffect(() => {
    getAllJobs();
  }, [page, search, searchStatus, searchType, sort]);

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
        {totalJobs} job{jobs.length > 1 && 's'} found.
      </h5>
      <div className='jobs'>
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages > 1 && <PageButtonContainer />}
    </Wrapper>
  );
};

export default JobContainer;
