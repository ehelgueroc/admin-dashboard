import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Box, useTheme, useMediaQuery, TextField } from '@mui/material';
import Header from '../../components/Header';
import { getColorTokens } from '../../utils/getColorTokens';

function Form() {
  const theme = useTheme();
  const colors = getColorTokens(theme.palette.mode);
  console.log(colors);
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',

    address2: '',
  };

  const phoneRegExpr = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

  const profileSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('Invalid email').required('required'),
    contact: yup.string().matches(phoneRegExpr, 'Phone number is not valid').required('required'),
    address1: yup.string().required('required'),
    address2: yup.string().required('required'),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m='20px'>
      <Header title='FORM' subtitle='Form to add new data' />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={profileSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0,1fr))'
              sx={{ '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' } }}
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='FirstName'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
