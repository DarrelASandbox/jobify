import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useAppContext } from '../context/appContext';
import AreaChartComponent from './AreaChartComponent';
import BarChartComponent from './BarChartComponent';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);

  const { monthlyApplications } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? (
        <BarChartComponent data={monthlyApplications} />
      ) : (
        <AreaChartComponent data={monthlyApplications} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
