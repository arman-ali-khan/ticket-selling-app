import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";



export default function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const navigate = useNavigate();
  console.log(selectedEvent);

  const handleEventSelect = (event: string, customerType: string) => {
    setSelectedEvent(event);
    console.log(customerType,'event');
    navigate(`/${customerType==='me'?'buy-tickets':'buy-tickets/customer'}?event=${event}&customer=${customerType}`);
  };

  const events = [
    { id: "weekly", name: "Weekly Draw", prize: "$500,000" },
    { id: "monthly", name: "Monthly Special", prize: "$2,500,000" },
    { id: "eid", name: "Eid Celebration", prize: "$1,500,000" },
    { id: "hundred", name: "100 Tickets Bonanza", prize: "$100,000" },
  ];

  const totalTickets = 100;
  const remainingTickets = 22; // Example value, you can fetch this dynamically

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Dream Big Win Bigger</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Your chance to win millions starts with a single ticket
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login">
              <Button size="lg">Login</Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline">Register</Button>
            </Link>
            
            {/* Replace direct link with dialog trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary">Buy Tickets Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Select Lottery Event</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {events.map((event) => (
                    <Button 
                      key={event.id} 
                      variant="outline" 
                      className="justify-between flex items-center p-4 h-auto"
                      onClick={() => handleEventSelect(event.id, "me")}
                    >
                      <span className="font-medium">{event.name}</span>
                      <span className="text-primary font-bold">{event.prize}</span>
                    </Button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
       
        {/* Lottery Events Tabs */}
        <div className="mt-16 mb-16">
          <h2 className="text-2xl font-bold text-center mb-6">Special Lottery Events</h2>
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="weekly" className="bg-slate-500 text-white hover:bg-slate-600 transition-colors duration-200">Weekly</TabsTrigger>
              <TabsTrigger value="monthly" className="bg-rose-500 text-white hover:bg-rose-600 transition-colors duration-200">Monthly</TabsTrigger>
              <TabsTrigger value="eid" className="bg-green-500 text-white hover:bg-green-600 transition-colors duration-200">Eid Celebration</TabsTrigger>
              <TabsTrigger value="hundred" className="bg-red-500 text-white hover:bg-red-600 transition-colors duration-200">100 Tickets</TabsTrigger>
            </TabsList>
            <TabsContent value="weekly" className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Weekly Jackpot</h3>
              <p className="mb-4">Every Friday at 8 PM. Buy tickets before 6 PM on draw day.</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Bike" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-yellow-500">Grand Prize: $500,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="E-Bike" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-500">Second Prize: $50,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Bicycle" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Third Prize: $25,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Rice Cooker" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Fourth Prize: $10,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Rice Cooker" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Fifth Prize: $5,000</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-2xl font-bold text-primary">$500,000</p>
                  <p className="text-muted-foreground">Current prize pool</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>Buy Options</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEventSelect("weekly", "me")}>
                      Buy for Me
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEventSelect("weekly", "customer")}>
                      Buy for Customer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsContent>
            {/* Repeat similar structure for other tabs */}
            <TabsContent value="monthly" className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Monthly Mega Draw</h3>
              <p className="mb-4">Last day of every month. Higher stakes, bigger rewards!</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Bike" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-yellow-500">Grand Prize: $2,500,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="E-Bike" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-500">Second Prize: $250,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Bicycle" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Third Prize: $125,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Rice Cooker" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Fourth Prize: $50,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Rice Cooker" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Fifth Prize: $25,000</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-2xl font-bold text-primary">$2,500,000</p>
                  <p className="text-muted-foreground">Current prize pool</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>Buy Options</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEventSelect("monthly", "me")}>
                      Buy for Me
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEventSelect("monthly", "customer")}>
                      Buy for Customer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsContent>
            {/* Continue for other events */}
            <TabsContent value="eid" className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Eid Special Lottery</h3>
              <p className="mb-4">Special draw during Eid celebrations with cultural prizes!</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Bike" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-yellow-500">Grand Prize: $1,500,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="E-Bike" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-500">Second Prize: $150,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Bicycle" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Third Prize: $75,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Rice Cooker" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Fourth Prize: $30,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Rice Cooker" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Fifth Prize: $15,000</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-2xl font-bold text-primary">$1,500,000</p>
                  <p className="text-muted-foreground">Next Eid draw in 45 days</p>
                </div>
                <Link to='/register?type=eid'><Button>Pre-register</Button></Link>
              </div>
            </TabsContent>
            <TabsContent value="hundred" className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">100 Tickets Bonanza</h3>
              <p className="mb-4">Limited to 100 tickets only! Highest odds of winning in any lottery.</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Bike" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-yellow-500">Grand Prize: $100,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="E-Bike" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-500">Second Prize: $10,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Bicycle" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Third Prize: $5,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Rice Cooker" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Fourth Prize: $2,000</p>
                </div>
                <div className="flex items-center">
                  <img src={'/images/motorbike.png'} alt="Rice Cooker" className="h-6 w-6 mr-2" />
                  <p className="text-lg font-semibold text-gray-400">Fifth Prize: $1,000</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-2xl font-bold text-primary">$100,000</p>
                  <p className="text-muted-foreground">{remainingTickets} tickets remaining</p>
                  {/* Progress Bar for Remaining Tickets */}
                  <div className="w-full bg-gray-400 rounded-full h-4 mt-2">
                    <div className="bg-red-500 h-4 rounded-full" style={{ width: `${(remainingTickets / totalTickets) * 100}%` }}></div>
                  </div>
                </div>
                <Button variant="destructive">Buy Limited Ticket</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ticket className="h-5 w-5" />
                Latest Jackpot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">$10,000,000</p>
              <p className="text-muted-foreground">Next draw in 2 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ticket className="h-5 w-5" />
                Recent Winners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>John D. - $50,000</li>
                <li>Sarah M. - $10,000</li>
                <li>Robert K. - $5,000</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ticket className="h-5 w-5" />
                How to Play
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Register an account</li>
                <li>Choose your lucky numbers</li>
                <li>Purchase your tickets</li>
                <li>Wait for the draw</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}