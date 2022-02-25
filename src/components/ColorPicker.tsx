import React, { useState } from 'react';
import './ColorPicker.css';
import { ChromePicker, ColorResult, SketchPicker } from 'react-color';
const handleSwatch = () => {};
const ColorPicker = () => {
  let classes = ['flexbox-fix', 'rc-editable-input-2'];
  const [background, setBackground] = useState('fff');

  const [presetColors, setPresetColors] = useState<string[]>(['fff']);
  const handleChangeComplete = (color: ColorResult) => {
    console.log(color.hsl);
    setBackground(color.hex);
    console.log(color.hex);
  };

  const addPresetHandler = () => {
    let temp = [...presetColors, background];
    let temp2 = Array.from(new Set(temp));
    setPresetColors(temp2);
  };

  return (
    <React.Fragment>
      <SketchPicker
        color={background}
        onChange={color => handleChangeComplete(color)}
        className={`${classes}`}
        presetColors={presetColors}
        disableAlpha
        width="400px"
      />

      <div
        style={{
          position: 'fixed',
          left: 10,
          top: 380,
          //   marginTop: '-30px',
          //   marginLeft: '10px',
        }}
      >
        <button
          onClick={addPresetHandler}
          style={{
            backgroundColor: 'white',
            border: '1px solid grey',
            width: '20px',
            height: '20px',
          }}
        >
          +
        </button>
      </div>
    </React.Fragment>
  );
};
export default ColorPicker;
