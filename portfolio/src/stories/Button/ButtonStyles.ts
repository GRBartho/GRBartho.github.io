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
    backgroundColor: theme.palette.primary.main,
  },
  gray: {},
}));