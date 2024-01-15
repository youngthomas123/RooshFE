import { Box, Container, Grid, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import AirportsApi from '../../../APIs/AirportsAPI';
import Cookies from 'js-cookie';


const DetailGeneral = () => {
    const { rowData } = useParams();
    const decodedData = JSON.parse(decodeURIComponent(rowData));
    const [value, setValue] = React.useState(0);
    const [airportCookies, setAirportCookies] = useState([]);
    const [airports, setAirports] = useState([]);
    // useEffect(() => {
    //     setAirportCookies(Cookies.get('provider'));
    // }, []);

    useEffect(() => {
        const providerCookie = Cookies.get('provider');
        if (providerCookie) {
            const parsedCookie = JSON.parse(decodeURIComponent(providerCookie));
            setAirportCookies(parsedCookie);
        }
    }, []);
    
    useEffect(() => {
        console.log('get cookies', airportCookies);
        if (airportCookies && airportCookies.airports) {
            console.log('done');
            const providerAirports = airportCookies.airports;
            setAirports(providerAirports);
        }else{
            console.log('failed')
        }
    }, [airportCookies]);

    useEffect(() => {
        console.log("airports sorted", airports);
    }, [airports]);

    const columns = [
        { id: 'city', label: 'Airport', minWidth: 170 },
        { id: 'country', label: 'Country', minWidth: 100 },
        { id: 'terminal', label: 'Terminal', minWidth: 340, align: 'right' },
    ];

    

    // useEffect(()=>{
    //     AirportsApi.getAllAirports()
    //     .then((response)=>{
    //         if(response.ok)
    //         {
    //             response.json()
    //             .then((data)=>{
    //                 console.log(data);
    //                 setAirports(data)
    //             })
    //         }
    //     })
    // },[])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Container sx={{ py: 2 }}>
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
                            <Typography variant="body1" gutterBottom sx={{ color: 'grey', mt: -1 }}>name placeholder</Typography>

                            <Typography variant="h6" gutterBottom sx={{ color: 'grey', mt: 2 }}>Airport</Typography>
                            {/* <Typography variant="body1" gutterBottom sx={{ color: 'grey' }}>{decodedData.name}</Typography> */}
                            <Typography variant="body1" gutterBottom sx={{ color: 'grey', mt: -1 }}>airport placeholder</Typography>
                        </Container>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Container sx={{ py: 2 }}>
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
                            <Typography variant="body1" gutterBottom sx={{ color: 'grey', mt: -1 }}>street placeholder</Typography>

                            <Typography variant="h6" gutterBottom sx={{ color: 'grey', mt: 2 }}>City</Typography>
                            {/* <Typography variant="body1" gutterBottom sx={{ color: 'grey' }}>{decodedData.name}</Typography> */}
                            <Typography variant="body1" gutterBottom sx={{ color: 'grey', mt: -1 }}>City placeholder</Typography>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>

            <Paper sx={{ width: '100%', overflow: 'hidden', mt: 3 }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        sx={{ backgroundColor: '#333', color: 'white' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {airports
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => (
                                            <TableCell key={column.id} align={column.align}>
                                                {
                                                    row[column.id]
                                                }
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={airports.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

export default DetailGeneral;