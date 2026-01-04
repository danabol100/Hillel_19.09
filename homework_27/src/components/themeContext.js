import { createContext } from "react";

export const themes = {
  white: {
    color: "black",
    backgroundColor: "white",
  },
  dark: {
    color: "white",
    backgroundColor: "black",
  },
};
export const ThemeContext = createContext();
