"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Github,
  Rocket,
  Mail,
  BarChart,
  Lock,
  Check,
  CreditCard,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const supabase = createClient(
  // @ts-ignore
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const LandingPage = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const gitHubLink = "https://github.com/yourusername/nextboost";

  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle"
  );

  //@ts-ignore
  const handleWaitlistSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (error) throw error;

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const WaitlistCard = () => {
    const [email, setEmail] = useState("");
    const [submissionState, setSubmissionState] = useState<
      "idle" | "loading" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmissionState("loading");
      setErrorMessage("");

      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        setSubmissionState("success");
        setEmail("");
      } catch (error) {
        setSubmissionState("error");
        setErrorMessage(
          error instanceof Error ? error.message : "Something went wrong"
        );
      }
    };

    return (
      <Card>
        <CardHeader>
          <CardTitle>Join the Pro Waitlist</CardTitle>
          <CardDescription>
            Get early access and exclusive launch pricing when we release pro
            features.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={
                  submissionState === "loading" || submissionState === "success"
                }
              />
            </div>

            {submissionState === "error" && (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}

            {submissionState === "success" && (
              <Alert className="bg-green-50 text-green-700 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-700" />
                <AlertDescription>
                  Successfully joined the waitlist!
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={
                submissionState === "loading" || submissionState === "success"
              }
            >
              {submissionState === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : submissionState === "success" ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Joined!
                </>
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">NextBoost</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={gitHubLink}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Launch smarter with NextBoost
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Skip the setup, start building. A Next.js boilerplate with
              essential features free forever, plus optional pro upgrades coming
              soon.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                onClick={() => (window.location.href = gitHubLink)}
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                Get Free Version
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  // @ts-ignore
                  document
                    .getElementById("pro-features")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Pro Features
              </Button>
            </div>
          </div>

          {/* Demo Video */}
          <div className="mt-16 flex justify-center">
            <Card className="w-full max-w-4xl">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Demo Video Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Version Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Free Version Features</h2>
            <p className="text-gray-600">
              Get started with our open-source boilerplate
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={<Mail />}
              title="Email Integration"
              description="Pre-built email templates and integration with Resend for user engagement."
            />
            <FeatureCard
              icon={<BarChart />}
              title="Database Setup"
              description="Pre-configured Supabase database integration with example schemas."
            />
            <FeatureCard
              icon={<Check />}
              title="Modern UI Kit"
              description="Fully integrated shadcn components styled with Tailwind CSS."
            />
          </div>
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => (window.location.href = gitHubLink)}
              className="flex items-center gap-2 mx-auto"
            >
              <Github className="h-5 w-5" />
              Get Access Now
            </Button>
          </div>
        </div>
      </section>

      {/* Pro Features */}
      <section id="pro-features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Coming Soon in Pro Version
            </h2>
            <p className="text-gray-600">
              Join the waitlist for exclusive access to premium features
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={<CreditCard />}
              title="Payment Integration"
              description="Pre-built Stripe checkout flows for one-time purchases and subscription billing."
            />
            <FeatureCard
              icon={<Lock />}
              title="Authentication"
              description="Ready-to-use authentication with Supabase, including email and social logins."
            />
            <FeatureCard
              icon={<BarChart />}
              title="Analytics Dashboard"
              description="Built-in analytics to track user behavior and engagement metrics."
            />
          </div>
          <div className="max-w-xl mx-auto">
            <WaitlistCard />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 NextBoost. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
              <a
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// @ts-ignore
const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardContent className="p-6">
      <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default LandingPage;
