import { useTheme } from "./ThemeContext";

export default function ThemeButton() {
  const { state, dispatch } = useTheme();
  return (
    <button onClick={() => dispatch({ type: "THEME/TOGGLE" })}>
      Theme: {state.mode.toUpperCase()} (toggle)
    </button>
  );
}
