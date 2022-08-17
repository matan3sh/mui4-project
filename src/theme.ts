import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createTheme" {
  interface ThemeOptions {}
}

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
});
