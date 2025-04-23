import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { TextShimmerWave } from "./ui/text-shimmer-wave";

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/95">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <TextShimmerWave
              className="[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              duration={1}
              spread={1}
              zDistance={1}
              scaleDistance={1.1}
              rotateYDistance={20}
            >
              Summarize Any Text in Seconds
            </TextShimmerWave>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our AI-powered text summarizer helps you extract key insights from
              long documents, articles, and reports instantly.
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="#learn-more">Learn More</Link>
            </Button>
            <InteractiveHoverButton />
          </div>
        </div>
      </div>
    </section>
  );
}
