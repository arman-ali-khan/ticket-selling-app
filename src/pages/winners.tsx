import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";

// Sample data for winners
const eventsWithWinners = [
  {
    id: 1,
    name: "Weekly Mega Draw",
    date: "June 10, 2023",
    winners: [
      { id: 1, name: "John Smith", prize: "$10,000 Cash", ticketNumber: "A-45678", isGrand: true },
      { id: 2, name: "Maria Garcia", prize: "iPhone 14 Pro", ticketNumber: "A-23456" },
      { id: 3, name: "Robert Johnson", prize: "$500 Gift Card", ticketNumber: "A-78901" },
      { id: 4, name: "Sarah Williams", prize: "Smart Watch", ticketNumber: "A-34567" },
    ]
  },
  {
    id: 2,
    name: "Monthly Grand Lottery",
    date: "May 30, 2023",
    winners: [
      { id: 1, name: "David Brown", prize: "Luxury Car", ticketNumber: "B-12345", isGrand: true },
      { id: 2, name: "Jennifer Davis", prize: "Vacation Package", ticketNumber: "B-67890" },
      { id: 3, name: "Michael Wilson", prize: "$2,000 Cash", ticketNumber: "B-23456" },
      { id: 4, name: "Lisa Martinez", prize: "Gaming Console", ticketNumber: "B-78901" },
    ]
  },
  {
    id: 3,
    name: "Special Holiday Raffle",
    date: "April 15, 2023",
    winners: [
      { id: 1, name: "James Taylor", prize: "Electric Bike", ticketNumber: "C-34567", isGrand: true },
      { id: 2, name: "Patricia Anderson", prize: "$1,000 Cash", ticketNumber: "C-89012" },
      { id: 3, name: "Thomas Jackson", prize: "Tablet", ticketNumber: "C-45678" },
      { id: 4, name: "Elizabeth White", prize: "Wireless Headphones", ticketNumber: "C-90123" },
    ]
  }
];

export default function WinnersPage() {
  const [selectedEvent, setSelectedEvent] = useState(eventsWithWinners[0].id.toString());
  
  // Trigger confetti when viewing grand prize winners
  useEffect(() => {
    const grandWinner = eventsWithWinners
      .find(event => event.id.toString() === selectedEvent)?.winners
      .find(winner => winner.isGrand);
      
    if (grandWinner) {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 500);
    }
  }, [selectedEvent]);

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2">Recent Winners</h1>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Congratulations to all our lucky winners! Check out who won in our recent draws and what amazing prizes they took home.
        </p>

        <Tabs defaultValue={selectedEvent} onValueChange={setSelectedEvent} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
            {eventsWithWinners.map((event) => (
              <TabsTrigger key={event.id} value={event.id.toString()} className="text-sm md:text-base">
                {event.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {eventsWithWinners.map((event) => (
            <TabsContent key={event.id} value={event.id.toString()} className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">{event.name}</h2>
                <p className="text-muted-foreground">Draw Date: {event.date}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.winners.map((winner) => (
                  <motion.div
                    key={winner.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className={`overflow-hidden ${winner.isGrand ? 'border-2 border-primary' : ''}`}>
                      {winner.isGrand && (
                        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                          Grand Prize Winner
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{winner.name}</CardTitle>
                            <CardDescription>Ticket: {winner.ticketNumber}</CardDescription>
                          </div>
                          {winner.isGrand ? (
                            <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700">
                              Grand Prize
                            </Badge>
                          ) : (
                            <Badge>Winner</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-bold text-primary">{winner.prize}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  The next draw will take place soon. Don't miss your chance to win!
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
}