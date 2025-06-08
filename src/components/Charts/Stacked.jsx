import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip
} from '@syncfusion/ej2-react-charts';

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width = '100%', height = '420px' }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="bg-white dark:bg-[#1e1e2f] p-4 rounded-md shadow-md">
      <ChartComponent
        id="stacked-chart"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        width={width}
        height={height}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((series, idx) => (
            <SeriesDirective
              key={`stacked-series-${idx}`}
              type="StackingColumn"
              dataSource={series.dataSource}
              xName={series.xName}
              yName={series.yName}
              name={series.name}
              fill={series.fill}
              border={{ width: 0 }}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Stacked;
