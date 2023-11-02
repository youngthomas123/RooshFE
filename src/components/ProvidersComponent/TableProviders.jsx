import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const columns = [
    { id: 'providers', label: 'Providers', minWidth: 170 },
    { id: 'airport', label: 'Airports', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 340, align: 'right' },
];

function createData(providers, airport, valet, shuttle) {
    return { providers, airport, valet, shuttle };
}

const rows = [
    createData('India', 'IN', 1, 1),
    createData('China', 'CN', 1, 0),
    createData('Italy', 'IT', 0, 0),
    createData('United States', 'US', 0, 1),
    createData('Canada', 'CA', 1, 1),
    createData('Australia', 'AU', 1, 1),
    createData('Germany', 'DE', 0, 0),
    createData('Ireland', 'IE', 0, 1),
    createData('Mexico', 'MX', 0, 0),
    createData('Japan', 'JP', 1, 1),
    createData('France', 'FR', 0, 1),
    createData('United Kingdom', 'GB', 1, 0),
    createData('Russia', 'RU', 0, 1),
    createData('Nigeria', 'NG', 1, 0),
    createData('Brazil', 'BR', 1, 1),
];

const getStatusButton = (status, label) => (
    <Button variant="contained" sx={{ backgroundColor: status === 0 ? 'green' : 'red', mx: 1 }}>
        {label}
    </Button>
);

const TableProviders = () => {
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
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default TableProviders;
