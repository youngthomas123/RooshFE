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


const TableProviders = () => {


    const [providers, setProviders] = useState([]);

    const getAllProviders = () => {
        ProvidersApi.getAll()
            .then(response => {
                setProviders(response.data);
            })
            .catch(err => console.error('Error fetching genres:', err));
    }

    const columns = [
        { id: 'name', label: 'Providers', minWidth: 170 },
        { id: 'logo', label: 'Logo', minWidth: 100 },
        { id: 'status', label: 'Status', minWidth: 340, align: 'right' },
    ];



    const getStatusButton = (status, label) => (
        <Button variant="contained" sx={{ backgroundColor: status === 0 ? 'green' : 'red', mx: 1 }}>
            {label}
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

    useEffect(() => {
        getAllProviders();
    }, []);

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
                        {providers
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.id === 'status'
                                                ? (
                                                    <>
                                                        {getStatusButton(row.valet, 'Valet')}
                                                        {getStatusButton(row.shuttle, 'Shuttle')}
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
    );
};

export default TableProviders;
