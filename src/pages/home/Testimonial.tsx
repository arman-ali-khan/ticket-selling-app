import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";

function Testimonial() {
      // Testimonials data
  const testimonials = [
    {
      name: "John Smith",
      avatar: "/images/avatars/john.jpg",
      prize: "$250,000",
      quote: "I never thought I'd win! The moment I got the call, my life changed forever. I've paid off my mortgage and now I'm planning a dream vacation.",
      date: "January 2023",
      event: "Monthly Special"
    },
    {
      name: "Sarah Johnson",
      avatar: "/images/avatars/john.jpg",
      prize: "$50,000",
      quote: "After playing for just 3 months, I hit the jackpot! The process was so smooth and the team was incredibly helpful with the prize claim.",
      date: "March 2023",
      event: "Weekly Draw"
    },
    {
      name: "Michael Chen",
      avatar: "/images/avatars/john.jpg",
      prize: "$1,200,000",
      quote: "I bought tickets for my entire family and one of them won! We split the prize and each of us was able to fulfill a lifelong dream.",
      date: "December 2022",
      event: "Eid Celebration"
    },
    {
      name: "Priya Patel",
      avatar: "/images/avatars/john.jpg",
      prize: "$75,000",
      quote: "The 100 Tickets Bonanza gave me the best odds, and it paid off! I've started my own small business with the winnings.",
      date: "April 2023",
      event: "100 Tickets Bonanza"
    }
  ];
    return (
            <div className="mt-16 mb-16">
            <h2 className="text-2xl font-bold text-center mb-6">Winner Testimonials</h2>
            <p className="text-center text-muted-foreground mb-8">Hear from our lucky winners who changed their lives with a single ticket</p>
            
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-24 w-24 rounded-full">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="rounded-full object-cover" />
                            <AvatarFallback className="text-xs">{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">Won {testimonial.prize}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter className="flex justify-between text-sm text-muted-foreground">
                        <span>{testimonial.event}</span>
                        <span>{testimonial.date}</span>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
  
    );
}

export default Testimonial;