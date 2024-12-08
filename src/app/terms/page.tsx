"use client";

import TermsOfService from "@/components/TermsofService";
import Footer from "@/components/Footer";
export default function TermsPage() {
  return (
    <>
      <TermsOfService
        companyName="Your company"
        companyAddress=""
        email="hello@yourapp.com"
        lastUpdated="December 6, 2024"
      />
      <Footer />
    </>
  );
}
