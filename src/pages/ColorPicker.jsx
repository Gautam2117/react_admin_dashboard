import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const handleColorChange = (args) => {
  const previewBox = document.getElementById('preview');
  if (previewBox) {
    previewBox.style.backgroundColor = args.currentValue.hex;
  }
};

const CustomColorPicker = ({ id, mode }) => (
  <ColorPickerComponent
    id={id}
    mode={mode}
    inline
    showButtons={false}
    modeSwitcher={false}
    change={handleColorChange}
    cssClass="e-custom-picker"
  />
);

const ColorPicker = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-lg">
      <Header category="🎨 Tools" title="Custom Color Palette" />
      
      <p className="text-gray-500 dark:text-gray-300 mb-6 text-center">
        Try the palette and gradient pickers below to apply live background changes.
      </p>

      <div id="preview" className="w-full h-32 rounded-xl mb-10 transition-all duration-300 ease-in-out" />

      <div className="flex justify-center items-start flex-wrap gap-16">
        <div className="text-center">
          <p className="text-xl font-semibold mb-3 dark:text-white">🎨 Inline Palette</p>
          <CustomColorPicker id="palette-mode" mode="Palette" />
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold mb-3 dark:text-white">🌈 Inline Picker</p>
          <CustomColorPicker id="picker-mode" mode="Picker" />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
