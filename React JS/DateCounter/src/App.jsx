import { useState } from "react";
import "./App.css";

function App() {
  // const [date, setDate] = useState(new Date("2021-03-25"));
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(step);

  const currentDate = new Date(); // Get current date
  currentDate.setDate(currentDate.getDate() + count);
  const formattedDate = currentDate.toDateString(); // Format the new date

  function stepMinus() {
    setStep((s) => s > 0 ? s - 1 : s);
  }
  function stepPlus() {
    setStep((s) => s + 1);
  }

  function countMinus() {
    setCount((c) => c - step);
  }
  function countPlus() {
    setCount((c) => c + step);
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="flex gap-5">
        <button
          className="bg-slate-500 w-10 h-10 rounded-lg"
          onClick={stepMinus}
        >
          {" "}
          -{" "}
        </button>
        <h1 className="text-3xl font-bold underline">Step: {step}</h1>
        <button
          className="bg-slate-500 w-10 h-10 rounded-lg"
          onClick={stepPlus}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-slate-500 w-10 h-10 rounded-lg"
          onClick={countMinus}
        >
          {" "}
          -{" "}
        </button>
        <h1 className="text-3xl font-bold underline">Count: {count}</h1>
        <button
          className="bg-slate-500 w-10 h-10 rounded-lg"
          onClick={countPlus}
        >
          {" "}
          +{" "}
        </button>
      </div>

      <div>
        <h1 className="text-4xl font-bold">
          {Math.abs(count)} Days{" "}
          <span> {count < 0 ? "before Today was" : ""} </span>
          <span> {count === 0 ? "Today is" : ""} </span>
          <span> {count > 0 ? "from Today will be" : ""} </span>
          {formattedDate}
        </h1>
      </div>
    </div>
  );
}

export default App;
