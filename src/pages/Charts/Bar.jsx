import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel
} from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-5 md:m-10 mt-20 p-8 rounded-3xl shadow-lg bg-gradient-to-br from-white to-slate-100 dark:from-[#2B2D3E] dark:to-[#1F202A]">
      <div className="mb-10 text-center">
        <ChartsHeader category="Sports Analytics" title="🏅 Olympic Medal Counts - Rio 2016" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          A comparative view of top countries' medal performances
        </p>
      </div>
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#2B2D3E' : '#fff'}
          legendSettings={{ background: currentMode === 'Dark' ? '#1F202A' : '#f9f9f9', position: 'Bottom' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
