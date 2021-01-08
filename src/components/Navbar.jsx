import React from 'react'
import { useThemeState} from '../contexts/ThemeContext'


export const Navbar = () => {

   
    const {isLightTheme, light, dark}=useThemeState();
    const theme = isLightTheme ? light : dark
    return (
       <nav style= {{background:theme.ui, color: theme.syntax}}>
           <h1>Context App</h1>
               <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Contact</li>
               </ul>
       </nav>
    )
}

