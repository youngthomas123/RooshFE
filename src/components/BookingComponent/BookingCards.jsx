import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useTheme } from '@mui/material/styles';
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Grid, Button } from "@mui/material";
import { CardHeader, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PendingIcon from "@mui/icons-material/PendingActions";
import { red, yellow, green } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import DownloadPDFButton from "./DownloadPdfButton";

const getStatusIcon = (status) => {
  if (status === "CANCELLED") return <CancelIcon />;
  if (status === "PENDING") return <PendingIcon />;
  return <CheckCircleIcon />;
};
const BookingCards = ({ bookings, columns }) => {

  const theme = useTheme();
  const personalDetails = {
    name: "Jan Jansen",
    email: "jan.jansen@example.com",
    phone: "+31 612 345 678"
  };
  
  const vehicleDetails = {
    licensePlate: "XX-123-Y"
  };
  
  const bookingDetails = {
    startDate: "15-01-2024",
    endDate: "22-01-2024",
    travelers: 2
  };
  function getStatusColor(status) {
    switch (status) {
      case 'CANCELLED':
        return theme.palette.error.main; 
      case 'PENDING':
        return theme.palette.warning.main;
      case 'COMPLETED':
        return theme.palette.success.main;
      default:
        return theme.palette.primary.main;
    }
  }

  const renderCardContent = (booking) => {
    return columns
      .filter(column => column.id !== 'status' && column.id !== 'reference' && column.id !== 'vendor' && column.id !== 'voucher')
      .map((column) => (
        <Typography
          key={column.id}
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 1 }}
        >
          {column.label}:  <Typography component="span" fontWeight="bold">{booking[column.id]}</Typography>
        </Typography>
      ));
  };

  return (
    <Grid container spacing={2}>
      {bookings.map((booking, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ borderRadius: 2, boxShadow: 3, margin: 1 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: getStatusColor(booking.status) }}>
                  {getStatusIcon(booking.status)}
                </Avatar>
              }
              title={booking.reference}
              titleTypographyProps={{ variant:"h6", component:"div", fontWeight: 'bold' }}
              subheader={booking.vendor}
              subheaderTypographyProps={{ color: 'text.secondary',fontWeight: 'bold', variant:"h6", component:"div"}}
  
              action={
                <IconButton
                  sx={{
                    color: theme.palette.getContrastText(
                      getStatusColor(booking.status)
                    ),
                  }}
                >
                  <DownloadPDFButton
                    btnColor={getStatusColor(booking.status)}
                    personalDetails={personalDetails}
                    vehicleDetails={vehicleDetails}
                    bookingDetails={bookingDetails}
                  >
                    <FileDownloadOutlinedIcon />
                  </DownloadPDFButton>
                </IconButton>
              }
              sx={{
                backgroundColor: getStatusColor(booking.status),
                color: theme.palette.getContrastText(
                  getStatusColor(booking.status)
                ),
              }}
            />
            <CardContent>{renderCardContent(booking)}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookingCards;
