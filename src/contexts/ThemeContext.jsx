import React from 'react'


const ThemeStateContext =React.createContext();
const ThemeDispatchContext= React.createContext();

function ThemeProvider () {
    state = {
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: "#eee"},
        dark: {syntax: '#ddd', ui: '#333', bg: "#555"}

    }
    return(<ThemeStateContext.Provider>
        
        
        </ThemeStateContext.Provider>
        );
}



export { ThemeProvider, ThemeStateContext, ThemeDispatchContext };