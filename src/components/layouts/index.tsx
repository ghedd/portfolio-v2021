import React from "react"
import "./styles.scss"
import "@fontsource/open-sans"
import "@fontsource/oswald"
import { ThemeProvider } from "@material-ui/core"
import useCustomTheme from "../../hooks/useCustomTheme"
import Footer from "./footer"
import Header from "./header"

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
        style={{
          background: background,
          position: "relative",
          // minHeight: "90vh",
          paddingTop: "3rem",
        }}
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
