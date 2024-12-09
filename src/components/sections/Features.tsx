import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Check, BarChart } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  const FeatureCard = ({
    icon,
    title,
    description,
  }: {
    icon: ReactNode;
    title: string;
    description: string;
  }) => (
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
  return (
    <>
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Features</h2>
            <p className="text-gray-600">What our product has to offer</p>
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
              onClick={() =>
                // @ts-expect-error Item not null
                document
                  .getElementById("email-capture")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 mx-auto"
            >
              Get Access
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
