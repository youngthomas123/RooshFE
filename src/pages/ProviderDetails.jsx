import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import Cookies from 'js-cookie';

const ProviderDetails = () => {
    const { rowData } = useParams();
    const decodedData = JSON.parse(decodeURIComponent(rowData));
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const navigationItems = [
        { label: 'GENERAL', to: `/providers/details/${encodeURIComponent(rowData)}/general` },
        { label: 'BUSINESS INFO', to: `/providers/details/${encodeURIComponent(rowData)}/business-info` },
        { label: 'BOOKINGS', to: `/providers/details/${encodeURIComponent(rowData)}/bookings` },
        { label: 'OPTIONS', to: `/providers/details/${encodeURIComponent(rowData)}/options` },
        { label: 'PHOTOS', to: `/providers/details/${encodeURIComponent(rowData)}/photos` },
        { label: 'DOCUMENTS', to: `/providers/details/${encodeURIComponent(rowData)}/documents` },
        { label: 'INVOICES', to: `/providers/details/${encodeURIComponent(rowData)}/invoices` },
        { label: 'USERS', to: `/providers/details/${encodeURIComponent(rowData)}/users` },
        { label: 'SERVICE LOCATIONS', to: `/providers/details/${encodeURIComponent(rowData)}/service-locations` },
    ];

    const handleBack = () => {
        navigate('/providers');
    };

    const handleNavigation = (newValue, to) => {
        setValue(newValue);
        navigate(`/providers/details/${encodeURIComponent(rowData)}/${to}`);
    };

    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={2}>
                <ArrowBackIcon onClick={handleBack} sx={{ cursor: 'pointer' }} />
                <Typography variant="h5" gutterBottom sx={{ color: 'grey' }} component={Link} to={'/providers'}>
                    Provider
                </Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Box>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {decodedData.name}
                    </Typography>
                </Box>
                <PhotoSizeSelectActualOutlinedIcon sx={{ fontSize: 90, color: 'black' }} />
            </Stack>

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => handleNavigation(newValue, navigationItems[newValue].to)}
                sx={{
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '15px',
                    mt: 3,
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
            <Box sx={{mt: 2}}>
                <Outlet />
            </Box>

        </Box>
    );
};

export default ProviderDetails;
