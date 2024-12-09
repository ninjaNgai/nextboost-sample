import React, { useState } from "react";
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
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function EmailCapture() {
  const EmailCaptureCard = () => {
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
        const response = await fetch("/api/welcome-email", {
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
          <CardTitle>Get Updates</CardTitle>
          <CardDescription>
            Sign up to receive our newsletter and updates.
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
                <AlertDescription>Thanks for subscribing!</AlertDescription>
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
                  Subscribing...
                </>
              ) : submissionState === "success" ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Subscribed!
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <section id="email-capture" className="bg-gray-50 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Want to be the first to know?
          </h2>
          <p className="text-gray-600">
            Join our community of like-minded people
          </p>
        </div>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailCaptureCard />
        </div>
      </section>
    </>
  );
}
