import Image from "next/image";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection";
import Brandlogo from "@/components/Brandlogo";
import InsightSection from "@/components/InsightSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Brandlogo />
      <InsightSection />
     
    </div>
   
  );
}
