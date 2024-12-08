"use client";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <PrivacyPolicy
        companyName="Your company"
        companyAddress=""
        email="hello@yourapp.com"
        lastUpdated="December 6, 2024"
      />
      <Footer />
    </>
  );
}
