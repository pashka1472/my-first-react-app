import { useTheme } from './ThemeContext';

 export default function CounterControls() {
  const { state, dispatch } = useTheme();
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={() => dispatch({ type: "COUNTER/DEC" })}>-1</button>
      <strong>{state.count}</strong>
      <button onClick={() => dispatch({ type: "COUNTER/INC" })}>+1</button>
    </div>
  );
}

