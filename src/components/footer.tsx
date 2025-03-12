import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background py-4">
      <div className="container flex flex-col gap-8 py-12 px-4 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3 md:max-w-xs">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-lg">Lottery System</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Your trusted platform for online lottery tickets. Play responsibly and experience the thrill of winning.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 px-2">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Quick Links</h3>
            <Link to="/buy-tickets" className="text-sm text-muted-foreground hover:text-primary">
              Buy Tickets
            </Link>
            <Link to="/results" className="text-sm text-muted-foreground hover:text-primary">
              Results
            </Link>
            <Link to="/how-to-play" className="text-sm text-muted-foreground hover:text-primary">
              How to Play
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Account</h3>
            <Link to="/login" className="text-sm text-muted-foreground hover:text-primary">
              Login
            </Link>
            <Link to="/register" className="text-sm text-muted-foreground hover:text-primary">
              Register
            </Link>
            <Link to="/profile" className="text-sm text-muted-foreground hover:text-primary">
              My Account
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Email: support@lotterysystem.com
            </p>
            <p className="text-sm text-muted-foreground">
              Phone: +1 (555) 123-4567
            </p>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact Form
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lottery System. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}