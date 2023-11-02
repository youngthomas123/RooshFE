import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>

        <Link component={{ Link }} to={`/dashboard`} className='link'>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>

        <Link component={{ Link }} to={`/providers`} className='link'>
            <ListItemButton>
                <ListItemIcon>
                    <DirectionsCarFilledOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Providers" />
            </ListItemButton>
        </Link>

        <Link component={{ Link }} to={`/bookings`} className='link'>
            <ListItemButton>
                <ListItemIcon>
                    <CalendarMonthOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Bookings" />
            </ListItemButton>
        </Link>

        <Link component={{ Link }} to={`/airports`} className='link'>
            <ListItemButton>
                <ListItemIcon>
                    <AirplanemodeActiveOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Airports" />
            </ListItemButton>
        </Link>


    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}

        <Link component={{ Link }} to={`/settings`} className='link'>
            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
        </Link>

        <Link component={{ Link }} to={`/notifications`} className='link'>
            <ListItemButton>
                <ListItemIcon>
                    <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
            </ListItemButton>
        </Link>
        
        <Link component={{ Link }} to={`/profile`} className='link'>
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);