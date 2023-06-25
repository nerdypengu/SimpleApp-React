import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("");

  const appendNumber = (number) => {
    setDisplay((prevDisplay) => prevDisplay + number);
  };

  const performOperation = (operator) => {
    setDisplay((prevDisplay) => prevDisplay + operator);
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const backspace = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  return (
    <div className="w-64 p-8 bg-white rounded shadow">
      <input
        type="text"
        id="display"
        className="w-full border border-gray-300 p-2 rounded mb-4 text-right"
        value={display}
        disabled
      />

      <div className="grid grid-cols-4 gap-2">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          onClick={clearDisplay}
        >
          C
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("7")}
        >
          7
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("8")}
        >
          8
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("9")}
        >
          9
        </button>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => performOperation("/")}
        >
          /
        </button>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("4")}
        >
          4
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("5")}
        >
          5
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("6")}
        >
          6
        </button>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => performOperation("*")}
        >
          *
        </button>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("1")}
        >
          1
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("2")}
        >
          2
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("3")}
        >
          3
        </button>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => performOperation("-")}
        >
          -
        </button>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber("0")}
        >
          0
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => appendNumber(".")}
        >
          .
        </button>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={calculateResult}
        >
          =
        </button>

        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => performOperation("+")}
        >
          +
        </button>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded col-span-3"
          onClick={backspace}
        >
          Backspace
        </button>
      </div>
    </div>
  );
}

export default App
