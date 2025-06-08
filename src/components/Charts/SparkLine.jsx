import React from 'react';
import {
  SparklineComponent,
  Inject,
  SparklineTooltip
} from '@syncfusion/ej2-react-charts';

const SparkLine = ({
  id,
  height = '80px',
  width = '250px',
  color = '#4CAF50',
  data,
  type = 'Line',
  currentColor = '#0f62fe'
}) => (
  <div className="rounded-md p-2 bg-white dark:bg-[#1e1e2f] shadow-sm">
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      type={type}
      valueType="Numeric"
      lineWidth={2}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: 'X: ${x} | Y: ${yval}',
        trackLineSettings: { visible: true },
        fill: '#ffffff',
        textStyle: {
          color: '#333',
          fontWeight: '500'
        }
      }}
      markerSettings={{
        visible: ['All'],
        size: 3,
        fill: currentColor
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  </div>
);

export default SparkLine;
