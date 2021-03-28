import { createMuiTheme } from "@material-ui/core";
import { cstThemeBase, cstThemeNav } from "../../utils/themes"
const useCustomTheme = () => {
  const customBaseTheme = createMuiTheme( cstThemeBase )
  const customTitleFont = createMuiTheme(
    {
      typography: {
        fontFamily: ["Oswald", "sans-serif"].join(),
        fontWeightBold: 600
      }
    }
  )
  const navTheme = createMuiTheme(cstThemeNav)

  return { customBaseTheme, customTitleFont, navTheme }
}

export default useCustomTheme