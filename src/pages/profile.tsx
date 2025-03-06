"use client";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { User, Ticket as TicketIcon, History } from "lucide-react";

export default function ProfilePage() {
  const mockUser = {
    name: "John Doe",
    email: "john@example.com",
    balance: 500,
    tickets: [
      { id: 1, numbers: [7, 14, 23, 31, 42, 49], drawDate: "2024-04-10" },
      { id: 2, numbers: [3, 11, 19, 27, 35, 44], drawDate: "2024-04-17" },
    ],
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
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tickets">My Tickets</TabsTrigger>
            <TabsTrigger value="history">Purchase History</TabsTrigger>
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
                  <Button className="mt-4">Add Funds</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full" variant="outline">
                    <TicketIcon className="mr-2 h-4 w-4" />
                    Buy New Tickets
                  </Button>
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
                <div className="space-y-4">
                  {mockUser.tickets.map((ticket) => (
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
                        {ticket.numbers.map((num, index) => (
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
        </Tabs>
      </div>
    </div>
  );
}