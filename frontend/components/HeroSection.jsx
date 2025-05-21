import { Button } from "@/components/ui/button";
import HeroImg from "@/components/Assets/HeroImg.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 px-4 ml-10 mr-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              <span className="bg-clip-text text-purple-600">AI-Driven</span>
              <br />
              <span>marketing</span>
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-medium">
              From AI insights to effective strategy, we'll help your business stay ahead of the competition. Our advanced AI solutions are trained to understand your business needs and deliver results that drive success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-700 text-white hover:bg-purple-800 transform hover:scale-105 transition duration-300 ease-in-out">
                Start for free
              </Button>
              <Button
                variant="outline"
                className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transform hover:scale-105 transition duration-300 ease-in-out"
              >
                Learn more
              </Button>
            </div>
            {/* Ratings */}
            <div className="mt-8">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-black font-semibold">4.9/5.0</span>
                <span className="ml-2 text-gray-700">(1.2k reviews)</span>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 relative flex justify-center">
            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-4">
              <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6 relative flex justify-center">
                <Image
                  src={HeroImg}
                  alt="AI Marketing Dashboard"
                  className="w-full max-w-md md:max-w-lg h-auto rounded-xl animate-float"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary to-purple-600 rounded-full p-4 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-500 rounded-full p-3 shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
