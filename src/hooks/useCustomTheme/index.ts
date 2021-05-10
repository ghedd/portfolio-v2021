import { createMuiTheme } from "@material-ui/core";
import { cstThemeBase, cstThemeNav } from "../../utils/themes"
const useCustomTheme = () => {
  const customBaseTheme = createMuiTheme( cstThemeBase )

  const navTheme = createMuiTheme( cstThemeNav )

  return { customBaseTheme, navTheme }
}

export default useCustomTheme