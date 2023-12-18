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

const getStatusIcon = (status) => {
  if (status === "Cancelled") return <CancelIcon />;
  if (status === "Pending") return <PendingIcon />;
  return <CheckCircleIcon />;
};
const BookingCards = ({ bookings, columns }) => {

  const theme = useTheme();

  function getStatusColor(status) {
    switch (status) {
      case 'Cancelled':
        return theme.palette.error.main; 
      case 'Pending':
        return theme.palette.warning.main;
      case 'Complete':
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
                  color: theme.palette.getContrastText(getStatusColor(booking.status))
                }}

              >
                <FileDownloadOutlinedIcon />
              </IconButton>
            }
            sx={{
              backgroundColor: getStatusColor(booking.status),
              color: theme.palette.getContrastText(getStatusColor(booking.status)),
            }}
          />
          <CardContent>
            {renderCardContent(booking)}
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  );
};

export default BookingCards;
