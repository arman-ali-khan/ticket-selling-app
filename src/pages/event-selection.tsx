import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { Ticket, Calendar, Trophy, Users } from "lucide-react";
// import { UNSAFE_DataRouterContext, useInRouterContext, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function EventSelectionPage() {

    let { search } = useLocation();


  const navigate = useNavigate();



  const events = [
    {
      id: "weekly",
      name: "Weekly Draw",
      description: "Every Friday at 8 PM. Buy tickets before 6 PM on draw day.",
      prize: "$500,000",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-blue-100 dark:bg-blue-900",
      deadline: "Friday, 6:00 PM"
    },
    {
      id: "monthly",
      name: "Monthly Special",
      description: "Last day of every month. Higher stakes, bigger rewards!",
      prize: "$2,500,000",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-purple-100 dark:bg-purple-900",
      deadline: "Last day of month, 8:00 PM"
    },
    {
      id: "eid",
      name: "Eid Celebration",
      description: "Special draw during Eid celebrations with cultural prizes!",
      prize: "$1,500,000",
      icon: <Ticket className="h-6 w-6" />,
      color: "bg-green-100 dark:bg-green-900",
      deadline: "Eid Eve, 10:00 PM"
    },
    {
      id: "hundred",
      name: "100 Tickets Bonanza",
      description: "Limited to 100 tickets only! Highest odds of winning in any lottery.",
      prize: "$100,000",
      icon: <Users className="h-6 w-6" />,
      color: "bg-red-100 dark:bg-red-900",
      deadline: "When all tickets are sold"
    }
  ];
  
  // search params
  const searchQuery = search?.split('=')[1]
  const handleEventSelect = (eventId: string) => {
    navigate(`/${searchQuery==='customer'?'buy-tickets/customer':'buy-tickets'}?event=${eventId}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Select Lottery Event</h1>
        <p className="text-muted-foreground">Choose which lottery event you want to participate in</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden border-2 hover:border-primary transition-all duration-200">
            <CardHeader className={`${event.color} p-4`}>
              <div className="flex justify-between items-center">
                {event.icon}
                <span className="text-2xl font-bold">{event.prize}</span>
              </div>
              <CardTitle className="mt-2">{event.name}</CardTitle>
              <CardDescription className="text-foreground/80">
                Deadline: {event.deadline}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p>{event.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button 
                className="w-full" 
                onClick={() => handleEventSelect(event.id)}
              >
                Select & Buy Tickets
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}