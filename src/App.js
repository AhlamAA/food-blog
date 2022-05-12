import React from 'react'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import OneRecipe from './pages/OneRecipe';


const theme = createTheme({
    typography: {
      fontFamily: [
        "Cormorant Garamond",
        "sans-serif"
      ].join(",")
    }
  })

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home/>
        {/* <Recipes /> */}
        {/* <OneRecipe /> */}
    </ThemeProvider>
  )
}
