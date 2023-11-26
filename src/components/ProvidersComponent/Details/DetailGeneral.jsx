import { Box, Container, Grid, IconButton, Paper, Stack, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
const DetailGeneral = () => {
    const { rowData } = useParams();
    const decodedData = JSON.parse(decodeURIComponent(rowData));
    const [value, setValue] = React.useState(0);


    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Container sx={{py : 2}}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant="h5" gutterBottom sx={{ color: 'grey', fontWeight: 'bold' }}>Basic Info</Typography>
                            <Tooltip title="Edit">
                                <IconButton>
                                    <EditIcon sx={{ color: '#ff7017' }} />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                        
                        <Typography variant="h6" gutterBottom sx={{ color: 'grey', mt: 2 }}>Name</Typography>
                        {/* <Typography variant="body1" gutterBottom sx={{ color: 'grey' }}>{decodedData.name}</Typography> */}
                        <Typography variant="body1" gutterBottom sx={{ color: 'grey', mt:-1 }}>name placeholder</Typography> 

                        <Typography variant="h6" gutterBottom sx={{ color: 'grey', mt: 2 }}>Airport</Typography>
                        {/* <Typography variant="body1" gutterBottom sx={{ color: 'grey' }}>{decodedData.name}</Typography> */}
                        <Typography variant="body1" gutterBottom sx={{ color: 'grey', mt:-1 }}>airport placeholder</Typography> 
                        </Container>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Container sx={{py : 2}}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant="h5" gutterBottom sx={{ color: 'grey', fontWeight: 'bold' }}>Business Address</Typography>
                            <Tooltip title="Edit">
                                <IconButton>
                                    <EditIcon sx={{ color: '#ff7017' }} />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                        
                        <Typography variant="h6" gutterBottom sx={{ color: 'grey', mt: 2 }}>Street</Typography>
                        {/* <Typography variant="body1" gutterBottom sx={{ color: 'grey' }}>{decodedData.name}</Typography> */}
                        <Typography variant="body1" gutterBottom sx={{ color: 'grey', mt:-1 }}>street placeholder</Typography> 

                        <Typography variant="h6" gutterBottom sx={{ color: 'grey', mt: 2 }}>City</Typography>
                        {/* <Typography variant="body1" gutterBottom sx={{ color: 'grey' }}>{decodedData.name}</Typography> */}
                        <Typography variant="body1" gutterBottom sx={{ color: 'grey', mt:-1 }}>City placeholder</Typography> 
                        </Container>
                    </Paper>
                </Grid>
            </Grid>

        </Box>
    );
}

export default DetailGeneral;