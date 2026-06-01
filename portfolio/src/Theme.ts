import { createTheme } from "@mui/material";

export const main = createTheme({
/*   components: {
      MuiButton: {
    styleOverrides: {
      root: {
      fontFamily: "'Saira Condensed', sans-serif",
      },
    },
  },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-sizeSmall": {
            height: 40,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 4,
          marginRight: 4,
        },
      },
    },
  }, */
  palette: {
    mode: "light",
    primary: {
      main: "#10B981",
      dark: "#059669",
      light: "#34D399",
      contrastText: "#fff",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
/*   shape: {
    borderRadius: 4,
  },
  typography: {
    htmlFontSize: 16,
    //fontFamily: "'Saira Condensed',sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: 75,
      fontWeight: 700,
      fontFamily: "'Saira Condensed',sans-serif",
      color: "#C30101",
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontSize: 30,
      fontWeight: 700,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
    },
    h5: {
      fontSize: 22,
      fontWeight: 700,
    },
    h6: {
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: "'Inter'",
      fontSize: 14,
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontSize: 16,
      fontWeight: 700,
    },
  }, */
});

export const lightGreen = createTheme({});
export const lightBlue = createTheme({});
export const lightYellow = createTheme({});

export const darkRed = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#C30101",
      dark: "#9C0101",
      light: "#E25A5A",
      contrastText: "#000000",
    },
  },
});
export const darkGreen = createTheme({});
export const darkBlue = createTheme({});
export const darkYellow = createTheme({});