import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  // Add state for user and balance
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [balance, setBalance] = useState(0);

  // Check if user is logged in and fetch balance
  useEffect(() => {
    // This is a placeholder - in a real app, you'd check auth status
    // and fetch the balance from your backend or local storage
    const checkLoginStatus = () => {
      const user = localStorage.getItem('user');
      if (user) {
        setIsLoggedIn(true);
        // Mock balance - replace with actual balance fetch
        setBalance(parseFloat(localStorage.getItem('balance') || '0'));
      }
    };
    
    checkLoginStatus();
  }, []);

  return (
    <header className="sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4  md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Lottery System
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            {/* Display balance if logged in */}
            {!isLoggedIn && (
              <div className="mr-4 px-3 py-1 bg-muted rounded-md flex items-center">
                <span className="text-sm font-medium">Balance: ${balance.toFixed(2)}</span>
                <Button asChild variant="ghost" size="sm" className="ml-2 h-7 px-2">
                  <Link to="/add-funds">+</Link>
                </Button>
              </div>
            )}
            
            {/* Buy Now dropdown - Updated to point to event selection page */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Buy Now <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/event-selection" className="w-full cursor-pointer">Buy for Me</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/event-selection?for=customer" className="w-full cursor-pointer">Buy for Customer</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {isLoggedIn ? (
              <>
                <Button asChild variant="ghost">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild variant="default">
                  <Link to="/register">Register</Link>
                </Button>
              </>
            ) : (
              <Button asChild variant="ghost">
                <Link to="/profile">Profile</Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}