import { useMemo, useState,useCallback, memo } from "react";

const IncrementButton = memo(({ onIncrement }) => {
  console.log("IncrementButton rendered");
  return <button onClick={onIncrement}>Increment</button>;
});

const HeavyCalculation = memo(({ num }) => {
    console.log("HeavyCalculation rendered");
    const result = useMemo(() => {
        return num **5;
    }, [num]);
    return <div>Heavy Calculation Result: {result}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount((c)=> c + 1);
  }, []);

  return (
    <div>
        <h1> current Counter: {count}</h1>
        <IncrementButton onIncriment= {increment} />
        <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Type something..."
        />
        <HeavyCalculation num = {count} />

    </div>
    );
}