import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip
} from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const EnhancedLineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="rounded-xl p-6 shadow-xl dark:bg-[#2a2d3e] bg-white transition-all duration-500">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-700 dark:text-gray-200">
        Analytics Over Time
      </h2>
      <ChartComponent
        id="custom-line-chart"
        height="420px"
        primaryXAxis={{
          ...LinePrimaryXAxis,
          labelStyle: { color: currentMode === 'Dark' ? '#E5E7EB' : '#374151' },
          title: 'Timeline',
          titleStyle: { color: currentMode === 'Dark' ? '#E5E7EB' : '#111827' },
        }}
        primaryYAxis={{
          ...LinePrimaryYAxis,
          labelStyle: { color: currentMode === 'Dark' ? '#E5E7EB' : '#374151' },
          title: 'Performance',
          titleStyle: { color: currentMode === 'Dark' ? '#E5E7EB' : '#111827' },
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, fill: currentMode === 'Dark' ? '#1F2937' : '#F9FAFB' }}
        background={currentMode === 'Dark' ? '#1F2937' : '#ffffff'}
        legendSettings={{ background: 'transparent', textStyle: { color: currentMode === 'Dark' ? '#E5E7EB' : '#111827' } }}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective
              key={`line-series-${index}`}
              {...item}
              width={2}
              marker={{ visible: true, width: 8, height: 8 }}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default EnhancedLineChart;
