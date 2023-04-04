import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { getColorTokens } from './utils/getColorTokens';

// mui theme settings
export const themeSettings = (mode) => {
  const colors = getColorTokens(mode);
  const fontFamily = ['Source Sans Pro', 'sans-serif'].join(',');
  return {
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
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
          }
        : {
            primary: {
              main: colors.primary[100],
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
              default: '#fcfcfc',
            },
          }),
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
          fontSize: 16,
        },
        h6: {
          fontFamily,
          fontSize: 14,
        },
      },
    },
  };
};

export const ColorModeContext = createContext({});

export const useMode = () => {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
