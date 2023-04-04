// CssBaseline is a reset for elements from material ui
// ThemeProvider allow us to set the theme of the app
import { CssBaseline, ThemeProvider } from '@mui/material';
// ColorModeContext is a context in which we can set the dark or light mode
// useMode is a hook to get the actual theme and the function to change the color
import { ColorModeContext, useMode } from './theme';
// Component to show the top bar
import TopBar from './scenes/global/TopBar';

function App() {
  // get from the hook the theme and colorMode
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <main className='content'>
            <TopBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
