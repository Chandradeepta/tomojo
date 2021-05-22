import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0BD67E",
    },
    secondary: {
      main: "#D50BA6",
    },
    contrastThreshold: 1,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 10,
    fontFamily: `'Nunito', sans-serif`,
  },
});

theme.overrides = {
  MuiMenuItem: {
    root: {
      "&$selected": {
        backgroundColor: theme.palette.primary.light,
      },
      "&:hover &$selected": {
        backgroundColor: "#111",
      },
    },
  },
};

export const mainTheme = responsiveFontSizes(theme);
