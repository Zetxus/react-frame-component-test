import { useState } from 'react';
import { SketchPicker } from 'react-color';
import Frame from 'react-frame-component';
import './App.css';

function App() {
  const [color, setColor] = useState('#252950');

  return (
    <div className="App">
      <SketchPicker color={color} onChange={v => {
        console.log('color is now ' + v.hex);
        return setColor(v.hex);
      }} />
      <Frame initialContent={`<!DOCTYPE html><html><head></head><body><span style="color: ${color}">Hi</span></body></html>`}>
        {null}
      </Frame>
    </div>
  );
}

export default App;
