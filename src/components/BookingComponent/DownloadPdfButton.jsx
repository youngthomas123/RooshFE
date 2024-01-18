import React from 'react';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import BookingsPDFDocument from './BookingsPDFDocument';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
const DownloadPDFButton = ({ btnColor ,personalDetails, vehicleDetails, bookingDetails }) => (
    <PDFDownloadLink
    document={<BookingsPDFDocument personalDetails={personalDetails} vehicleDetails={vehicleDetails} bookingDetails={bookingDetails} />}
    fileName="confirmation.pdf"
    style={{ color: "#fff" }}
  >
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <FileDownloadOutlinedIcon />)}
  </PDFDownloadLink>
  );
  
  export default DownloadPDFButton;