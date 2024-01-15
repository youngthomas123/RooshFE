import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ProvidersApi from '../../APIs/ProvidersApi';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Avatar, Badge, Box, Card, CardActions, CardContent, CardHeader, Grid, Stack, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewListIcon from '@mui/icons-material/ViewList';
import WindowIcon from '@mui/icons-material/Window';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import HailIcon from '@mui/icons-material/Hail';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const TableProviders = () => {
    const navigate = useNavigate();

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            // transition: theme.transitions.create('width'),
            // width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: 20,
        backgroundColor: 'white',
        // '&:hover': {
        //     backgroundColor: 'grey',
        // },
        border: '1px solid lightgrey',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 250,
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));


    const [providers, setProviders] = useState([]);

    const getAllProviders = () => {
        ProvidersApi.getAll()
            .then(response => {
                setProviders(response.data);
                console.log(response.data);
            })
            .catch(err => console.error('Error fetching genres:', err));
    }

    const columns = [
        { id: 'name', label: 'Providers', minWidth: 170 },
        // { id: 'airport', label: 'Airport', minWidth: 100 },
        { id: 'status', label: 'Status', minWidth: 340 },
    ];

    const getStatusButton = (status, label, isTable) => (
        <Button
            variant="contained"
            // startIcon={label === 'Valet' ? <HailIcon /> : <AirportShuttleIcon />}
            sx={{
                backgroundColor: status === 0 ? 'green' : 'red',
                mx: 1,
                borderRadius: 20,
            }}>

            {label === 'Valet' ? <HailIcon /> : <AirportShuttleIcon />}
            {isTable && '\u00A0'} {isTable && label}
        </Button>
    );

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // filters
    const [iconFlipped, setIconFlipped] = useState(false);

    const handleFilters = () => {
        setIconFlipped(!iconFlipped);
    };

    //icon table/card
    const [isTable, setIsTable] = useState(true);
    const handleTableIcon = () => {
        setIsTable(true);
    };
    const handleCardIcon = () => {
        setIsTable(false);
    };

    //table onclick
    const handleTableClick = (row) => {
        console.log('row content', row);
        console.log('table clicked');
        const rowString = JSON.stringify(row);
    Cookies.set('provider', rowString);
        console.log('cookies', Cookies.get('provider'));
        // <Navigate to={`/providers/details/${encodeURIComponent(JSON.stringify(row))}`} />
        navigate(`/providers/details/${encodeURIComponent(JSON.stringify(row))}`);  
    }

    useEffect(() => {
        getAllProviders();
    }, []);

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
            >
                <Button
                    variant="outlined"
                    startIcon={<FilterListIcon style={{ color: 'orange', transform: iconFlipped ? 'rotate(180deg)' : 'none' }} />}
                    sx={{
                        background: 'white',
                        borderColor: 'lightgrey',
                        color: 'black',
                        borderRadius: 20,
                        fontWeight: 'bold',
                    }}
                    onClick={handleFilters}
                >
                    FILTERS
                </Button>

                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={0.5}
                >

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    
                    <ViewListIcon sx={{ color: isTable ? 'orange' : 'grey', fontSize: 45 }} onClick={handleTableIcon} />
                    <WindowIcon sx={{ color: isTable ? 'grey' : 'orange', fontSize: 37 }} onClick={handleCardIcon} />
                </Stack>
            </Stack>


            {isTable ?
                <Paper sx={{ width: '100%', overflow: 'hidden', mt: 2 }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table" style={{ tableLayout: 'fixed' }}>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            style={{ minWidth: column.minWidth }}
                                            sx={{ backgroundColor: '#333', color: 'white' }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {providers
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.id}
                                            // component={Link}
                                            // to={`/provider-details/${row.id}`}
                                            onClick={() => handleTableClick(row)}
                                            // to={`/providers/details/${encodeURIComponent(JSON.stringify(row))}`}
                                        >
                                            {columns.map((column) => (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'status'
                                                        ? (
                                                            <>
                                                                {getStatusButton(row.shuttle, 'Shuttle', isTable)}
                                                                {getStatusButton(row.valet, 'Valet', isTable)}
                                                            </>
                                                        )
                                                        : row[column.id]}
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
                        count={providers.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                :
                <Box sx={{ width: '100%', mt: 2 }}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        {providers.map((provider) => (
                            <Grid item xs={4}>
                                <Card sx={{ width: '100%', height: '100%', borderRadius: 5, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                    <CardHeader
                                        avatar={
                                            <PhotoSizeSelectActualOutlinedIcon sx={{ fontSize: 70, color: 'white' }} />
                                        }
                                        title={<Typography variant="h5" sx={{ color: 'white' }}>PlaceHolder</Typography>}
                                        sx={{
                                            background: '#878787',
                                            height: 100,
                                            paddingLeft: 3,
                                            paddingRight: 3,
                                        }}
                                    />
                                    <CardContent sx={{ p: 3 }}>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <Stack direction="column" alignItems="flex-start" gap={0.5}>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Airport
                                                </Typography>
                                                <Typography sx={{ fontSize: 20, mt: -0.5 }}>
                                                    Airport name
                                                </Typography>
                                            </Stack>
                                            <Stack direction="row" alignItems="center" gap={0}>
                                                {getStatusButton(provider.shuttle, 'Shuttle')}
                                                {getStatusButton(provider.valet, 'Valet')}
                                            </Stack>
                                        </Stack>

                                        <Typography sx={{ fontSize: 14, mt: 3 }} color="text.secondary" gutterBottom>
                                            Address
                                        </Typography>
                                        <Typography sx={{ fontSize: 17, mt: -0.5 }}>
                                            Address here
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions> */}
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            }
        </>

    );
};

export default TableProviders;
