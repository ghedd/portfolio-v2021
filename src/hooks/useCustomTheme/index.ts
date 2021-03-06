import { createMuiTheme } from "@material-ui/core";

const useCustomTheme = () => {
  const customPallete = createMuiTheme(
    {
      palette: {
        primary: {
          main: "#19d6ba"
        },
        secondary: {
          main: "#0b2832",
          light: "#233e47"
        },
        text: {
          primary: "#fafafa"
        }
      },
      typography: {
        fontFamily: ["Open Sans", "san-serif"].join(),
        fontWeightBold: 600
      }
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
        fontWeightMedium: 400
      }
    }
  )

  return { customPallete, customTitleFont, navFont }
}

export default useCustomTheme