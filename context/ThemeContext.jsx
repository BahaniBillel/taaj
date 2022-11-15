import React, { createContext } from "react";

export const ThemeContext = createContext();

const initialState = {
  isLightTheme: true,
  light: { syntax: "#555", ui: "#ddd", bg: "#fff" },
  dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
};

const toggleTheme = () => {
  setState({ isLightTheme: !state.isLightTheme });
};

export function ThemeContextProvider(props) {
  return (
    <ThemeContext.Provider
      value={{ ...initialState, toggleTheme: toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
