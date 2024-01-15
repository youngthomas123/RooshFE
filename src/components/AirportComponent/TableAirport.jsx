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
import AirportsApi from '../../APIs/AirportsAPI';
import { ProvidersApifetch } from '../../APIs/ProvidersApi';
import AirportApi from '../../APIs/AirportsAPI';

const columns = [
    { id: 'city', label: 'Airport', minWidth: 170 },
    { id: 'country', label: 'Country', minWidth: 100 },
    { id: 'terminal', label: 'Terminal', minWidth: 340, align: 'right' },
];

function createData(airport, country, terminal) {
    return { airport, country, terminal };
}

const rows = [
    createData('Eindhoven', 'NL', 1),
    createData('Berlin', 'DE', 3),
    createData('Schipol', 'NL', 1,),
];




const getStatusButton = (status, label) => (
    <Button variant="contained" sx={{ backgroundColor: status === 0 ? 'green' : 'red', mx: 1 }}>
        {label}
    </Button>
);

const TableAirport = ({searchAirport}) => 
{
    
    const [airports, setAirports] = useState([]);



    useEffect(()=>{
        AirportsApi.getAllAirports()
        .then((response)=>{
            if(response.ok)
            {
                response.json()
                .then((data)=>{
                    console.log(data);
                    setAirports(data)
                })
            }
        })

    },[])

    useEffect(()=>{
        console.log(searchAirport);
        AirportApi.searchAirport(searchAirport.city, searchAirport.country)
        .then((response)=>{
            if(response.ok)
            {
                response.json()
                .then((data)=>{
                    console.log("filtered data "+ data)
                    setAirports(data)
                })
            }
        })
    },[searchAirport.country])

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
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
    );




    
}
    

    

   


export default TableAirport;
