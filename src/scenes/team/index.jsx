import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { mockDataTeam } from '../../data/mockData';
import Header from '../../components/Header';
import { getColorTokens } from '../../utils/getColorTokens';

function Team() {
  const theme = useTheme();
  const colors = getColorTokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      headerAlign: 'center',
      renderCell: ({ row: { access } }) => (
        <Box
          width='60%'
          m='0 auto'
          p='5px'
          display='flex'
          justifyContent='center'
          backgroundColor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
        >
          {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
          {access === 'manager' && <SecurityOutlinedIcon />}
          {access === 'user' && <LockOpenOutlinedIcon />}
          <Typography ml='5px'>{access}</Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box m='20px'>
      <Header title='TEAM MANAGEMENT' subtitle='Managing the team members in AXE' />
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
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} disableRowSelectionOnClick />
      </Box>
    </Box>
  );
}

export default Team;
