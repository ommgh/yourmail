import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "0",
    description: "All the email basics in one package.",
    features: [
      "Unlimited mails",
      "2 Team members",
      "30 AI credits per month",
      "Scheduling",
      "Privacy reports",
    ],
  },
  {
    name: "Premium",
    price: "30",
    description: "Designed to scale with you.",
    badge: "Users choice",
    features: [
      "Everything in basic",
      "1,000 AI credits per month",
      "5 Team members",
      "AI task management",
      "AI summarize",
    ],
  },
  {
    name: "Business",
    price: "100",
    description: "Everything you need to grow your business.",
    features: [
      "Everything in Premium",
      "Unlimited team members",
      "3,000 AI credits per user",
      "Team channel",
      "Tool support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-500 py-20 sm:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:max-w-[800px]">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl">
              Simple pricing
            </h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-xl">
              Get everything you need to{" "}
              <span className="font-semibold text-gray-900">
                manage emails efficiently
              </span>{" "}
              and collaborate with your team
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-8 sm:pt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm"
            >
              {plan.badge && (
                <div className="absolute right-4 top-4 rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white">
                  {plan.badge}
                </div>
              )}
              <CardHeader className="p-6">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </CardHeader>
              <CardContent className="grid gap-4 p-6 pt-0">
                <Button
                  className="w-full rounded-full bg-black text-white hover:bg-black/90"
                  size="lg"
                >
                  Get started today
                </Button>
                <ul className="grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-500/10 p-1">
                        <Check className="h-4 w-4 text-blue-500" />
                      </div>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
