import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TableAirport from '../components/AirportComponent/TableAirport';

const Airports = () => {

    return (
        <div>
            <Typography variant="h4">
                Airports View
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

                <Button variant="contained" size='large' sx={{ textTransform: 'none', py: 1.3 }}>Add Airport</Button>

            </Stack>

            <TableAirport />
        </div>
    );
}

export default Airports;

