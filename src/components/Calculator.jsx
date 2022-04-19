import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("0");

  function display(value) {
    if (inputValue.toString().charAt(0) === "0") {
      setInputValue(value);
    } else {
      setInputValue(inputValue + value);
    }
  }

  function clear() {
    setInputValue("0");
  }

  function calculate() {
    let result = eval(inputValue);
    setInputValue(result);
  }

  return (
    <div className="cal">
      <div className="cal-display">
        <h1>{inputValue}</h1>
      </div>
      <div className="cal-button">
        <button className="operator" onClick={() => display("+")}>
          +
        </button>
        <button className="operator" onClick={() => display("-")}>
          -
        </button>
        <button className="operator" onClick={() => display("*")}>
          X
        </button>
        <button className="operator" onClick={() => display("/")}>
          %
        </button>
        <button onClick={() => display("7")}>7</button>
        <button onClick={() => display("8")}>8</button>
        <button onClick={() => display("9")}>9</button>
        <button onClick={() => display("4")}>4</button>
        <button onClick={() => display("5")}>5</button>
        <button onClick={() => display("6")}>6</button>
        <button onClick={() => display("1")}>1</button>
        <button onClick={() => display("2")}>2</button>
        <button onClick={() => display("3")}>3</button>
        <button onClick={() => display(".")}>.</button>
        <button onClick={() => display("0")}>0</button>
        <button onClick={clear} className="clear-btn">
          C
        </button>
        <button className="equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
