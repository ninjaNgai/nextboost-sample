import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">
              <a href="/">Your Brand</a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="flex items-center gap-2"
              onClick={() =>
                // @ts-ignore
                document
                  .getElementById("email-capture")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
