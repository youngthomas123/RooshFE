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
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import DownloadPDFButton from "./DownloadPdfButton";
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
const columns = [
  { id: "referenceNumber", label: "Reference Number", minWidth: 150 },
  { id: "orderedAt", label: "Ordered At", minWidth: 150 },
  { id: "departure", label: "Departure", minWidth: 150 },
  { id: "fullName", label: "Full Name", minWidth: 120 },
  { id: "vendor", label: "Vendor", minWidth: 120 },
  { id: "language", label: "Language", minWidth: 120 },
  { id: "status", label: "Status", minWidth: 120, align: "center" },
  { id: "price", label: "Price", minWidth: 120 },
  { id: "voucher", label: "Voucher", minWidth: 120 },
];

// function createRows(
//   referenceNumber,
//   orderedAt,
//   departure,
//   fullName,
//   vendor,
//   language,
//   status,
//   price,
//   voucher
// ) {
//   return {
//     referenceNumber,
//     orderedAt,
//     departure,
//     fullName,
//     vendor,
//     language,
//     status,
//     price,
//     voucher,
//   };
// }

// const rows = [
//   createRows(
//     "12312",
//     "2023-11-06 15:25",
//     "2023-11-08 15:25",
//     "Someone",
//     "Roosh",
//     "English",
//     "Complete",
//     65.34,
//     <FileDownloadOutlinedIcon />
//   ),
//   createRows(
//     "12312",
//     "2023-11-06 15:25",
//     "2023-11-08 15:25",
//     "Someone",
//     "Roosh",
//     "English",
//     "Cancelled",
//     65.34,
//     <FileDownloadOutlinedIcon />
//   ),
//   createRows(
//     "12312",
//     "2023-11-06 15:25",
//     "2023-11-08 15:25",
//     "Someone",
//     "Roosh",
//     "English",
//     "Complete",
//     65.34,
//     <FileDownloadOutlinedIcon />
//   ),
//   createRows(
//     "12312",
//     "2023-11-06 15:25",
//     "2023-11-08 15:25",
//     "Someone",
//     "Roosh",
//     "English",
//     "Pending",
//     65.34,
//     <FileDownloadOutlinedIcon />
//   ),
//   createRows(
//     "12312",
//     "2023-11-06 15:25",
//     "2023-11-08 15:25",
//     "Someone",
//     "Roosh",
//     "English",
//     "Pending",
//     65.34,
//     <FileDownloadOutlinedIcon />
//   ),
//   createRows(
//     "12312",
//     "2023-11-06 15:25",
//     "2023-11-08 15:25",
//     "Someone",
//     "Roosh",
//     "English",
//     "Complete",
//     65.34,
//     <FileDownloadOutlinedIcon />
//   ),
//   createRows(
//     "12312",
//     "2023-11-06 15:25",
//     "2023-11-08 15:25",
//     "Someone",
//     "Roosh",
//     "English",
//     "Cancelled",
//     65.34,
//     <FileDownloadOutlinedIcon />
//   ),
// ];

const TableBookings = () => {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
 
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [bookings, setBookings] = useState([]); 
  const [viewMode, setViewMode] = useState("list");
  const[searchedTerm, setSearchTerm] = useState('');

  const theme = useTheme();
  const personalDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+31 123 456 789"
  };
  
  const vehicleDetails = {
    licensePlate: "NL-123-N"
  };
  
  const bookingDetails = {
    startDate: "15-01-2024",
    endDate: "22-01-2024",
    travelers: 2
  };
  const fetchBookings = async  () => {
    try {
      setIsLoading(true)
      const response =  await BookingsApi.getAllBookings(); 
      setBookings(response.data)
      
    } catch (err) {
     console.log(err)
    } finally{
      setIsLoading(false)
      console.log(bookings)
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);
  useEffect(() => {
    try {
       BookingsApi.searchBookings(searchedTerm, '')
       .then((response)=>{
        setBookings(response.data)
       
       })
    } catch (error) {
        console.error('Error during search:', error);
        // Handle error state appropriately
    }
  },[searchedTerm])

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

const  search = async (event) => {
  
  event.preventDefault();
  try {
      const response = await BookingsApi.searchBookings(searchedTerm);
      setBookings(response.data);
      console.log(bookings)
      console.log(response.data);
  } catch (error) {
      console.error('Error during search:', error);
      // Handle error state appropriately
  }
  setSearchTerm('');
};
  return (
    <Paper sx={{ position: "center", width: "100%", overflow: "auto" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: 2 }}
      >
            {/* <form>
            <TextField
            id="search-bar"
            className="text"
            value={searchedTerm}
            onInput={(e) => {
            setSearchTerm(e.target.value);
            }}
              label="Search..."
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
        <IconButton onClick={search} aria-label="search">
    <SearchIcon style={{ fill: "orange" }} />
        </IconButton>
</form>; */}
          <TextField
            id="search-bar"
            className="text"
            value={searchedTerm}
            onChange={(e) => {
            setSearchTerm(e.target.value);
            }}
              label="Search..."
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
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
                            <IconButton sx={{ backgroundColor: '#ed6c02' ,  borderRadius: '50%', 
                            width: 48, 
                            height: 48, 
                           
                          }}
                          >
                            <DownloadPDFButton 
                              // color={getStatusColor(row.status)}
                              personalDetails={personalDetails}
                              vehicleDetails={vehicleDetails}
                              bookingDetails={bookingDetails}
                            >
                              <FileDownloadOutlinedIcon sx={{ color: '#ed6c02'}}/>
                            </DownloadPDFButton>
                          </IconButton>
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