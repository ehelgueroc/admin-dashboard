// CssBaseline is a reset for elements from material ui
// ThemeProvider allow us to set the theme of the app
import { CssBaseline, ThemeProvider } from '@mui/material';
// ColorModeContext is a context in which we can set the dark or light mode
// useMode is a hook to get the actual theme and the function to change the color
import { Route, Routes } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { ColorModeContext, useMode } from './theme';

// Component to show the top bar
import TopBar from './scenes/global/TopBar';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import Calendar from './scenes/calendar';

function App() {
  // get from the hook the theme and colorMode
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className='app'>
            <Sidebar />
            <main className='content'>
              <TopBar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/team' element={<Team />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/invoices' element={<Invoices />} />
                <Route path='/form' element={<Form />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/line' element={<Line />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/geography' element={<Geography />} />
                <Route path='/calendar' element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
