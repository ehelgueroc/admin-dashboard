import { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { getColorTokens } from '../../utils/getColorTokens';
import { menuConfig } from '../../config/menu';
import MenuCategory from '../../components/MenuCategory';

function SideNavbar() {
  const theme = useTheme();
  const colors = getColorTokens(theme.palette.mode);

  const [selected, setSelected] = useState(menuConfig.defaultMenu);

  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Box
      sx={{
        '& .ps-sidebar-root': {
          background: `${colors.primary[400]} !important`,
          height: '100vh',
          border: 'none',
          font: 'Source Sans Pro',
        },
        '& .ps-sidebar-container': {
          background: `transparent !important`,
        },
        '& .ps-menu-icon': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-menu-button:hover': {
          backgroundColor: 'transparent !important',
          color: `${colors.blueAccent[500]} !important`,
        },
        '& .ps-menu-button.ps-active, & .ps-menu-button.ps-active a ': {
          color: `${colors.greenAccent[400]} !important`,
        },
        '& .ps-menuitem-root a': {
          textDecoration: 'none',
          color: 'inherit',
        },
      }}
    >
      <Sidebar backgroundColor={colors.primary[400]}>
        <Menu iconShape='square'>
          <MenuItem
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            onClick={() => collapseSidebar(!collapsed)}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
                <Typography variant='h5' color={colors.grey[100]}>
                  AXEBOARD
                </Typography>
                <IconButton onClick={() => collapseSidebar(!collapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignContent='center'>
                <img
                  alt=''
                  src='../../assets/profile.jpeg'
                  width='100px'
                  height='100px'
                  style={{
                    borderRadius: '50%',
                    backgroundColor: 'black',
                    cursor: 'pointer',
                  }}
                />
              </Box>
              <Box textAlign='center'>
                <Typography mt='10px' alignContent='center' variant='h2' color={colors.grey[100]}>
                  Steve Axe
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[400]}>
                  CTO Axe Corp
                </Typography>
              </Box>
            </Box>
          )}
          <Box>
            {menuConfig.categories.map((category) => (
              <MenuCategory
                key={category.name}
                category={category}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default SideNavbar;
