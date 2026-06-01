import type { Preview } from '@storybook/react-vite';
import { ThemeProvider, CssBaseline, StyledEngineProvider } from '@mui/material';
import { main } from '../src/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={main}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </StyledEngineProvider>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;