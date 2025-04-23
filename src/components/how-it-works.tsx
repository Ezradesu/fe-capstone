import { FileUp, Cpu, FileCheck } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <FileUp className="h-12 w-12 text-primary" />,
      title: "Upload Your Text",
      description:
        "Paste your text or upload a document in any supported format.",
    },
    {
      icon: <Cpu className="h-12 w-12 text-primary" />,
      title: "AI Processing",
      description:
        "Our advanced AI analyzes the content and identifies key information.",
    },
    {
      icon: <FileCheck className="h-12 w-12 text-primary" />,
      title: "Get Your Summary",
      description: "Receive a concise, accurate summary ready to use or share.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-background/95">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Three simple steps to get your text summarized instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl gap-8 md:gap-4 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-center space-y-4 h-full"
              >
                <div className="rounded-full p-4 bg-primary/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
