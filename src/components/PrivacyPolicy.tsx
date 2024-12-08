import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PrivacyPolicyProps {
  companyName: string;
  companyAddress?: string;
  email?: string;
  lastUpdated?: string;
}

const PrivacyPolicy = ({
  companyName,
  companyAddress = "",
  email = "cngai@justplatypost.com",
  lastUpdated = "December 6, 2024",
}: PrivacyPolicyProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-700">
              {companyName} ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              NextBoost service and related products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <h3 className="font-medium">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Email address when joining our waitlist or newsletter</li>
                <li>Account information when using our products</li>
                <li>Payment information when purchasing pro features</li>
                <li>Communication data when contacting our support</li>
              </ul>

              <h3 className="font-medium">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information to improve our
                service
              </li>
              <li>To detect, prevent and address technical issues</li>
              <li>
                To communicate with you about products, services, and events
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to
              maintain the security of your personal information, including
              encryption of data in transit and at rest.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Correct any inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request transfer of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="mt-2 space-y-1 text-gray-700">
              <p>{companyName}</p>
              <p>{companyAddress}</p>
              <p>Email: {email}</p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
