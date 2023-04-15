import { Box } from '@mui/material';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';

function Bar() {
  return (
    <Box m='20px'>
      <Header title='BAR GRAPH' subtitle='This is a showcase of a graph bar' />
      <Box height='75vh'>
        <BarChart />
      </Box>
    </Box>
  );
}

export default Bar;
