import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Chip from "@mui/material/Chip";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import BookingCards from "./BookingCards";
import { Grid, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import BookingsApi from '../../APIs/BookingsApi';
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";


const columns = [
  { id: "reference", label: "Reference", minWidth: 120 },
  { id: "orderedAt", label: "Ordered At", minWidth: 150 },
  { id: "departure", label: "Departure", minWidth: 150 },
  { id: "fullName", label: "Full Name", minWidth: 120 },
  { id: "vendor", label: "Vendor", minWidth: 120 },
  { id: "language", label: "Language", minWidth: 120 },
  { id: "status", label: "Status", minWidth: 120, align: "center" },
  { id: "price", label: "Price", minWidth: 120 },
  { id: "voucher", label: "Voucher", minWidth: 120 },
];

function createRows(
  reference,
  orderedAt,
  departure,
  fullName,
  vendor,
  language,
  status,
  price,
  voucher
) {
  return {
    reference,
    orderedAt,
    departure,
    fullName,
    vendor,
    language,
    status,
    price,
    voucher,
  };
}

const rows = [
  createRows(
    "12312",
    "2023-11-06 15:25",
    "2023-11-08 15:25",
    "Someone",
    "Roosh",
    "English",
    "Complete",
    65.34,
    <FileDownloadOutlinedIcon />
  ),
  createRows(
    "12312",
    "2023-11-06 15:25",
    "2023-11-08 15:25",
    "Someone",
    "Roosh",
    "English",
    "Cancelled",
    65.34,
    <FileDownloadOutlinedIcon />
  ),
  createRows(
    "12312",
    "2023-11-06 15:25",
    "2023-11-08 15:25",
    "Someone",
    "Roosh",
    "English",
    "Complete",
    65.34,
    <FileDownloadOutlinedIcon />
  ),
  createRows(
    "12312",
    "2023-11-06 15:25",
    "2023-11-08 15:25",
    "Someone",
    "Roosh",
    "English",
    "Pending",
    65.34,
    <FileDownloadOutlinedIcon />
  ),
  createRows(
    "12312",
    "2023-11-06 15:25",
    "2023-11-08 15:25",
    "Someone",
    "Roosh",
    "English",
    "Pending",
    65.34,
    <FileDownloadOutlinedIcon />
  ),
  createRows(
    "12312",
    "2023-11-06 15:25",
    "2023-11-08 15:25",
    "Someone",
    "Roosh",
    "English",
    "Complete",
    65.34,
    <FileDownloadOutlinedIcon />
  ),
  createRows(
    "12312",
    "2023-11-06 15:25",
    "2023-11-08 15:25",
    "Someone",
    "Roosh",
    "English",
    "Cancelled",
    65.34,
    <FileDownloadOutlinedIcon />
  ),
];

const TableBookings = () => {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
 
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [bookings, setBookings] = useState([]); 
  const [viewMode, setViewMode] = useState("list");

  const fetchBookings = async () => {
    try {
      setIsLoading(true)
      const response = await BookingsApi.getAllBookings(); 
  
      // const bookingsData = response.data.map(booking => createRows(
      //   booking.referenceNumber,
      //   booking.orderedAt,
      //   booking.departure,
      //   booking.fullName, 
      //   booking.vendor,
      //   booking.language,
      //   booking.status,
      //   booking.price,
      //   <FileDownloadOutlinedIcon />
      // ));
        const bookingData = [...response.data]
      setBookings(bookingData)
    
      // setBookings(...data.data.map(booking => createRows(
      //   booking.reference,
      //   booking.orderedAt,
      //   booking.departure,
      //   booking.fullName,
      //   booking.vendor,
      //   booking.language,
      //   booking.status,
      //   booking.price,
      //   <FileDownloadOutlinedIcon />, rows
        
      // )));
      
      
    } catch (err) {
     console.log(err)
    } finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    
    fetchBookings();
  }, []);
  const toggleViewMode = () => {
    setViewMode(viewMode === "list" ? "card" : "list"); 
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function getStatusColor(status) {
    switch (status) {
      case "CANCELLED":
        return "error";
      case "PENDING":
        return "warning";
      case "COMPLETED":
        return "success";
      default:
        return "primary";
    }
  }
  if (isLoading) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Paper sx={{ position: "center", width: "100%", overflow: "auto" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: 2 }}
      >

        <Grid item>
          <Tooltip title="List View">
            <IconButton
              onClick={() => setViewMode("list")}
              color={viewMode === "list" ? "primary" : "default"}
            >
              <ViewListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Card View">
            <IconButton
              onClick={() => setViewMode("card")}
              color={viewMode === "card" ? "primary" : "default"}
            >
              <ViewModuleIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      {viewMode === "list" ? (
        <>
          <TableContainer sx={{ maxHeight: 540 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{
                        width: "40px",
                        backgroundColor: "#333",
                        color: "white",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "status" ? (
                            <Chip
                              label={row.status}
                              color={getStatusColor(row.status)}
                              style={{ width: "140px", height: "40px" }}
                            />
                          ) : column.id === "voucher" ? (
                            row[column.id]
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
            count={bookings.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <BookingCards bookings={bookings} columns={columns} />
      )}
    </Paper>
  );
};
export default TableBookings;