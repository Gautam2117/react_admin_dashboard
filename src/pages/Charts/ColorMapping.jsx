import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective
} from '@syncfusion/ej2-react-charts';

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping
} from '../../data/dummy';

import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-5 md:m-10 mt-20 p-8 bg-gradient-to-br from-white to-slate-100 dark:from-[#2B2D3E] dark:to-[#1F202A] rounded-3xl shadow-xl">
      <div className="mb-8 text-center">
        <ChartsHeader category="Climate Analytics" title="🌡️ USA Weather Insights (Monthly)" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Color-coded temperature variations across the months
        </p>
      </div>
      <div className="w-full">
        <ChartComponent
          id="color-map-chart"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{
            mode: 'Range',
            background: currentMode === 'Dark' ? '#2B2D3E' : '#fff',
            position: 'Bottom'
          }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#2B2D3E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA Temperature"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
