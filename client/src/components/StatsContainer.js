import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import { useAppContext } from '../context/appContext';
import StatsItem from './StatsItem';

const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.Pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.Interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.Declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
