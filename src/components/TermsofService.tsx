import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TermsOfServiceProps {
  companyName: string;
  companyAddress?: string;
  email?: string;
  lastUpdated?: string;
}

const TermsOfService = ({
  companyName,
  companyAddress = "123 Business Street, Suite 100, City, Country",
  email = "legal@company.com",
  lastUpdated = "December 6, 2024",
}: TermsOfServiceProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700">
              By accessing and using NextBoost, you agree to be bound by these
              Terms of Service and all applicable laws and regulations. If you
              do not agree with any of these terms, you are prohibited from
              using or accessing NextBoost.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Permission is granted to use NextBoost under the following
                conditions:
              </p>
              <div className="space-y-2">
                <h3 className="font-medium">2.1 Free Version</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use in both personal and commercial projects</li>
                  <li>Modify and adapt the code for your needs</li>
                  <li>Distribute modifications under the same license</li>
                  <li>
                    Credit the original project (appreciated but not required)
                  </li>
                </ul>

                <h3 className="font-medium">2.2 Pro Version</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All rights from the free version</li>
                  <li>Access to premium features and support</li>
                  <li>Usage limited to the terms of your subscription</li>
                  <li>No redistribution of pro features</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                NextBoost is provided "as is", without warranty of any kind,
                express or implied. {companyName} makes no warranties, expressed
                or implied, and hereby disclaims and negates all other
                warranties including, without limitation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Limitations</h2>
            <p className="text-gray-700">
              In no event shall {companyName} or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use NextBoost.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Payment Terms</h2>
            <div className="space-y-2 text-gray-700">
              <p>For Pro version subscribers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscription fees are billed in advance</li>
                <li>No refunds for partial subscription periods</li>
                <li>Pricing may change with 30 days notice</li>
                <li>Taxes may apply based on your location</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Modifications</h2>
            <p className="text-gray-700">
              {companyName} reserves the right to revise these terms of service
              at any time without notice. By using NextBoost, you agree to be
              bound by the current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              7. Contact Information
            </h2>
            <p className="text-gray-700">
              Questions about the Terms of Service should be sent to:
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

export default TermsOfService;
