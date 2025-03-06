import * as React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    opacity: 0.1,
    fontSize: 60,
    color: '#888888',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  userInfoText: {
    fontSize: 12,
    marginBottom: 5,
  },
  ticket: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f3f4f6',
    borderRadius: 5,
  },
  ticketHeader: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  numbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  number: {
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  numberText: {
    textAlign: 'center',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#666666',
  },
  totalSection: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  totalText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  prizesSection: {
    marginTop: 30,
    marginBottom: 60,
  },
  prizesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  prizesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 20,
  },
  prizeItem: {
    alignItems: 'center',
    width: 120,
  },
  prizeImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  prizeText: {
    fontSize: 12,
    textAlign: 'center',
  }
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

  const prizes = [
    {
      name: 'Car',
      image: 'https://cdn-icons-png.flaticon.com/512/3774/3774278.png',
      value: '1st Prize'
    },
    {
      name: 'Motorcycle',
      image: 'https://cdn-icons-png.flaticon.com/512/3774/3774271.png',
      value: '2nd Prize'
    },
    {
      name: 'Refrigerator',
      image: 'https://cdn-icons-png.flaticon.com/512/3774/3774270.png',
      value: '3rd Prize'
    },
    {
      name: 'Smartphone',
      image: 'https://cdn-icons-png.flaticon.com/512/3774/3774273.png',
      value: '4th Prize'
    }
  ];

  const LotteryDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.watermark}>OFFICIAL LOTTERY TICKET</Text>

        <View style={styles.header}>
          <Text style={styles.title}>Official Lottery Ticket</Text>
          <Text style={styles.subtitle}>Purchase Date: {formatDate(ticketData.purchaseDate)}</Text>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Name: {ticketData.userInfo?.name}</Text>
          <Text style={styles.userInfoText}>Phone: {ticketData.userInfo?.phone}</Text>
          <Text style={styles.userInfoText}>Address: {ticketData.userInfo?.address}</Text>
        </View>

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

        <View style={styles.totalSection}>
          <Text style={styles.totalText}>
            Total Amount: ${(ticketData.tickets?.length * 5).toFixed(2)}
          </Text>
        </View>

        <View style={styles.prizesSection}>
          <Text style={styles.prizesTitle}>Available Prizes</Text>
          <View style={styles.prizesGrid}>
            {prizes.map((prize, index) => (
              <View key={index} style={styles.prizeItem}>
                <Image src={prize.image} style={styles.prizeImage} />
                <Text style={styles.prizeText}>{prize.name}</Text>
                <Text style={styles.prizeText}>{prize.value}</Text>
              </View>
            ))}
          </View>
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