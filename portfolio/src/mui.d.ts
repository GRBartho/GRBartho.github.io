import type {} from "@mui/material/styles";
import type {} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    emerald: {
      400: string;
      500: string;
      600: string;
      700: string;
      contrastText: string;
    };

    slate: {
      800: string;
      500: string;
      400: string;
    };

    border: {
      structural: string;
      interactive: string;
      subtle: string;
    };
  }

  interface PaletteOptions {
    emerald?: {
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      contrastText?: string;
    };

    slate?: {
      800?: string;
      500?: string;
      400?: string;
    };

    border?: {
      structural?: string;
      interactive?: string;
      subtle?: string;
    };
  }
}
