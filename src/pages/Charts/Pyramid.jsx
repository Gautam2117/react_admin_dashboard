import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection
} from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 rounded-3xl shadow-2xl bg-gradient-to-bl from-white to-gray-100 dark:from-[#2B2D3A] dark:to-[#1E202A]">
      <ChartsHeader category="🍽️ Nutritional Insights" title="Pyramid Breakdown of Food Categories" />

      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6 mt-2">
        Analyze the proportional representation of various food categories in a pyramid-style visualization.
      </p>

      <div className="w-full flex justify-center">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="55%"
              height="85%"
              neckWidth="15%"
              gapRatio={0.05}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: '#FF6B6B' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
                font: {
                  fontWeight: '600',
                  color: '#ffffff'
                }
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
