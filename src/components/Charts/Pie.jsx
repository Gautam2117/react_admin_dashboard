import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

const Doughnut = ({ id, data, legendVisiblity = true, height = "400px" }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="bg-white dark:bg-[#1e1e2f] p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">Sales Distribution</h2>
      <AccumulationChartComponent
        id={id}
        height={height}
        legendSettings={{
          visible: legendVisiblity,
          background: currentMode === 'Dark' ? '#2a2d3e' : '#ffffff',
          textStyle: {
            color: currentMode === 'Dark' ? '#e5e5e5' : '#333',
            fontWeight: '500',
          },
        }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        tooltip={{ enable: true }}
      >
        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Sales"
            dataSource={data}
            xName="x"
            yName="y"
            innerRadius="50%"
            startAngle={0}
            endAngle={360}
            radius="80%"
            explode
            explodeIndex={1}
            explodeOffset="8%"
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: '#ffffff',
                size: '12px',
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Doughnut;
