import React, { FC } from "react";
import "./App.scss";

/*
  <props that it takes>  - directly or INTERFACE
  interface Props {
    text: string; (boolean, number, (bob: syting) => void)
    obj: {
      f1: string'
    }
    or obj: SomeInterface
  }

  ctrl+space to see passable props + general auto complete

  ? mark before colon means optional

  useState default infers type, useState<number | null>
  undefined different type to null

  pass interfaces or objects into <>

  e.g. useRef<HTMLInputElement>(null)

  use hover a lot to get type
  
*/

const App: FC = () => {
  


  const display = () => {};

  return (
    <div className="App">
      <div className="container">
        <div className="grid">
          <div onClick={display} className="dis"></div>
          <div onClick={display} className="calcButton AC tomato">
            AC
          </div>
          <div onClick={display} className="calcButton C tomato">
            C
          </div>
          <div onClick={display} className="calcButton divide">
            /
          </div>
          <div onClick={display} className="calcButton multiply">
            X
          </div>
          <div onClick={display} className="calcButton seven dark-grey">
            7
          </div>
          <div onClick={display} className="calcButton eight dark-grey">
            8
          </div>
          <div onClick={display} className="calcButton nine dark-grey">
            9
          </div>
          <div onClick={display} className="calcButton minus">
            -
          </div>
          <div onClick={display} className="calcButton four dark-grey">
            4
          </div>
          <div onClick={display} className="calcButton five dark-grey">
            5
          </div>
          <div onClick={display} className="calcButton six dark-grey">
            6
          </div>
          <div onClick={display} className="calcButton plus">
            +
          </div>
          <div onClick={display} className="calcButton one dark-grey">
            1
          </div>
          <div onClick={display} className="calcButton two dark-grey">
            2
          </div>
          <div onClick={display} className="calcButton three dark-grey">
            3
          </div>
          <div onClick={display} className="calcButton equal blue">
            =
          </div>
          <div onClick={display} className="calcButton zero dark-grey">
            0
          </div>
          <div onClick={display} className="calcButton dot dark-grey">
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
