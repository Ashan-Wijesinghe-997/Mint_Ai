import { Button } from "@/components/ui/button"; 

export default function Header() {
  return (
    <header className="w-full py-4 px-8 md:px-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-lg text-black">MINT AI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-xl font-medium hover:text-purple-600 transition-colors text-black">Home</a>
            <a href="#" className="text-xl font-medium hover:text-purple-600 transition-colors text-black">About us</a>
            <a href="#" className="text-xl font-medium hover:text-purple-600 transition-colors text-black">Products</a>
            <a href="#" className="text-xl font-medium hover:text-purple-600 transition-colors text-black">Pricing</a>
            <a href="#" className="text-xl font-medium hover:text-purple-600 transition-colors text-black">Resources</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white 
                         hover:from-pink-500 hover:to-purple-600
                         transform hover:scale-105 
                         transition duration-300 ease-in-out"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
