import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Ticket } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
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
          </div>
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