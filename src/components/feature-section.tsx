import { Zap, FileText, Clock, Globe, Shield, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description:
        "Get summaries in seconds, no matter how long the original text is.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Multiple Formats",
      description: "Support for articles, PDFs, research papers, and more.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time",
      description: "Extract key information without reading entire documents.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-language",
      description: "Supports over 50 languages for global accessibility.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure",
      description:
        "Your data is encrypted and never stored without permission.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Powered",
      description:
        "Advanced algorithms ensure accurate and relevant summaries.",
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-background"
      id="learn-more"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our AI summarizer comes packed with everything you need to process
              information efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="transition-all hover:shadow-md text-center"
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-primary/10 w-fit flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
