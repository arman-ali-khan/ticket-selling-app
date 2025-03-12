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
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";
import { ArrowLeft } from "lucide-react";

export default function AddFundsPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle fund addition logic here
    console.log("Fund addition attempt:", {
      amount,
      paymentMethod,
      phoneNumber,
      transactionId,
    });

    // Show success toast with fixed variant
    toast({
      title: "Funds Added Successfully",
      description: `$${amount} has been added to your account via ${paymentMethod}.`,
    });

    // In a real application, you would send this data to your backend
    // For now, we'll just navigate back to the profile page
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-4">
      <div className="container mx-auto max-w-md">
        <div className="mb-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Profile
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Add Funds</CardTitle>
            <CardDescription>
              Add money to your account using your preferred payment method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    $
                  </span>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-6"
                    required
                    min="1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex flex-col items-center space-y-2">
                      <Label
                        htmlFor="bkash"
                        className="flex items-center space-x-2 w-full cursor-pointer"
                      >
                    <div className="flex items-center justify-center space-x-2 border rounded-md p-3 w-full">
                      <RadioGroupItem value="bkash" id="bkash" />
                        <img
                          src="/images/payment-icon.png"
                          alt="bKash"
                          className="h-8 w-8 object-contain"
                        />
                        <span>bKash</span>
                    </div>
                      </Label>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                      <Label
                        htmlFor="nagad"
                        className="flex items-center space-x-2 w-full cursor-pointer"
                      >
                    <div className="flex items-center justify-center space-x-2 border rounded-md p-3 w-full">
                      <RadioGroupItem value="nagad" id="nagad" />
                        <img
                          src="/images/nagad.png"
                          alt="Nagad"
                          className="h-8 w-8 object-contain"
                        />
                        <span>Nagad</span>
                    </div>
                      </Label>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                      <Label
                        htmlFor="rocket"
                        className="flex items-center space-x-2 w-full cursor-pointer"
                      >
                    <div className="flex items-center justify-center space-x-2 border rounded-md p-3 w-full">
                      <RadioGroupItem value="rocket" id="rocket" />
                        <img
                          src="/images/rocket.png"
                          alt="Rocket"
                          className="h-8 w-8 object-contain"
                        />
                        <span>Rocket</span>
                    </div>
                      </Label>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                  <Label
                      htmlFor="upay"
                        className="flex items-center space-x-2 w-full cursor-pointer"
                      >
                    <div className="flex items-center justify-center space-x-2 border rounded-md p-3 w-full">
                      <RadioGroupItem value="upay" id="upay" />
                    
                        <img
                          src="/images/upay.png"
                          alt="Upay"
                          className="h-8 w-8 object-contain"
                        />
                        <span>Upay</span>
                    </div>
                      </Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Enter your payment account number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transactionId">Transaction ID</Label>
                  <Input
                    id="transactionId"
                    placeholder="Enter transaction ID"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">
                  Add Funds
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      {/* Add Toaster component to render toast notifications */}
      <Toaster />
    </div>
  );
}