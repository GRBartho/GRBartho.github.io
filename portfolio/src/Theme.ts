import { createTheme } from "@mui/material/styles";

export const main = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#F1F5F9",
      secondary: "#CBD5E1",
    },
    emerald: {
      400: "#34D399",
      500: "#10B981",
      600: "#059669",
      700: "#047857",
    },
    slate: {
      400: "94A3B8",
      500: "#64748B",
      800: "#1E293B",
    },
    border: {
      subtle: "rgba(52, 211, 153, 0.1)", // #34D399 at 10%
      interactive: "rgba(16, 185, 129, 0.5)", // #10B981 at 50%
      structural: "rgba(6, 78, 59, 0.2)", // #064E3B at 20%
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
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: "bolder",
    },
    h2: {
      fontFamily: "'Inter', sans-serif",
    },
    h3: {
      fontFamily: "'Inter', sans-serif",
    },
    h4: {
      fontFamily: "'Inter', sans-serif",
    },
    h5: {
      fontFamily: "'Inter', sans-serif",
    },
    h6: {
      fontFamily: "'Inter', sans-serif",
    },
    button: {
      fontFamily: "'Inter', sans-serif",
      textTransform: "none",
      fontSize: "16px",
      fontWeight: "bolder",
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
