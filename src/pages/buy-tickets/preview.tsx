
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font, Image } from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// Register Bengali font
Font.register({
  family: 'Kalpurush',
  src: '/fonts/Kalpurush.ttf'  // Make sure to place the font file in public/fonts/
});
// Create styles
// Add new styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    position:'relative'
  },
  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 30,
    left: 30,
  },
  header: {
    marginBottom: 20,
    position:'relative',
    textAlign: 'center',
    borderBottom: '2px solid #000',
    paddingBottom: 10,
    marginTop: 12, // Add margin to accommodate the logo
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
    marginBottom: 5,
    padding: 9,
    backgroundColor: 'rgba(248, 248, 248, 0.8)',
    border: '2px solid #000',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineUserInfo: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'rgba(248, 248, 248, 0.8)',
    border: '2px solid #000',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineUserInfoText: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
  },
  userInfoText: {
    fontSize: 12,
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold',
  },
  ticketsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  ticket: {
    width: '48%',
    marginBottom: 0,
    padding: 15,
    backgroundColor: 'rgba(243, 244, 246, 0.55)',
    backdropFilter: 'blur(4px)',
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
  warning:{
    textAlign: 'center',
    fontSize: 10,
    color: '#666666',
    top:-12,
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
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  paymentIcon: {
    width: 20,
    height: 20,
    position:'relative',
  },
  paymentId:{
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    top:0,
    right:12,
    position:'absolute',
   

  },
  totalText: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    fontSize: 60,
    color: '#00000010',
    zIndex: -1,
    fontFamily: 'Kalpurush',  // Apply Bengali font
  },
});

const TicketPDF = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ticketData = JSON.parse(decodeURIComponent(searchParams.get('data') || '{}'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate PDF loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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

  // In the LotteryDocument component, add the Image right after the Page opening tag:
  const LotteryDocument = () => {
      const ticketsPerPage = 10;
      const pages = Math.ceil((ticketData.tickets?.length || 0) / ticketsPerPage);
  
      return (
        <Document>
          {Array.from({ length: pages }).map((_, pageIndex) => (
            <Page key={pageIndex} size="A4" style={styles.page}>
              <Text style={styles.watermark}>কুটীর শিল্প লটারি</Text>
              {pageIndex === 0 && (
                <>
                  <Image style={styles.logo} src="/images/logo.png" />
                  <View style={styles.header}>
                    <Text style={styles.title}>Official Lottery Ticket</Text>
                    <Text style={styles.subtitle}>Purchase Date: {formatDate(ticketData.purchaseDate)}</Text>
                    <Text style={styles.warning}>
                      This is an official lottery ticket. Keep it safe and secure.{'\n'}
                      Valid for the next draw on {getNextDrawDate()}
                    </Text>
                    {pages && (
                <View style={styles.totalSection}>
                  <Text style={styles.totalText}>
                    Total Amount: ${(ticketData.tickets?.length * 5).toFixed(2)}
                  </Text>
                  <Text style={styles.paymentId} >
                  <Image style={styles.paymentIcon} src="/images/payment-icon.png" />
                  #8by90b06789
                  </Text>
                </View>
              )}
                  </View>
                  <View style={styles.userInfo}>
                    <Text style={styles.userInfoText}>Name: {ticketData.userInfo?.name}</Text>
                    <Text style={styles.userInfoText}>Phone: {ticketData.userInfo?.phone}</Text>
                    <Text style={styles.userInfoText}>Address: {ticketData.userInfo?.address}</Text>
                  </View>
                </>
              )}
  
              <View style={styles.ticketsContainer}>
                {ticketData.tickets
                  ?.slice(pageIndex * ticketsPerPage, (pageIndex + 1) * ticketsPerPage)
                  .map((ticket: any, index: number) => (
                    <View key={ticket.id} style={styles.ticket}>
                      <Text style={styles.ticketHeader}>
                        Ticket #{pageIndex * ticketsPerPage + index + 1}
                      </Text>
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
  
            
            </Page>
          ))}
        </Document>
      );
    };

  const SkeletonLoader = () => (
    <div className="animate-pulse">
      <div className="flex justify-end mb-4">
        <div className="h-10 w-32 bg-gray-200 rounded-md"></div>
      </div>
      <div className="h-[85vh] bg-gray-200 rounded-lg"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-4">
      <div className="container mx-auto flex flex-col gap-4">
        {/* <PDFDownloadLink 
          className="flex justify-end"
          document={<LotteryDocument />}
          fileName={`lottery-ticket-${ticketData.userInfo?.name}-${ticketData.userInfo?.phone}.pdf`}
        >
          {({ loading }) => (
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              {loading ? 'Preparing download...' : 'Download PDF'}
            </button>
          )}
        </PDFDownloadLink> */}
        
        <div style={{ height: "85vh" }}>
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <PDFViewer style={{ width: "100%", height: "100%" }}>
              <LotteryDocument />
            </PDFViewer>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketPDF;