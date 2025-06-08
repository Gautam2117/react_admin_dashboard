import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend
} from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-5 md:m-10 mt-20 p-8 rounded-3xl bg-gradient-to-tr from-white to-slate-50 dark:from-[#2A2D3E] dark:to-[#1F202A] shadow-lg">
      <div className="mb-10 text-center">
        <ChartsHeader
          category="Analytics"
          title="📈 Historical Inflation Trends"
        />
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          This chart represents the percentage change in inflation over time
        </p>
      </div>
      <div className="w-full">
        <ChartComponent
          id="inflation-chart"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#2A2D3E' : '#ffffff'}
          legendSettings={{
            background: currentMode === 'Dark' ? '#1F202A' : '#f9f9f9',
            position: 'Bottom'
          }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
