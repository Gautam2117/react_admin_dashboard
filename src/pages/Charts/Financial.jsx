import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair
} from '@syncfusion/ej2-react-charts';

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis
} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

// Filter financial data from 1 Jan 2017 onwards
const filteredData = financialChartData.filter((dataPoint) => {
  return new Date(dataPoint.x) >= new Date(2017, 0, 1);
});

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-gradient-to-br from-white to-gray-100 dark:from-[#2B2D3E] dark:to-[#1F202A] rounded-3xl shadow-md">
      <ChartsHeader category="📈 Stock Analysis" title="Apple Inc. - Historical (HiLo)" />
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center -mt-4 mb-4">
        Visualizing high and low values of AAPL over time
      </p>

      <div className="w-full">
        <ChartComponent
          id="financial-hilo-chart"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentMode === 'Dark' ? '#2B2D3E' : '#fff'}
          zoomSettings={{ enableSelectionZooming: true, mode: 'X', enablePinchZooming: true }}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={filteredData}
              xName="x"
              low="low"
              high="high"
              name="Apple Inc"
              type="Hilo"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
