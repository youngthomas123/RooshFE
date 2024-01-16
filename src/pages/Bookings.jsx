import { Typography, Button, IconButton, Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import TableBookings from '../components/BookingComponent/TableBookings';
import { useState } from "react";

const Bookings = () => {

    return (
        <>
            <Box sx={{ width: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'grey' }}>
                Bookings
            </Typography>



            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            >
                <Box>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Overview
                    </Typography>
                </Box>

            </Stack>


            <TableBookings />

        </Box>
        </>
    );
}

export default Bookings;

