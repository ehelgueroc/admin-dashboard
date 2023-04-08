import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { getColorTokens } from './utils/getColorTokens';

// mui theme settings
export const themeSettings = (mode) => {
  // get all the variants colors
  const colors = getColorTokens(mode);
  // set the fontFamily by default
  const fontFamily = ['Source Sans Pro', 'sans-serif'].join(',');

  // set base dark colors
  const darkModeColors = {
    primary: {
      main: colors.primary[500],
    },
    secondary: {
      main: colors.greenAccent[500],
    },
    neutral: {
      dark: colors.grey[700],
      main: colors.grey[500],
      light: colors.grey[100],
    },
    background: {
      default: colors.primary[500],
    },
  };

  // updated to be light colors
  const lightModeColors = {
    ...darkModeColors,
    primary: {
      main: colors.primary[100],
    },
    background: {
      default: '#fcfcfc',
    },
  };

  // return required custom object for mui to set styles
  return {
    palette: {
      mode,
      ...(mode === 'dark' ? darkModeColors : lightModeColors),
    },
    typography: {
      fontFamily,
      fontSize: 12,
      h1: {
        fontFamily,
        fontSize: 40,
      },
      h2: {
        fontFamily,
        fontSize: 32,
      },
      h3: {
        fontFamily,
        fontSize: 24,
      },
      h4: {
        fontFamily,
        fontSize: 20,
      },
      h5: {
        fontFamily,
        fontSize: 14,
      },
      h6: {
        fontFamily,
        fontSize: 14,
      },
    },
  };
};

// create a context to share the theme
export const ColorModeContext = createContext({});

// create the hook
export const useMode = () => {
  // set the state for the dark or light color
  const [mode, setMode] = useState('dark');
  // create a function to allow to change the color
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [],
  );

  // set a theme variable to get the theme base on the mode
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
