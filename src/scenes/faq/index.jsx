import { Box, useTheme, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header';
import { getColorTokens } from '../../utils/getColorTokens';

function FAQ() {
  const theme = useTheme();
  const colors = getColorTokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently asked questions' />
      <Box mt='20px'>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              An Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore delectus quisquam
              quae ullam non recusandae alias iste placeat architecto tempora vel cupiditate et
              minus, vitae ad ut a quis doloremque!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              An Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore delectus quisquam
              quae ullam non recusandae alias iste placeat architecto tempora vel cupiditate et
              minus, vitae ad ut a quis doloremque!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              An Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore delectus quisquam
              quae ullam non recusandae alias iste placeat architecto tempora vel cupiditate et
              minus, vitae ad ut a quis doloremque!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              An Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore delectus quisquam
              quae ullam non recusandae alias iste placeat architecto tempora vel cupiditate et
              minus, vitae ad ut a quis doloremque!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              An Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore delectus quisquam
              quae ullam non recusandae alias iste placeat architecto tempora vel cupiditate et
              minus, vitae ad ut a quis doloremque!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              An Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore delectus quisquam
              quae ullam non recusandae alias iste placeat architecto tempora vel cupiditate et
              minus, vitae ad ut a quis doloremque!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default FAQ;
