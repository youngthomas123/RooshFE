import { Box, Button, Typography, Stack } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableProviders from '../components/ProvidersComponent/tableProviders';
import ButtonAddProvider from '../components/ProvidersComponent/ButtonAddProviders';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SaveIcon from '@mui/icons-material/Save';




 

const Providers = () => {

    
    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'grey' }}>
                Providers
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

                <ButtonAddProvider/>

            </Stack>


            <TableProviders />

        </Box>




    );
}

export default Providers;

