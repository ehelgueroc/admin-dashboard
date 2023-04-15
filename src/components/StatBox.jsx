import { useTheme, Box, Typography } from '@mui/material';
import { getColorTokens } from '../utils/getColorTokens';
import ProgressCircle from './ProgressCircle';

function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = getColorTokens(theme.palette.mode);

  return (
    <Box width='100%' m='0 30px'>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          {icon}
          <Typography variant='h4' fontWeight='bold' sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h4' fontWeight='bold' sx={{ color: colors.greenAccent[100] }}>
            {subtitle}
          </Typography>
          <Typography
            variant='h5'
            fontStyle='italic'
            fontWeight='bold'
            sx={{ color: colors.greenAccent[100] }}
          >
            {increase} %
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default StatBox;
