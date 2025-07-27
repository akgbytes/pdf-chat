import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CustomButton } from "@/components/ui/custom-button";
import { Heading } from "@/components/ui/heading";
import { Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-24">
      <MaxWidthWrapper className="text-center">
        <div className="relative mx-auto text-center flex flex-col items-center gap-10">
          <div>
            <Heading>
              <span>Talk to Your PDFs,</span>
              <br />
              <span className="relative bg-gradient-to-r from-sky-700 to-sky-800 text-transparent bg-clip-text">
                Get Answers in Seconds
              </span>
            </Heading>
          </div>

          <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
            PDFChat makes understanding documents effortless. Just upload a PDF
            and ask anything — no more scrolling, skimming, or second-guessing.
          </p>

          <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
            {[
              "Instant answers from any PDF",
              "Save hours of reading and research",
              "Buy once, use forever",
            ].map((item, index) => (
              <li key={index} className="flex gap-1.5 items-center text-left">
                <Check className="size-5 shrink-0 text-sky-700" />
                {item}
              </li>
            ))}
          </ul>

          <div className="w-full max-w-80">
            <CustomButton
              href="/sign-up"
              className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              Start Chatting
            </CustomButton>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
