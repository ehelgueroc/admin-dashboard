import { Box } from '@mui/material';
import Header from '../../components/Header';
import CircleChart from '../../components/CircleChart';

function Pie() {
  return (
    <Box m='20px'>
      <Header title='PIE CHART' subtitle='Show your numbers with style' />
      <Box height='75vh'>
        <CircleChart />
      </Box>
    </Box>
  );
}

export default Pie;
