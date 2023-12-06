import { BottomNavigation, Box, Button, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Dropdown from '../components/DashboardComponent/Dropdown';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import SearchBox from '../components/DashboardComponent/SearchBox';
import TopNav from '../components/DashboardComponent/TopNav';
import ChartCard from '../components/DashboardComponent/ChartCard';
import PerfomanceChart from '../components/DashboardComponent/PerfomanceChart';


const Dashboard = () => {


    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ color: 'grey' }}>
                Dashboard
            </Typography>


            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}

            >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Overview
                </Typography>

                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={2}>
                    <Dropdown />
                    <SearchBox />
                </Stack>

            </Stack>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{ mt: 4 }}
            >
                <TopNav />
                <Button variant="contained" sx={{ height: 55, width:120 }}>Options</Button>
            </Stack>

            <ChartCard/>
            <PerfomanceChart/>
        </Box>
    );
}

export default Dashboard;

