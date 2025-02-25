import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        // Check for division by zero
        if (input.includes("/0")) {
          setResult("Error");
        } else {
          setResult(eval(input)); // Evaluate the expression (use a safer library for production)
        }
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      // Clear all input and result
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      // If result is displayed, clear the board on DEL
      if (result) {
        setInput("");
        setResult("");
      } else {
        setInput(input.slice(0, -1)); // Otherwise, delete the last character
      }
    } else {
      // If result exists and user continues typing, start with the result
      if (result && input === "") {
        setInput(result + value);
        setResult(""); // Clear the result to avoid confusion
      } else {
        setInput(input + value); // Append the clicked button value to the input
      }
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {[
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "C", "0", "=", "+",
            "DEL"
          ].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;