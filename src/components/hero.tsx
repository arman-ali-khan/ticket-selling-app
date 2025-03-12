import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { motion } from "framer-motion";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

const prizes = [
  {
    name: "Luxury Car",
    description: "Win a brand new luxury sedan worth $50,000",
    image: "/images/prizes/car.png",
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "Electric Bike",
    description: "Eco-friendly transportation worth $3,000",
    image: "/images/prizes/ebike.png",
    color: "from-green-500 to-teal-500"
  },
  {
    name: "Mountain Bike",
    description: "Professional mountain bike worth $1,500",
    image: "/images/prizes/motorbike.png",
    color: "from-red-500 to-orange-500"
  },
  {
    name: "City Bicycle",
    description: "Comfortable city cruiser worth $800",
    image: "/images/prizes/ebike.png",
    color: "from-yellow-500 to-amber-500"
  }
];

// Sample events data
const events = [
    { id: "weekly", name: "Weekly Draw", prize: "$500,000" },
    { id: "monthly", name: "Monthly Special", prize: "$2,500,000" },
    { id: "eid", name: "Eid Celebration", prize: "$1,500,000" },
    { id: "hundred", name: "100 Tickets Bonanza", prize: "$100,000" },
  ];

export default function Hero() {
  const plugin = useRef(
    Autoplay({ 
      delay: 4000, 
      stopOnInteraction: true,
      stopOnMouseEnter: true
    })
  );
  
  const navigate = useNavigate();
  
  // Function to handle event selection
  const handleEventSelect = (eventId: string, buyerType: string) => {
    navigate(`/buy-tickets?event=${eventId}&for=${buyerType}`);
  };

  return (
    <div className="relative overflow-hidden bg-background py-12 md:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern-dot bg-gray-900"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block">Dream Big,</span>
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Win Bigger
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your chance to win amazing prizes starts with a single ticket. Join thousands of winners who changed their lives forever.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Replace direct link with dialog trigger */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-primary/50">
                    Buy Tickets Now
                  </Button>
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
                        onClick={() => handleEventSelect(String(event?.id), "me")}
                      >
                        <span className="font-medium">{event.name}</span>
                        <span className="text-primary font-bold">{event.prize}</span>
                      </Button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              
              <Link to="/winners" className="relative z-20">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:bg-primary/10 transition-all duration-300">
                  See Recent Winners
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Prize carousel */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Carousel 
              className="w-full max-w-xl mx-auto" 
              plugins={[plugin.current]} 
              opts={{
                loop: true,
                align: "center",
              }}
            >
              <CarouselContent>
                {prizes.map((prize, index) => (
                  <CarouselItem key={index}>
                    <motion.div 
                      className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl perspective-1000"
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        z: 50
                      }}
                      transition={{ 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      {/* Prize image with 3D effect */}
                      <img 
                        src={prize.image} 
                        alt={prize.name} 
                        className="w-full h-full object-contain transform-gpu hover:scale-105 transition-transform duration-500"
                        style={{
                          transformStyle: "preserve-3d",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                        }}
                      />
                      
                      {/* Prize text on a floating card */}
                      <div className="absolute bottom-4 left-4 right-4  backdrop-blur-md p-4 rounded-lg shadow-xl border border-gray-200 dark:bg-gray-900/90 dark:border-gray-800">
                        <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                          {prize.name}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {prize.description}
                        </p>
                        <div className="mt-3">
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                            Win This Prize
                          </Button>
                        </div>
                      </div>
                      
                      {/* Prize badge */}
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg transform rotate-3">
                        Featured Prize
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30" />
              <CarouselNext className="right-4 bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30" />
            </Carousel>
            
            {/* Floating countdown */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg">
              Next draw: <span className="text-primary font-bold">2d 14h 33m</span>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {prizes.map((_, index) => (
                <div 
                  key={index} 
                  className="w-2 h-2 rounded-full bg-gray-400 opacity-70"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}