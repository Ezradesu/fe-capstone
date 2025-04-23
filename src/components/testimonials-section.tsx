import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This AI summarizer has completely transformed how I consume research papers. I save hours every week!",
      author: "Dr. Sarah Johnson",
      role: "Research Scientist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "As a student, this tool has been invaluable for quickly understanding complex academic materials.",
      author: "Michael Chen",
      role: "Graduate Student",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "Our content team uses this daily to process industry reports. The accuracy is impressive.",
      author: "Emma Rodriguez",
      role: "Content Director",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-background/95">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Dont just take our word for it. Heress what people are saying
              about our AI summarizer.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 w-full max-w-6xl pt-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-left">
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 dark:text-gray-300">
                    {testimonial.quote}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center space-x-4 border-t pt-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
