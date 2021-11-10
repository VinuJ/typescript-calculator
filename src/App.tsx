import React, { FC } from 'react';
import './App.scss';

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

const App:FC = () => {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
