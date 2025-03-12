"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { User, Ticket as TicketIcon, History, Users, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { useToast } from "../hooks/use-toast";

export default function ProfilePage() {
  const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false);
  const { toast } = useToast();
  
  const [mockUser, setMockUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 17010 34883",
    balance: 500,
    tickets: [
      { id: 1, numbers: [7, 14, 23, 31, 42, 49], drawDate: "2024-04-17", purchaseDate: "2024-04-01" },
      { id: 2, numbers: [3, 11, 19, 27, 35, 44], drawDate: "2024-04-17", purchaseDate: "2024-04-01" },
      { id: 3, numbers: [5, 12, 18, 25, 37, 41], drawDate: "2024-04-10", purchaseDate: "2024-04-05" },
      { id: 4, numbers: [9, 16, 22, 33, 38, 45], drawDate: "2024-04-17", purchaseDate: "2024-04-05" },
      { id: 5, numbers: [2, 10, 21, 29, 36, 48], drawDate: "2024-04-24", purchaseDate: "2024-04-05" },
    ],
    affiliate: {
      ticketsSold: 85,
      pointsEarned: 85,
      referralCode: "JOHNDOE2024",
      referralLink: "https://lottery.example.com/ref/JOHNDOE2024",
      monthlySales: [
        { month: "January", tickets: 30, points: 30 },
        { month: "February", tickets: 25, points: 25 },
        { month: "March", tickets: 30, points: 30 },
        { month: "April", tickets: 0, points: 0 },
      ]
    }
  });

  const handleWithdrawPoints = () => {
    if (mockUser.affiliate.pointsEarned >= 100) {
      setWithdrawDialogOpen(true);
    } else {
      // Show warning directly in the UI instead of toast
      // The toast is removed from here
    }
  };

  const confirmWithdraw = () => {
    // Get the points to withdraw
    const pointsToWithdraw = mockUser.affiliate.pointsEarned;
    
    // Update the user state with new balance and reset points
    setMockUser(prevUser => ({
      ...prevUser,
      balance: prevUser.balance + pointsToWithdraw,
      affiliate: {
        ...prevUser.affiliate,
        pointsEarned: 0
      }
    }));

    // Show success toast
    toast({
      title: "Points Withdrawn",
      description: `${pointsToWithdraw} points have been added to your balance.`,
      variant: "default",
    });
    
    setWithdrawDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center">
            <User className="h-10 w-10 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{mockUser.name}</h1>
            <p className="text-muted-foreground">{mockUser.email}</p>
            <p className="text-muted-foreground">{mockUser.phone}</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tickets">My Tickets</TabsTrigger>
            <TabsTrigger value="history">Purchase History</TabsTrigger>
            <TabsTrigger value="affiliate">Affiliate</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Account Balance</CardTitle>
                  <CardDescription>Your current balance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">${mockUser.balance}</p>
                  <Link to="/add-funds">
                    <Button className="mt-4">Add Funds</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                 <Link to={'/buy-tickets'}> <Button className="w-full" variant="outline">
                    <TicketIcon className="mr-2 h-4 w-4" />
                    Buy New Tickets
                  </Button></Link>
                  <Button className="w-full" variant="outline">
                    <History className="mr-2 h-4 w-4" />
                    View Past Results
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tickets">
            <Card>
              <CardHeader>
                <CardTitle>Active Tickets</CardTitle>
                <CardDescription>Your current lottery tickets</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Group tickets by purchase date */}
                {Object.entries(
                  mockUser.tickets.reduce((groups, ticket) => {
                    const date = ticket.purchaseDate || "Unknown";
                    if (!(date in groups)) (groups as Record<string, any[]>)[date] = [];
                    (groups as Record<string, any[]>)[date].push(ticket);
                    return groups;
                  }, {})
                ).map(([date, tickets]) => (
                  <div key={date} className="mb-6">
                    <h3 className="text-sm font-medium mb-2 pb-1 border-b">
                      Purchased on: {date}
                    </h3>
                    <div className="space-y-4">
                      {(tickets as any[]).map((ticket) => (
                        <div
                          key={ticket.id}
                          className="p-4 border rounded-lg space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Ticket #{ticket.id}</span>
                            <span className="text-muted-foreground">
                              Draw: {ticket.drawDate}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            {ticket.numbers.map((num: number, index: number) => (
                              <div
                                key={index}
                                className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium"
                              >
                                {num}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Purchase History</CardTitle>
                <CardDescription>Your recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">2 Lottery Tickets</p>
                      <p className="text-sm text-muted-foreground">
                        Purchased on April 5, 2024
                      </p>
                    </div>
                    <p className="font-medium">-$10.00</p>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Added Funds</p>
                      <p className="text-sm text-muted-foreground">
                        April 1, 2024
                      </p>
                    </div>
                    <p className="font-medium text-green-600">+$100.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="affiliate">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Affiliate Stats</CardTitle>
                    <Button 
                      size="sm" 
                      onClick={handleWithdrawPoints}
                      variant="outline"
                      disabled={mockUser.affiliate.pointsEarned < 100}
                    >
                      Withdraw Points
                    </Button>
                  </div>
                  <CardDescription>Your referral performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="mr-2 h-5 w-5 text-primary" />
                        <span>Tickets Sold</span>
                      </div>
                      <span className="font-bold">{mockUser.affiliate.ticketsSold}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <DollarSign className="mr-2 h-5 w-5 text-primary" />
                        <span>Points Earned</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-bold">{mockUser.affiliate.pointsEarned}</span>
                        {mockUser.affiliate.pointsEarned < 100 && (
                          <p className="text-xs text-red-500">Need 100+ points to withdraw</p>
                        )}
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-muted-foreground mb-2">Your Referral Code</p>
                      <div className="flex">
                        <div className="bg-muted p-2 rounded-l-md border border-r-0 flex-grow">
                          <code>{mockUser.affiliate.referralCode}</code>
                        </div>
                        <Button variant="outline" className="rounded-l-none">Copy</Button>
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      Share Referral Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                  <CardDescription>Earn 100 points for every 100 tickets sold in a month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockUser.affiliate.monthlySales.map((month, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{month.month}</span>
                          <span className="text-muted-foreground">{month.tickets} tickets</span>
                        </div>
                        <div className="mt-2">
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div 
                              className="bg-primary h-2.5 rounded-full" 
                              style={{ width: `${Math.min(month.tickets, 100)}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-muted-foreground">0</span>
                            <span className="text-xs text-muted-foreground">100</span>
                          </div>
                        </div>
                        <p className="text-sm mt-2">
                          Points earned: <span className="font-medium">{month.points}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Withdrawal Confirmation Dialog */}
      <Dialog open={withdrawDialogOpen} onOpenChange={setWithdrawDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Withdraw Points</DialogTitle>
            <DialogDescription>
              You are about to convert {mockUser.affiliate.pointsEarned} points to your main balance.
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Points will be converted to your account balance at a 1:1 ratio.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setWithdrawDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmWithdraw}>
              Confirm Withdrawal
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}