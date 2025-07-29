import { CustomButton } from "./ui/custom-button";
import { Heading } from "./ui/heading";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <Heading>Ready to transform how you read PDFs?</Heading>

          <p className="text-lg md:text-xl mb-8 text-gray-600 mt-12">
            Join thousands of professionals who are already saving hours with
            AI-powered PDF conversations. Start today — it only takes seconds.
          </p>

          <div className="flex justify-center items-center gap-4">
            <div className="w-full max-w-80">
              <CustomButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start Chatting
              </CustomButton>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "10,000+", label: "Documents Processed" },
              { value: "99.9%", label: "Accuracy Rate" },
              { value: "5", label: "User Rating" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-sky-900 mb-1 ">
                  {stat.value}
                </div>

                <div className="text-sky-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
