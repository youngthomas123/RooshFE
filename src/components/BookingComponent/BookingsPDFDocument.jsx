import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#89CFF0',
    },
    blueFrame: {
      margin: 10,
      padding: 10, 
      backgroundColor: '#FFF', 
      borderRadius: 5, 
      flex: 1,
    },
    header: {
      fontSize: 15,
      textAlign: 'center',
      marginBottom: 10,
    },
    subHeader: {
      fontSize: 12,
      textAlign: 'center',
      marginTop: 25,
      marginBottom: 5
    },
    text: {
      fontSize: 10,
      textAlign: 'center',
      marginBottom: 3,
    },
  });

const BookingsPDFDocument = ({ personalDetails, vehicleDetails, bookingDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.blueFrame} >
     
        <Text style={styles.header}>Bevestiging</Text>
        <Text style={styles.subHeader}>Persoonlijke gegevens</Text>
        <Text style={styles.text}>Naam: {personalDetails.name}</Text>
        <Text style={styles.text}>Email: {personalDetails.email}</Text>
        <Text style={styles.text}>Telefoon: {personalDetails.phone}</Text>

        <Text style={styles.subHeader}>Voertuig</Text>
        <Text style={styles.text}>Kenteken: {vehicleDetails.licensePlate}</Text>

        <Text style={styles.subHeader}>Boekingsinformatie</Text>
        <Text style={styles.text}>Startdatum: {bookingDetails.startDate}</Text>
        <Text style={styles.text}>Einddatum: {bookingDetails.endDate}</Text>
        <Text style={styles.text}>Aantal reizigers: {bookingDetails.travelers}</Text>
        <Text style={styles.subHeader}>Procedure</Text>
        
        <Text style={styles.text}>
          Op de dag dat uw reservering aanvangt, rijdt u naar het adres van de parkeerplaats. Nadat u daar uw auto
          hebt geparkeerd, brengt een shuttlebus u naar de luchthaven. Vergeet niet uw reserveringsbevestiging
          mee te nemen en houd voor de zekerheid rekening met een half uur afhandelingstijd op de parkeerplaats.
          Houdt er rekening mee dat u wordt verwacht op de gereserveerde datum én tijdstip.
          Bij terugkomst zal de shuttlebus u weer ophalen op de plek waar deze u op de heenweg heeft afgezet
          (tenzij anders aangegeven). Neem telefonisch contact op met de medewerkers van de parkeerplaats,
          zodra u uw bagage hebt opgehaald. U kunt hen bereiken via: 0640000000</Text>
        <Text style={styles.subHeader}>Contact</Text>
        <Text style={styles.text}>
          Als u vragen hebt over het wijzigen of annuleren van uw reservering, neem dan contact met ons op via
          info@vliegenenparkeren.nl. Als u echter binnen 24 uur voor aanvang van uw reservering wijzigingen wilt
          aanbrengen, neem dan rechtstreeks telefonisch contact op met de parkeerplaatsbeheerder via
          0640000000. Meer informatie over ons beleid vindt u op onze FAQ-pagina.
        </Text>

      </View>
    </Page>
  </Document>
);

export default BookingsPDFDocument;