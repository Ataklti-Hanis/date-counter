export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  return (
    <div>
      <div>
        <button>-</button>
        <span>Step</span>
        <button>+</button>
      </div>
      <div></div>
    </div>
  );
}
