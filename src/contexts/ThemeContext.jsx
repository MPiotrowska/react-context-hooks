import React from "react";

const ThemeStateContext = React.createContext();
const ThemeDispatchContext = React.createContext();

function ThemeContextProvider({children}) {
  const state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  return (
    <ThemeStateContext.Provider value={{ ...state }}>
      {children}
    </ThemeStateContext.Provider>
  );
}

function useThemeState() {
    const context = React.useContext(ThemeStateContext);
    if (context === undefined) {
      throw new Error('useTodoState must be used within a TodoProvider');
    }
    return context;
  }

export { ThemeContextProvider, ThemeStateContext, ThemeDispatchContext, useThemeState };
