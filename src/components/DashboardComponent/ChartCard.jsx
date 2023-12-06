import * as React from 'react';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const pData = [900, 510, 600, 650, 690];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function ChartCard() {
    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                sx={{ mt: 3 }}
            >
                {/* providers */}
                <Card sx={{ width: 300, height: 230, borderRadius: 3, pr: 2, backgroundColor:'#9895fc'}}>
                    <CardContent>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                            sx={{ mt: 2, ml: 2 }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <Typography variant='h5' sx={{color: 'white'}}>
                                    1165
                                </Typography>
                                <Typography variant="body" gutterBottom sx={{ color: 'white' }}>(+4,123%)</Typography>
                            </Stack>
                            <MoreVertIcon sx={{color:'white'}}/>
                        </Stack>
                        <Typography sx={{ ml: 2, mt: 0.2, color:'white' }}>Providers</Typography>
                        <ChartContainer
                            width={400}
                            height={140}
                            series={[{ type: 'line', data: pData }]}
                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                            sx={{
                                '.MuiLineElement-root': {
                                    stroke: 'white',
                                    strokeWidth: 2,
                                },
                                '.MuiMarkElement-root': {
                                    stroke: 'white',
                                    scale: '0.6',
                                    fill: '#9895fc',
                                    strokeWidth: 2,
                                },
                                ml: -3
                            }}
                            disableAxisListener
                        >
                            <LinePlot />
                            <MarkPlot />
                        </ChartContainer>
                    </CardContent>
                </Card>
                {/* completet orders */}
                <Card sx={{ width: 300, height: 230, borderRadius: 3, pr: 2, backgroundColor: '#7aaa4a'}}>
                    <CardContent>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                            sx={{ mt: 2, ml: 2 }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >

                                <Typography variant='h5' sx={{color:'white'}}>
                                    1165
                                </Typography>
                                <Typography variant="body" gutterBottom sx={{ color: 'white' }}>(+4,123%)</Typography>
                            </Stack>
                            <MoreVertIcon sx={{color: 'white'}} />
                        </Stack>
                        <Typography sx={{ ml: 2, mt: 0.2, color:'white' }}>Completed Orders</Typography>
                        <ChartContainer
                            width={400}
                            height={140}
                            series={[{ type: 'line', data: pData }]}
                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                            sx={{
                                '.MuiLineElement-root': {
                                    stroke: 'white',
                                    strokeWidth: 2,
                                },
                                '.MuiMarkElement-root': {
                                    stroke: 'white',
                                    scale: '0.6',
                                    fill: '#7aaa4a',
                                    strokeWidth: 2,
                                },
                                ml: -3
                            }}
                            disableAxisListener
                        >
                            <LinePlot />
                            <MarkPlot />
                        </ChartContainer>
                    </CardContent>
                </Card>
                {/* pending orders */}
                <Card sx={{ width: 300, height: 230, borderRadius: 3, pr: 2, backgroundColor:'#e6b23d'}}>
                    <CardContent>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                            sx={{ mt: 2, ml: 2 }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >

                                <Typography variant='h5' sx={{color: "white"}}>
                                    1165
                                </Typography>
                                <Typography variant="body" gutterBottom sx={{ color: 'white' }}>(+4,123%)</Typography>
                            </Stack>
                            <MoreVertIcon sx={{color:"white"}} />
                        </Stack>
                        <Typography sx={{ ml: 2, mt: 0.2 ,color: "white"}}>Pending Orders</Typography>
                        <ChartContainer
                            width={400}
                            height={140}
                            series={[{ type: 'line', data: pData }]}
                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                            sx={{
                                '.MuiLineElement-root': {
                                    stroke: 'white',
                                    strokeWidth: 2,
                                },
                                '.MuiMarkElement-root': {
                                    stroke: 'white',
                                    scale: '0.6',
                                    fill: '#e6b23d',
                                    strokeWidth: 2,
                                },
                                ml: -3
                            }}
                            disableAxisListener
                        >
                            <LinePlot />
                            <MarkPlot />
                        </ChartContainer>
                    </CardContent>
                </Card>
                {/* canceled */}
                <Card sx={{ width: 300, height: 230, borderRadius: 3, pr: 2, backgroundColor: '#dc4747'}}>
                    <CardContent>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                            sx={{ mt: 2, ml: 2 }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >

                                <Typography variant='h5' sx={{color:"white"}}>
                                    1165
                                </Typography>
                                <Typography variant="body" gutterBottom sx={{ color: 'white' }}>(+4,123%)</Typography>
                            </Stack>
                            <MoreVertIcon sx={{color: "white"}} />
                        </Stack>
                        <Typography sx={{ ml: 2, mt: 0.2, color:"white" }}>Cancelled Orders</Typography>
                        <ChartContainer
                            width={400}
                            height={140}
                            series={[{ type: 'line', data: pData }]}
                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                            sx={{
                                '.MuiLineElement-root': {
                                    stroke: 'white',
                                    strokeWidth: 2,
                                },
                                '.MuiMarkElement-root': {
                                    stroke: 'white',
                                    scale: '0.6',
                                    fill: '#dc4747',
                                    strokeWidth: 2,
                                },
                                ml: -3
                            }}
                            disableAxisListener
                        >
                            <LinePlot />
                            <MarkPlot />
                        </ChartContainer>
                    </CardContent>
                </Card>

            </Stack>
        </Box>

    );
}