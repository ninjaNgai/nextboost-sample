"use client";

import React from "react";
import EmailCapture from "@/components/sections/EmailCapture";
import { FAQs } from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Frequently Asked Questions Section */}
      <FAQs />

      {/* Email Capture Section */}
      <EmailCapture />

      {/* Footer */}
      <Footer />
    </div>
  );
}
