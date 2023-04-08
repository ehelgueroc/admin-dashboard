import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

export const menuConfig = {
  defaultMenu: 'Dashboard',
  categories: [
    {
      name: 'Home',
      position: 1,
      showName: false,
      items: [
        {
          title: 'Dashboard',
          route: '/',
          icon: <HomeOutlinedIcon />,
          position: 1,
        },
      ],
    },
    {
      name: 'Data',
      position: 2,
      showName: true,
      items: [
        {
          title: 'Manage Team',
          route: '/team',
          icon: <PeopleOutlinedIcon />,
          position: 1,
        },
        {
          title: 'Contacts Info',
          route: '/contacts',
          icon: <ContactsOutlinedIcon />,
          position: 2,
        },
        {
          title: 'Invoices Balances',
          route: '/invoices',
          icon: <ReceiptOutlinedIcon />,
          position: 3,
        },
      ],
    },
    {
      name: 'Pages',
      position: 3,
      showName: true,
      items: [
        {
          title: 'Profile Form',
          route: '/form',
          icon: <PersonOutlinedIcon />,
          position: 1,
        },
        {
          title: 'Calendar',
          route: '/calendar',
          icon: <CalendarTodayOutlinedIcon />,
          position: 2,
        },
        {
          title: 'FAQ Page',
          route: '/faq',
          icon: <HelpOutlineOutlinedIcon />,
          position: 3,
        },
      ],
    },
    {
      name: 'Charts',
      position: 3,
      showName: true,
      items: [
        {
          title: 'Bar Chart',
          route: '/bar',
          icon: <BarChartOutlinedIcon />,
          position: 1,
        },
        {
          title: 'Pie Chart',
          route: '/pie',
          icon: <PieChartOutlineOutlinedIcon />,
          position: 2,
        },
        {
          title: 'Line Chart',
          route: '/line',
          icon: <TimelineOutlinedIcon />,
          position: 3,
        },
        {
          title: 'Geography Chart',
          route: '/geography',
          icon: <MapOutlinedIcon />,
          position: 3,
        },
      ],
    },
  ],
};
