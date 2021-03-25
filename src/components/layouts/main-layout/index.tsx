import React from "react"
import "./styles.scss"
import { ThemeProvider } from "@material-ui/core"
import useCustomTheme from "../../../hooks/useCustomTheme"
import Footer from "../footer"
import Header from "../header"

interface MainLayoutProps {
  className?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  const { customBaseTheme } = useCustomTheme()
  const background = customBaseTheme.palette.secondary.main
  return (
    <ThemeProvider theme={customBaseTheme}>
      <div
        id="main-layout"
        style={{ background: background }}
        className={className}
      >
        <Header siteTitle="Home" />
        <main id="body">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MainLayout
