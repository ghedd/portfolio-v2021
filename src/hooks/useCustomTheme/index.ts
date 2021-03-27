import { createMuiTheme } from "@material-ui/core";

const useCustomTheme = () => {
  const customBaseTheme = createMuiTheme(
    {
      palette: {
        primary: {
          main: "#19d6ba",
          light: "#aed0cb"
        },
        secondary: {
          main: "#0b2832",
          light: "#233e47",
          dark: "#0e0e0e"
        },
        text: {
          primary: "#fafafa",
          secondary: "#aed0cb",
          disabled: "#2d6c63"
        },
        error: {
          main: "#f07373"
        }
      },
      typography: {
        fontFamily: ["Open Sans", "san-serif"].join(),
        fontWeightBold: 600
      },
    }
  )
  const customTitleFont = createMuiTheme(
    {
      typography: {
        fontFamily: ["Oswald", "sans-serif"].join(),
        fontWeightBold: 600
      }
    }
  )
  const navFont = createMuiTheme(
    {
      typography: {
        fontFamily: ["Oswald", "sans-serif"].join(),
        fontWeightMedium: 400,
        fontWeightBold: 600,
      }
    }
  )

  return { customBaseTheme, customTitleFont, navFont }
}

export default useCustomTheme