import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#71c5f3",
    },
    secondary: {
      main: "#4e90b5",
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
