import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../card";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { Users, Target, TrendingUp, Mail, Calendar, MessageSquare } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="pt-24 md:pt-36">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                About PushSend
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet your new growth team.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  We started our journey in 2022
                </h2>
                <p className="text-lg text-muted-foreground">
                  PushSend makes outbound sales actually work—we deliver high-quality leads at scale through thoughtful, personalised cold email. We obsess over the details, combining smart targeting with carefully crafted outreach that fills your calendar with calls from people who actually want what you're selling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Stats</h2>
              <p className="text-lg text-muted-foreground">
                What gets measured gets managed. We track our numbers across all our clients, to provide deep levels of insight and guidance.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-foreground">100k+</div>
                  <div className="text-muted-foreground mt-2">Emails p/m</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-foreground">20+</div>
                  <div className="text-muted-foreground mt-2">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-foreground">5k+</div>
                  <div className="text-muted-foreground mt-2">B2B Leads</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                How do we do it
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Transparency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Complete visibility into our processes, results, and performance metrics.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Ownership</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We take full responsibility for the results we deliver to our clients.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Positivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We maintain a positive, solution-focused approach to every challenge.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Constantly testing and refining our approaches to stay ahead of the curve.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Simplicity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We make complex growth strategies simple and actionable.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <blockquote className="text-xl md:text-2xl font-medium">
                  "PushSend has been a lifesaver for our team. What sets PushSend apart is the team. Rich and Ally were great to work with and gave us the guidance we so dearly needed."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to grow with PushSend?</h2>
              <p className="text-lg text-muted-foreground">
                Join the B2B companies that are already seeing results with our thoughtful outreach approach.
              </p>
              <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 inline-block">
                <Button asChild size="lg" className="rounded-xl px-5 text-base bg-orange-500 text-white hover:bg-orange-600">
                  <Link href="/get-started">
                    <span className="text-nowrap">Get Started</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 