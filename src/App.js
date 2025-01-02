import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setCount(setStep(Number(e.target.value)))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "today is"
            : count > 0
            ? `${count} day from today is `
            : `${count} days ago was `}
        </span>
        {date.toDateString()}
      </p>
      <div>
        <button onClick={handleClick}>Reset</button>
      </div>
    </div>
  );
}
