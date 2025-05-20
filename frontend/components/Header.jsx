import { Button } from "@/components/ui/button"; 

export default function Header() {
  return (
    <header className="w-full py-4 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <span className="text-black font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-lg text-black">MINT AI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-xl font-medium hover:text-primary transition-colors text-black">Home</a>
            <a href="#" className="text-xl font-medium hover:text-primary transition-colors text-black">About us</a>
            <a href="#" className="text-xl font-medium hover:text-primary transition-colors text-black">Products</a>
            <a href="#" className="text-xl font-medium hover:text-primary transition-colors text-black">Pricing</a>
            <a href="#" className="text-xl font-medium hover:text-primary transition-colors text-black">Resources</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:inline-flex text-black">Sign in</Button>
            <Button className="bg-primary hover:bg-primary/90 text-black">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
