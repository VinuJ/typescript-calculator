import React, { FC, useState } from "react";
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
  const [expression, setExpression] = useState<string>("");
  const [answer, setAnswer] = useState<number>(0);

  const display = (symbol: string): void => {
    setExpression(expression + symbol);
    if (expression[expression.length - 1] === "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = (): void => {
    setAnswer(eval(expression));
    setExpression(expression + "=");
  };

  const clearAll = (): void => {
    setExpression("");
    setAnswer(0);
  };
  const clear = (): void => {
    setExpression(expression.substring(0, expression.length - 1));
    setAnswer(0);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="grid">
          <div className="dis">
            <input
              className="input"
              type="text"
              value={expression}
              placeholder="0"
              disabled
            />
            <div className="answer">{answer}</div>
          </div>
          <div onClick={clearAll} className="calcButton AC tomato" id="clear">
            AC
          </div>
          <div onClick={clear} className="calcButton C tomato">
            C
          </div>
          <div
            onClick={() => display("/")}
            className="calcButton divide"
            id="divide"
          >
            /
          </div>
          <div
            onClick={() => display("*")}
            className="calcButton multiply"
            id="multiply"
          >
            X
          </div>
          <div
            onClick={() => display("7")}
            className="calcButton seven dark-grey"
            id="seven"
          >
            7
          </div>
          <div
            onClick={() => display("8")}
            className="calcButton eight dark-grey"
            id="eight"
          >
            8
          </div>
          <div
            onClick={() => display("9")}
            className="calcButton nine dark-grey"
            id="nine"
          >
            9
          </div>
          <div
            onClick={() => display("-")}
            className="calcButton minus"
            id="subtract"
          >
            -
          </div>
          <div
            onClick={() => display("4")}
            className="calcButton four dark-grey"
            id="four"
          >
            4
          </div>
          <div
            onClick={() => display("5")}
            className="calcButton five dark-grey"
            id="five"
          >
            5
          </div>
          <div
            onClick={() => display("6")}
            className="calcButton six dark-grey"
            id="six"
          >
            6
          </div>
          <div
            onClick={() => display("+")}
            className="calcButton plus"
            id="add"
          >
            +
          </div>
          <div
            onClick={() => display("1")}
            className="calcButton one dark-grey"
            id="one"
          >
            1
          </div>
          <div
            onClick={() => display("2")}
            className="calcButton two dark-grey"
            id="two"
          >
            2
          </div>
          <div
            onClick={() => display("3")}
            className="calcButton three dark-grey"
            id="three"
          >
            3
          </div>
          <div
            onClick={calculate}
            className="calcButton equal blue"
            id="equals"
          >
            =
          </div>
          <div
            onClick={() => display("0")}
            className="calcButton zero dark-grey"
            id="zero"
          >
            0
          </div>
          <div
            onClick={() => display(".")}
            className="calcButton dot dark-grey"
            id="decimal"
          >
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
