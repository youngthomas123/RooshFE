import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Paper, Stack, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CircleIcon from '@mui/icons-material/Circle';
export default function PerfomanceChart() {
    const xAxis = [
        {
            data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            scaleType: 'band',
        },
    ];
    return (
        <Paper sx={{ mt: 3, p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Performance
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ color: 'grey' }}>
                May 01 2023 - May 31 2023
            </Typography>

            <LineChart
                xAxis={xAxis}
                series={[
                    {
                        data: [110, 80, 120, 40, 110, 51, 70],
                        valueFormatter: (value) => (value == null ? '?' : value.toString()),
                        color: 'darkred'
                    },
                    {
                        data: [50, 175, 200, 51, 30, 201, 70],
                        valueFormatter: (value) => (value == null ? '?' : value.toString()),
                        color: 'blue'
                    },
                    {
                        data: [200, 30, 12, 120, 200, 160, 198],
                        valueFormatter: (value) => (value == null ? '?' : value.toString()),
                        color: 'green'
                    },
                    {
                        data: [800 , 52, 100, 200, 100, 128, 20,],
                        valueFormatter: (value) => (value == null ? '?' : value.toString()),
                        color: 'orange'
                    },
                ]}
                height={450}
            //  margin={{ top: 10, bottom: 20 }}
            />
            <Box>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ mt: 3 }}
                >
                    <Box>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant="body" gutterBottom sx={{ color: 'grey' }}>
                                Providers
                            </Typography>
                            <VisibilityIcon/>
                        </Stack>
                        <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}>
                        <CircleIcon sx={{color:'darkblue'}}/> <Typography>1780</Typography>
                        </Stack>
                        
                    </Box>

                    <Typography variant="body" gutterBottom sx={{ color: 'grey' }}>
                        Completed
                    </Typography>
                    <Typography variant="body" gutterBottom sx={{ color: 'grey' }}>
                        Pending
                    </Typography>
                    <Typography variant="body" gutterBottom sx={{ color: 'grey' }}>
                        Canceled
                    </Typography>
                </Stack>
            </Box>
        </Paper>
    );
}