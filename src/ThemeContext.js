import { createContext, useContext, useReducer, useEffect } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer((s,a)=>{
    switch (a.type) {
      case "THEME/TOGGLE": return { ...s, mode: s.mode === "light" ? "dark" : "light" };
      default: return s;
    }
  }, { mode: "light" });

  useEffect(()=>{ console.log("%c[ThemeProvider] mounted", "color:green"); },[]);
  const value = { state, dispatch };
  console.log("[ThemeProvider] value =", value); // должен быть объект

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  console.log("[useTheme] ctx =", ctx); // сейчас null у тебя
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
