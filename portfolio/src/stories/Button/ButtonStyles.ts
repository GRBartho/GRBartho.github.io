// Filename: ButtonStyles.ts
//
// Component: Button Styles
//
// Purpose:
// Provide reusable MUI styling to the button component
//
// What this file does:
// - Uses tss-react's 'makeStyles' hook to create a styling class that is returned
// when the hook is called. This class can be called using class.StylePropertyName to implement
// style into the component

import { makeStyles } from "tss-react/mui";

export const useButtonStyles = makeStyles()((theme) => ({
  green: {
    backgroundColor: theme.palette.emerald[500],
    color: theme.palette.text.primary,
    borderRadius: "50px",
    fontWeight: "bolder",
    border: theme.palette.border.subtle,
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.emerald[700],
    },
    "& .MuiButton-startIcon": {
      height: "24px",
      width: "24px",
    },
  },
  gray: {
    backgroundColor: theme.palette.slate[800],
    color: theme.palette.text.primary,
    borderRadius: "50px",
    fontWeight: "bolder",
    border: theme.palette.border.structural,
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.slate[500],
    },
    "& .MuiButton-startIcon": {
      height: "24px",
      width: "24px",
    },
  },
}));
