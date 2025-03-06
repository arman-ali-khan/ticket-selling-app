import * as React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    borderBottom: '2px solid #000',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#666666',
  },
  userInfo: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    border: '1px solid #e0e0e0',
    borderRadius: 5,
  },
  userInfoText: {
    fontSize: 12,
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold',
  },
  ticketsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'space-between',
  },
  ticket: {
    width: '48%',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f3f4f6',
    border: '2px solid #000',
    borderRadius: 8,
  },
  ticketHeader: {
    fontSize: 16,
    marginBottom: 10,
    borderBottom: '1px solid #000',
    paddingBottom: 5,
    fontFamily: 'Helvetica-Bold',
  },
  numbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
    justifyContent: 'center',
  },
  number: {
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #000',
  },
  numberText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#666666',
    borderTop: '1px solid #000',
    paddingTop: 10,
  },
  totalSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    border: '2px solid #000',
    borderRadius: 5,
  },
  totalText: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    fontSize: 60,
    color: '#00000010',
    zIndex: -1,
  },
});

const TicketPDF = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ticketData = JSON.parse(decodeURIComponent(searchParams.get('data') || '{}'));

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getNextDrawDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return formatDate(date.toISOString());
  };

  const LotteryDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.watermark}>OFFICIAL TICKET</Text>
        
        <View style={styles.header}>
          <Text style={styles.title}>Official Lottery Ticket</Text>
          <Text style={styles.subtitle}>Purchase Date: {formatDate(ticketData.purchaseDate)}</Text>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Name: {ticketData.userInfo?.name}</Text>
          <Text style={styles.userInfoText}>Phone: {ticketData.userInfo?.phone}</Text>
          <Text style={styles.userInfoText}>Address: {ticketData.userInfo?.address}</Text>
        </View>

        <View style={styles.ticketsContainer}>
          {ticketData.tickets?.map((ticket: any, index: number) => (
            <View key={ticket.id} style={styles.ticket}>
              <Text style={styles.ticketHeader}>Ticket #{index + 1}</Text>
              <View style={styles.numbers}>
                {ticket.numbers.map((number: number, idx: number) => (
                  <View key={idx} style={styles.number}>
                    <Text style={styles.numberText}>{number}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.totalSection}>
          <Text style={styles.totalText}>
            Total Amount: ${(ticketData.tickets?.length * 5).toFixed(2)}
          </Text>
        </View>

        <Text style={styles.footer}>
          This is an official lottery ticket. Keep it safe and secure.{'\n'}
          Valid for the next draw on {getNextDrawDate()}
        </Text>
      </Page>
    </Document>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-4">
      <div className="container mx-auto" style={{ height: "90vh" }}>
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <LotteryDocument />
        </PDFViewer>
      </div>
    </div>
  );
};

export default TicketPDF;