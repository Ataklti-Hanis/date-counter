import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <button onClick={() => setStep(step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count: {count} </span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
    </div>
  );
}
