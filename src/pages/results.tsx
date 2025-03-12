import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Trophy, Calendar, Gift } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function ResultsPage() {
  const [selectedDraw, setSelectedDraw] = useState("2024-04-15");

  // Mock data for past draws
  const pastDraws = [
    { date: "2024-04-15", id: "draw-1" },
    { date: "2024-04-08", id: "draw-2" },
    { date: "2024-04-01", id: "draw-3" },
    { date: "2024-03-25", id: "draw-4" },
  ];

  // Mock data for winning tickets
  const winningResults = {
    "draw-1": {
      drawDate: "April 15, 2024",
      winningNumbers: [7, 13, 24, 31, 42, 49],
      winners: [
        { 
          rank: 1, 
          ticketNumber: "A-78542", 
          numbers: [7, 13, 24, 31, 42, 49], 
          prize: "$100,000", 
          name: "John Smith",
          location: "New York"
        },
        { 
          rank: 2, 
          ticketNumber: "B-12345", 
          numbers: [7, 13, 24, 31, 42, 8], 
          prize: "$50,000", 
          name: "Sarah Johnson",
          location: "Chicago"
        },
        { 
          rank: 3, 
          ticketNumber: "C-98765", 
          numbers: [7, 13, 24, 31, 5, 49], 
          prize: "Smart TV", 
          name: "Michael Brown",
          location: "Los Angeles"
        },
        { 
          rank: 4, 
          ticketNumber: "D-45678", 
          numbers: [7, 13, 24, 2, 42, 49], 
          prize: "Smartphone", 
          name: "Emily Davis",
          location: "Houston"
        },
        { 
          rank: 5, 
          ticketNumber: "E-34567", 
          numbers: [7, 13, 4, 31, 42, 10], 
          prize: "Rice Cooker", 
          name: "Robert Wilson",
          location: "Miami"
        },
      ]
    },
    "draw-2": {
      drawDate: "April 8, 2024",
      winningNumbers: [3, 11, 22, 27, 35, 44],
      winners: [
        { 
          rank: 1, 
          ticketNumber: "F-65432", 
          numbers: [3, 11, 22, 27, 35, 44], 
          prize: "$100,000", 
          name: "Jennifer Lee",
          location: "Seattle"
        },
        { 
          rank: 2, 
          ticketNumber: "G-23456", 
          numbers: [3, 11, 22, 27, 35, 18], 
          prize: "$50,000", 
          name: "David Miller",
          location: "Boston"
        },
        { 
          rank: 3, 
          ticketNumber: "H-87654", 
          numbers: [3, 11, 22, 27, 9, 44], 
          prize: "Refrigerator", 
          name: "Lisa Garcia",
          location: "Dallas"
        },
      ]
    },
    // Add more draw results as needed
  };

  const selectedDrawData = winningResults[selectedDraw === "2024-04-15" ? "draw-1" : 
                          selectedDraw === "2024-04-08" ? "draw-2" : "draw-1"];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Lottery Results</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Select Draw Date
            </CardTitle>
            <CardDescription>View results from previous draws</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={selectedDraw} onValueChange={setSelectedDraw}>
              <SelectTrigger>
                <SelectValue placeholder="Select a draw date" />
              </SelectTrigger>
              <SelectContent>
                {pastDraws.map((draw) => (
                  <SelectItem key={draw.id} value={draw.date}>
                    {draw.date}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        
        <Card className="w-full md:w-2/3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Winning Numbers
            </CardTitle>
            <CardDescription>Draw date: {selectedDrawData.drawDate}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-3 mb-4">
              {selectedDrawData.winningNumbers.map((num, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold"
                >
                  {num}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="winners" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="winners">Winners</TabsTrigger>
          <TabsTrigger value="prizes">Prize Breakdown</TabsTrigger>
        </TabsList>
        
        <TabsContent value="winners">
          <Card>
            <CardHeader>
              <CardTitle>Winning Tickets</CardTitle>
              <CardDescription>
                Congratulations to all winners from the {selectedDrawData.drawDate} draw
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {selectedDrawData.winners.map((winner) => (
                  <div key={winner.rank} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full ${winner.rank === 1 ? 'bg-yellow-500' : winner.rank === 2 ? 'bg-gray-300' : winner.rank === 3 ? 'bg-amber-700' : 'bg-primary'} text-white flex items-center justify-center font-bold`}>
                          {winner.rank}
                        </div>
                        <div>
                          <h3 className="font-semibold">{winner.name}</h3>
                          <p className="text-sm text-muted-foreground">{winner.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg flex items-center gap-1">
                          {winner.prize.includes('$') ? (
                            winner.prize
                          ) : (
                            <>
                              <Gift className="h-4 w-4" />
                              {winner.prize}
                            </>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">Ticket: {winner.ticketNumber}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {winner.numbers.map((num, index) => (
                        <div
                          key={index}
                          className={`w-8 h-8 rounded-full ${
                            selectedDrawData.winningNumbers.includes(num)
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          } flex items-center justify-center text-sm font-medium`}
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="prizes">
          <Card>
            <CardHeader>
              <CardTitle>Prize Breakdown</CardTitle>
              <CardDescription>
                Details of prizes for the {selectedDrawData.drawDate} draw
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 font-medium border-b pb-2">
                  <div>Match</div>
                  <div>Winners</div>
                  <div>Prize</div>
                </div>
                <div className="grid grid-cols-3 border-b pb-2">
                  <div>6 numbers</div>
                  <div>1</div>
                  <div className="font-medium">$100,000</div>
                </div>
                <div className="grid grid-cols-3 border-b pb-2">
                  <div>5 numbers + bonus</div>
                  <div>1</div>
                  <div className="font-medium">$50,000</div>
                </div>
                <div className="grid grid-cols-3 border-b pb-2">
                  <div>5 numbers</div>
                  <div>1</div>
                  <div className="font-medium">Smart TV</div>
                </div>
                <div className="grid grid-cols-3 border-b pb-2">
                  <div>4 numbers</div>
                  <div>1</div>
                  <div className="font-medium">Smartphone</div>
                </div>
                <div className="grid grid-cols-3">
                  <div>3 numbers</div>
                  <div>1</div>
                  <div className="font-medium">Rice Cooker</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">
          Don't miss your chance to win in the next draw!
        </p>
        <Button size="lg" asChild>
          <a href="/buy-tickets">Buy Tickets Now</a>
        </Button>
      </div>
    </div>
  );
}