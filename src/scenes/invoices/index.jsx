import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';
import Header from '../../components/Header';
import { getColorTokens } from '../../utils/getColorTokens';

function Invoices() {
  const theme = useTheme();
  const colors = getColorTokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: ({ row: { cost } }) => (
        <Box>
          <Typography sx={{ color: colors.greenAccent[500] }}>${cost}</Typography>
        </Box>
      ),
    },
    {
      field: 'phone',
      headerName: 'Phone number',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ];

  return (
    <Box m='20px'>
      <Header title='CONTACTS' subtitle='Managing your contacts' />
      <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]}`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          disableRowSelectionOnClick
          checkboxSelection
        />
      </Box>
    </Box>
  );
}

export default Invoices;
