import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Chip from '@mui/material/Chip';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const columns = [
    { id: 'reference', label: 'Reference', minWidth: 120 },
    { id: 'orderedAt', label: 'Ordered At', minWidth: 150 },
    { id: 'departure', label: 'Departure', minWidth: 150 },
    { id: 'fullName', label: 'Full Name', minWidth: 120 },
    { id: 'vendor', label: 'Vendor', minWidth: 120 },
    { id: 'language', label: 'Language', minWidth: 120 },
    { id: 'status', label: 'Status', minWidth: 120, align:'center' },
    { id: 'price', label: 'Price', minWidth: 120 },
    { id: 'voucher', label: 'Voucher', minWidth: 120 }
];

function createRows(reference, orderedAt, departure, fullName, vendor, language, status, price, voucher) {
return {reference, orderedAt, departure, fullName, vendor, language, status, price, voucher}
}

const rows = [
    createRows("12312", "2023-11-06 15:25", "2023-11-08 15:25", "Someone", "Roosh", "English", "Complete", 65.34, <FileDownloadOutlinedIcon/>),
    createRows("12312", "2023-11-06 15:25", "2023-11-08 15:25", "Someone", "Roosh", "English", "Cancelled", 65.34, <FileDownloadOutlinedIcon/>),
    createRows("12312", "2023-11-06 15:25", "2023-11-08 15:25", "Someone", "Roosh", "English", "Complete", 65.34, <FileDownloadOutlinedIcon/>),
    createRows("12312", "2023-11-06 15:25", "2023-11-08 15:25", "Someone", "Roosh", "English", "Pending", 65.34, <FileDownloadOutlinedIcon/>),
    createRows("12312", "2023-11-06 15:25", "2023-11-08 15:25", "Someone", "Roosh", "English", "Pending", 65.34, <FileDownloadOutlinedIcon/>),
    createRows("12312", "2023-11-06 15:25", "2023-11-08 15:25", "Someone", "Roosh", "English", "Complete", 65.34,<FileDownloadOutlinedIcon/>),
    createRows("12312", "2023-11-06 15:25", "2023-11-08 15:25", "Someone", "Roosh", "English", "Cancelled", 65.34, <FileDownloadOutlinedIcon/>)
]

const TableBookings = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function getStatusColor(status) {
        switch (status) {
          case 'Cancelled':
            return 'error';
          case 'Pending':
            return 'warning';
          case 'Complete':
            return 'success';
          default:
            return 'primary';
        }
    }

    return (
        <Paper sx={{ position:'center', width: '100%', overflow: 'auto' }}>
            <TableContainer sx={{ maxHeight: 540}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{ width:'40px', backgroundColor: '#333', color: 'white'}}
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
                                    {column.id === 'status' ? (
                                    <Chip label={row.status} color={getStatusColor(row.status)}  style={{width:'140px', height: '40px'}}/>
                                    ) : (
                                        row[column.id]
                                        )}
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
}
    export default TableBookings;