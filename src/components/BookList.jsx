import React from "react";
import { useThemeState} from '../contexts/ThemeContext'

export const BookList = () => {
  const contextState = useThemeState()
    console.log(contextState)
  return (
    <div className="book-list">
      <li>the way of kings</li>
      <li>the name of the wind</li>
      <li>the final empire</li>
    </div>
  );
};
