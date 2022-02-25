import React, { useState } from 'react';
import { ChromePicker, ColorResult, SketchPicker } from 'react-color';
import './ColorPicker.css';
const ChromePickerComponent = () => {
  const [chromePresets, setChromePresets] = useState<string[]>(['fff']);
  const [chromePickerbackground, setChromePickerBackground] = useState('fff');
  const ChromePickerHandler = (color: ColorResult) => {
    setChromePickerBackground(color.hex);
  };
  const addChromePresetHandler = () => {
    let temp = [...chromePresets, chromePickerbackground];
    let temp2 = Array.from(new Set(temp));
    setChromePresets(temp2);
  };
  const getSwitcherColor = (color: any) => {
    console.log(color);
    setChromePickerBackground(color);
  };
  return (
    <div style={{ width: '300px' }}>
      <ChromePicker
        color={chromePickerbackground}
        onChange={color => ChromePickerHandler(color)}
        className="chrome-picker"
        disableAlpha
      />

      <div className="switchers">
        <div
          style={{
            position: 'relative',
            top: 9,
            right: 199,
            //   marginTop: '-30px',
            //   marginLeft: '10px',
          }}
        >
          <button
            onClick={addChromePresetHandler}
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
        <br />
        <div className="swicherArea">
          {chromePresets.map((color, inx) => (
            <div
              key={color}
              onClick={event => getSwitcherColor(color)}
              style={{
                width: '16px',
                height: '16px',
                margin: '0px 10px 10px 0px',
              }}
            >
              <span>
                <div
                  style={{
                    background: `${color}`,
                    height: '100%',
                    width: '100%',
                    cursor: 'pointer',
                    position: 'relative',
                    outline: 'none',
                    borderRadius: '3px',
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
                  }}
                ></div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChromePickerComponent;
