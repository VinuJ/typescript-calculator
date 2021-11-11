import React, { FC, useState } from "react";
import "./App.scss";

const App: FC = () => {
  const [expression, setExpression] = useState<string>("");
  const [answer, setAnswer] = useState<number | string>(0);

  const isOperator = (symbol: string): boolean => {
    return /[\+\*\/\-]/.test(symbol);
  };

  const display = (symbol: string): void => {
    let current = expression;

    // Check if two operators in a row have been inputted
    if (isOperator(symbol) && isOperator(current[current.length - 1])) {
      let newExp;
      // Check for subtract sign allows for '5 * -5' to correctly evaluate to '-25'
      if (/[-]/.test(symbol)) {
        setExpression(current.slice(0, current.length) + symbol);
      } else {
        // Otherwise remove all operators but the last, allows for  '5 * - + 5' to correctly evaluate to '10'
        let count = 0;
        for (let i = 0; i < current.length; i++) {
          if (isNaN(+current[i])) {
            count++;
          } else {
            count = 0;
          }
        }
        setExpression(current.slice(0, current.length - count) + symbol);
      }
    } else {
      // Ensures that any trailing decimal points are removed e.g. '10 + 5.' correctly evaluates to '15'
      if (current) {
        current = current + "";
        let temp = current.split(/[\+\*\/\-]/g);
        let lastNumber = temp[temp.length - 1];
        if (!isNaN(+lastNumber) && /[\.]/.test(lastNumber) && symbol === ".") {
          symbol = "";
        }
      }
      // Replacing multiple 0s or multiple decimal points at beginning with just one
      setExpression((current + symbol).replace(/^0/g, "").replace(/\.+/g, "."));
    }
    setAnswer((current) =>
      (current + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
    );
  };

  const calculate = (): void => {
    setAnswer(eval(expression));
    setExpression(eval(expression));
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
            <div className="answer" id="display">
              {answer}
            </div>
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
