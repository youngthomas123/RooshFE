import { BottomNavigation, BottomNavigationAction, Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ProviderDetails = () => {
    // const { row } = useParams();
    const { rowData } = useParams();
    const decodedData = JSON.parse(decodeURIComponent(rowData));
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/providers');
    };
    return (
        <Box>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={2}
            >
                <ArrowBackIcon onClick={handleBack} sx={{ cursor: 'pointer' }} />
                <Typography variant="h5" gutterBottom sx={{ color: 'grey' }} component={Link} to={'/providers'}>
                    Provider
                </Typography>
            </Stack>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
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
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '15px',
                    mt: 3
                }}
            >
                <BottomNavigationAction component={Link} to={`/providers/details/${encodeURIComponent(rowData)}/general`} label="GENERAL" sx={{ backgroundColor: value === 0 ? 'orange' : 'inherit', color: value === 0 ? 'white !important' : 'inherit', borderRadius: 3  }} />
                <BottomNavigationAction component={Link} to={`/providers/details/${encodeURIComponent(rowData)}/business-info`} label="BUSINESS INFO" sx={{ backgroundColor: value === 1 ? 'orange' : 'inherit', color: value === 1 ? 'white !important' : 'inherit', borderRadius: 3 }} />
                <BottomNavigationAction component={Link} to={`/providers/details/${encodeURIComponent(rowData)}/bookings`} label="BOOKINGS" sx={{ backgroundColor: value === 2 ? 'orange' : 'inherit', color: value === 2 ? 'white !important' : 'inherit', borderRadius: 3 }} />
                <BottomNavigationAction component={Link} to={`/providers/details/${encodeURIComponent(rowData)}/options`} label="OPTIONS" sx={{ backgroundColor: value === 3 ? 'orange' : 'inherit', color: value === 3 ? 'white !important' : 'inherit', borderRadius: 3 }} />
                <BottomNavigationAction component={Link} to={`/providers/details/${encodeURIComponent(rowData)}/photos`} label="PHOTOS" sx={{ backgroundColor: value === 4 ? 'orange' : 'inherit', color: value === 4 ? 'white !important' : 'inherit', borderRadius: 3 }} />
                <BottomNavigationAction component={Link} to={`/providers/details/${encodeURIComponent(rowData)}/documents`} label="DOCUMENTS" sx={{ backgroundColor: value === 5 ? 'orange' : 'inherit', color: value === 5 ? 'white !important' : 'inherit', borderRadius: 3 }} />
                <BottomNavigationAction component={Link} to={`/providers/details/${encodeURIComponent(rowData)}/invoices`} label="INVOICES" sx={{ backgroundColor: value === 6 ? 'orange' : 'inherit', color: value === 6 ? 'white !important' : 'inherit', borderRadius: 3 }} />
                <BottomNavigationAction component={Link} to={`/providers/details/${encodeURIComponent(rowData)}/users`} label="USERS" sx={{ backgroundColor: value === 7 ? 'orange' : 'inherit', color: value === 7 ? 'white !important' : 'inherit', borderRadius: 3 }} />
                <BottomNavigationAction component={Link} to={`/providers/details/${encodeURIComponent(rowData)}/service-locations`} label="SERVICE LOCATIONS" sx={{ backgroundColor: value === 8 ? 'orange' : 'inherit', color: value === 8 ? 'white !important' : 'inherit', borderRadius: 3 }} />
            </BottomNavigation>

            <Outlet />
        </Box>
    )
}

export default ProviderDetails;