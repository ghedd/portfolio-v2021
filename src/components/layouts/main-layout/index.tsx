import React from "react"
import "./styles.scss"
import { ThemeProvider } from "@material-ui/core"
import useCustomTheme from "../../../hooks/useCustomTheme"
import Footer from "../footer"
import Header from "../header"

const MainLayout: React.FC = ({ children }) => {
  const { customPallete } = useCustomTheme()
  const background = customPallete.palette.secondary.main
  return (
    <ThemeProvider theme={customPallete}>
      <div id="main-layout" style={{ background: background }}>
        <Header siteTitle="Home" />
        <main id="body">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MainLayout
