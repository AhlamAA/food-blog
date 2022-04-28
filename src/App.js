import React from 'react'
import Hero from './componants/Hero'
import Navbar from './componants/Navbar'
import LatestRecipes from './componants/LatestRecipes'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from './componants/Footer';

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
        <Navbar/>
        <Hero />
        <LatestRecipes />
        <Footer />
    </ThemeProvider>
  )
}
