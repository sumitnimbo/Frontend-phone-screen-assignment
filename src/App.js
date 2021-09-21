
import { useState } from 'react';
import './App.css';

function App() {
  const [right, setRight] = useState(175);
  const [left, setLeft] = useState(175);
  const [top, setTop] = useState(175);
  const [bottom, setBottom] = useState(175);

  const handleRightShift = () => {
    setRight(350);
    setLeft(0);

  }
  const handleLeftShift = () => {
    setLeft(350);
    setRight(0);

  }
  const handleBottomShift = () => {
    setBottom(50);
    setTop(350);

  }
  const handleTopShift = () => {
    setTop(0);
    setBottom(350);

  }

  return (
    <div className="app">
      <div className="app__button">
        <button onClick={handleTopShift} className="app__topButton"></button>
      </div>
      <div className="app__row">
        <div className="app__button">
          <button onClick={handleLeftShift} className="app__leftButton"></button>
        </div>
        <div className="app__container">
          <div className="app__containerBox" style={{right : right,left: right, bottom: bottom, top: top}}>
          </div>
        </div>
        <div className="app__button">
          <button onClick={handleRightShift} className="app__rightButton"></button>
        </div>
      </div>
      <div className="app__bottomButton">
        <button onClick={handleBottomShift} className="app__bottomButton"></button>
      </div>
    </div>
  );
}

export default App;
