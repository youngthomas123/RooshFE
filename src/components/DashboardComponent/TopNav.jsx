import { BottomNavigation, BottomNavigationAction, Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Link, Outlet, useParams } from 'react-router-dom';


const TopNav = () => {
    const [value, setValue] = React.useState(0);

    const navigationItems = [
        { label: 'Current',},
        { label: '7-Days'},
        { label: '30-Days'},
        { label: 'Custom'},
    ];

    const handleNavigation = (newValue, to) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => handleNavigation(newValue, navigationItems[newValue].to)}
            sx={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                mt: 3,
                width:400
            }}
        >
            {navigationItems.map((item, index) => (
                <BottomNavigationAction
                    key={index}
                    component={Link}
                    to={item.to}
                    label={item.label}
                    sx={{
                        backgroundColor: value === index ? 'orange' : 'inherit',
                        color: value === index ? 'white !important' : 'inherit',
                        borderRadius: 3,
                    }}
                />
            ))}
        </BottomNavigation >

    );
}

export default TopNav;

