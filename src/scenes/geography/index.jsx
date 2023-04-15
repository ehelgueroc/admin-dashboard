import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';

function Geography() {
  return (
    <Box m='20px'>
      <Header title='GEO CHART' subtitle='Show your numbers with style' />
      <Box height='75vh' mt='20px'>
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default Geography;
