import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";


export let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1F75FE",
    },
    secondary: {
      main: "#FEA81F",
    },
    background: {
      default: "#f1faff",
    },
    text: {
      primary: "#171959",
      secondary: "#a7bbc7",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 14,
    fontFamily: `'Sarabun', sans-serif`,
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
  MuiListItemText: {
    primary: {},
  },
};

export const mainTheme = responsiveFontSizes(theme);
