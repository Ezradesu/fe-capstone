import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic summarization for occasional use",
      features: [
        "Regular summaries every day",
        "Up to 1,000 words per summary",
        "Basic formatting options",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "Coming Soon",

      description: "Advanced features for regular users",
      features: [
        "Unlimited summaries",
        "Up to 10,000 words per summary",
        "Advanced formatting options",
        "Priority support",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Pro+",
      price: "Coming Soon",
      description: "Tailored solutions for organizations",
      features: [
        "Unlimited everything",
        "Custom integration",
        "Dedicated account manager",
        "Customer support",
        "Advanced analytics",
        "Custom AI training",
      ],
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-background"
      id="try-now"
    >
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Choose the plan that works best for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 w-full max-w-6xl pt-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`flex flex-col justify-between ${
                  plan.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
