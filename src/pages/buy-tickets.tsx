import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Trash2, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LotteryTicket {
  id: number;
  numbers: number[];
}

interface UserInfo {
  name: string;
  phone: string;
  address: string;
}

export default function BuyTicketsPage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    phone: "",
    address: "",
  });

  const [tickets, setTickets] = useState<LotteryTicket[]>([
    { id: 1, numbers: [] },
  ]);

  const generateRandomNumbers = () => {
    const numbers: number[] = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 49) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers.sort((a, b) => a - b);
  };

  const handleRandomize = (ticketId: number) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, numbers: generateRandomNumbers() }
          : ticket
      )
    );
  };

  const addTicket = () => {
    const newId = Math.max(...tickets.map((t) => t.id)) + 1;
    setTickets([...tickets, { id: newId, numbers: [] }]);
  };

  const removeTicket = (ticketId: number) => {
    if (tickets.length > 1) {
      setTickets(tickets.filter((ticket) => ticket.id !== ticketId));
    }
  };

  const handleNumberChange = (
    ticketId: number,
    index: number,
    value: string
  ) => {
    const num = parseInt(value) || 0;
    if (num >= 0 && num <= 49) {
      setTickets((prev) =>
        prev.map((ticket) => {
          if (ticket.id === ticketId) {
            const newNumbers = [...(ticket.numbers || [])];
            newNumbers[index] = num;
            return { ...ticket, numbers: newNumbers };
          }
          return ticket;
        })
      );
    }
  };

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
  };

  const handlePurchase = () => {
    const ticketData = {
      userInfo,
      tickets,
      purchaseDate: new Date().toISOString(),
    };
    
    const encodedData = encodeURIComponent(JSON.stringify(ticketData));
    navigate(`/buy-tickets/preview?data=${encodedData}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-4">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Buy Lottery Tickets</CardTitle>
            <CardDescription>
              Choose your lucky numbers or generate them randomly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* User Information Form */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Your Information</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={userInfo.name}
                      onChange={handleUserInfoChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={userInfo.phone}
                      onChange={handleUserInfoChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="Enter your address"
                      value={userInfo.address}
                      onChange={handleUserInfoChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Lottery Tickets */}
              {tickets.map((ticket, ticketIndex) => (
                <div key={ticket.id}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">
                      Ticket #{ticketIndex + 1}
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRandomize(ticket.id)}
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Random
                      </Button>
                      {tickets.length > 1 && (
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeTicket(ticket.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-2 mb-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index}>
                        <Label htmlFor={`ticket-${ticket.id}-number-${index}`}>
                          #{index + 1}
                        </Label>
                        <Input
                          id={`ticket-${ticket.id}-number-${index}`}
                          type="number"
                          min="1"
                          max="49"
                          value={ticket.numbers[index] || ""}
                          onChange={(e) =>
                            handleNumberChange(ticket.id, index, e.target.value)
                          }
                          className="text-center"
                        />
                      </div>
                    ))}
                  </div>

                  {ticketIndex < tickets.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))}

              <Button
                variant="outline"
                className="w-full"
                onClick={addTicket}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Another Ticket
              </Button>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Price per ticket:</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Number of tickets:</span>
                  <span>{tickets.length}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>${(tickets.length * 5).toFixed(2)}</span>
                </div>
                <Button className="w-full" onClick={handlePurchase}>Purchase Tickets</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}