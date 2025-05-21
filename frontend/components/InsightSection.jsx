import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Board from "@/components/Assets/Board.png";

export default function InsightSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-accent/50 to-white ml-10 mr-10">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text on Left */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Harness Insights for<br />Success
            </h2>
            <p className="text-black mb-6">
              Our AI analyzes millions of data points to provide actionable insights about your audience. Make your campaigns more effective, while your competitors are busy guessing what strategies might work.
            </p>
            <ul className="space-y-4 mb-8 text-black">
              {[
                'Real-time performance analytics',
                'Customer journey optimization',
                'Competitor benchmarking',
                'ROI forecasting and tracking'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-primary hover:bg-primary/90">Learn more</Button>
          </div>

          {/* Image on Right */}
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6 flex justify-center">
              <Image
                src={Board}
                alt="AI Marketing Insights Dashboard"
                width={400}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute -top-6 left-10 bg-blue-500 rounded-full p-3 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="absolute -bottom-4 right-10 bg-green-500 rounded-full p-3 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
