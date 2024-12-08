import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <section className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Your Headline Here
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Your compelling product description goes here. Make it count!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
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
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  // @ts-ignore
                  document
                    .getElementById("features")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
