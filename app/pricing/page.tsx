"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Leaf,
  Check,
  X,
  ArrowRight,
  Sparkles,
  Users,
  Building,
  Crown,
  Calculator,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [farmSize, setFarmSize] = useState(10)
  const [currentCredits, setCurrentCredits] = useState(0)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual smallholder farmers",
      icon: Leaf,
      monthlyPrice: 299,
      annualPrice: 2990,
      maxFarms: 1,
      maxArea: "Up to 5 acres",
      features: [
        "Basic satellite monitoring",
        "Mobile app access",
        "Carbon credit calculation",
        "Monthly reports",
        "Voice support (Hindi/English)",
        "Offline functionality",
        "Basic weather alerts",
      ],
      limitations: [
        "Advanced AI insights",
        "Soil health credits",
        "Biodiversity credits",
        "API access",
        "Custom integrations",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      description: "Ideal for FPOs and medium-scale farmers",
      icon: Users,
      monthlyPrice: 999,
      annualPrice: 9990,
      maxFarms: 10,
      maxArea: "Up to 50 acres",
      features: [
        "Advanced satellite monitoring",
        "Full mobile app suite",
        "Multi-credit MRV (Carbon + Soil + Biodiversity)",
        "Weekly detailed reports",
        "Voice support (12 languages)",
        "Offline functionality",
        "Advanced weather & pest alerts",
        "Yield prediction AI",
        "Market price integration",
        "Basic API access",
      ],
      limitations: ["Custom integrations", "White-label solutions", "Dedicated support"],
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Enterprise",
      description: "For large FPOs and agricultural organizations",
      icon: Building,
      monthlyPrice: 4999,
      annualPrice: 49990,
      maxFarms: "Unlimited",
      maxArea: "Unlimited",
      features: [
        "Complete satellite monitoring suite",
        "Full platform access",
        "Multi-credit MRV with blockchain",
        "Real-time reports & dashboards",
        "Voice support (all Indian languages)",
        "Offline functionality",
        "Advanced AI insights & predictions",
        "Market integration",
        "Full API access",
        "Custom integrations",
        "White-label options",
        "Priority support",
        "Training & onboarding",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
    {
      name: "NABARD Partnership",
      description: "Custom solutions for NABARD and government agencies",
      icon: Crown,
      monthlyPrice: null,
      annualPrice: null,
      maxFarms: "Unlimited",
      maxArea: "State/National level",
      features: [
        "Complete platform suite",
        "Government-grade security",
        "Multi-credit MRV with compliance",
        "Real-time monitoring dashboards",
        "Multi-language support",
        "Offline-first architecture",
        "Advanced AI & predictive analytics",
        "Full market integration",
        "Complete API suite",
        "Custom integrations",
        "White-label solutions",
        "Dedicated support team",
        "Training & capacity building",
        "Compliance reporting",
        "Data sovereignty options",
      ],
      limitations: [],
      popular: false,
      cta: "Contact NABARD Team",
    },
  ]

  const calculateROI = () => {
    const creditValue = 2500 // Average value per credit in INR
    const creditsPerAcre = 2.5 // Conservative estimate
    const totalCredits = farmSize * creditsPerAcre
    const annualRevenue = totalCredits * creditValue
    const planCost = isAnnual ? 9990 : 999 * 12 // Professional plan
    const netBenefit = annualRevenue - planCost
    const roi = ((netBenefit / planCost) * 100).toFixed(0)

    return {
      totalCredits: totalCredits.toFixed(1),
      annualRevenue: annualRevenue.toLocaleString("en-IN"),
      planCost: planCost.toLocaleString("en-IN"),
      netBenefit: netBenefit.toLocaleString("en-IN"),
      roi,
    }
  }

  const roiData = calculateROI()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Leaf className="h-8 w-8 text-primary animate-float" />
              <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/technology"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Technology
            </Link>
            <Link
              href="/demo"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Demo
            </Link>
            <Link href="/pricing" className="text-primary font-medium">
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <Badge className="mb-8 glass border-primary/30 text-primary px-8 py-3 text-base font-medium">
            <Calculator className="mr-2 h-5 w-5" />
            Transparent Pricing
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight tracking-tight">
            Affordable <span className="gradient-text">AI-Powered MRV</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 leading-relaxed max-w-4xl mx-auto">
            Choose the perfect plan for your farming operation. Start earning from carbon, soil, and biodiversity
            credits today.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${!isAnnual ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="scale-125" />
            <span className={`text-lg ${isAnnual ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Annual
            </span>
            {isAnnual && <Badge className="bg-green-100 text-green-800 ml-2">Save 17%</Badge>}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
              const period = isAnnual ? "year" : "month"

              return (
                <Card
                  key={plan.name}
                  className={`glass relative hover:scale-105 transition-all duration-500 ${
                    plan.popular ? "border-primary/60 shadow-2xl ring-2 ring-primary/20" : "border-primary/30"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="mt-6">
                      {price ? (
                        <>
                          <div className="text-4xl font-bold text-foreground">₹{price.toLocaleString("en-IN")}</div>
                          <div className="text-muted-foreground">per {period}</div>
                          {isAnnual && plan.monthlyPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              ₹{(plan.monthlyPrice * 12).toLocaleString("en-IN")}/year
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-2xl font-bold text-foreground">Custom Pricing</div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Coverage:</p>
                      <p className="text-sm text-muted-foreground">{plan.maxArea}</p>
                      <p className="text-sm text-muted-foreground">Up to {plan.maxFarms} farms</p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-3">Included Features:</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div>
                        <p className="font-semibold text-foreground mb-3">Not Included:</p>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                          : "bg-primary hover:bg-primary/90"
                      } transition-all duration-300`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">ROI Calculator</h2>
            <p className="text-xl text-muted-foreground text-balance">See how much you can earn with TerraPulse AI</p>
          </div>

          <Card className="glass border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="mr-3 h-6 w-6 text-primary" />
                Calculate Your Returns
              </CardTitle>
              <CardDescription>
                Estimate your potential earnings from carbon, soil, and biodiversity credits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold mb-2">Farm Size (acres)</label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={farmSize}
                    onChange={(e) => setFarmSize(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>1 acre</span>
                    <span className="font-semibold">{farmSize} acres</span>
                    <span>100 acres</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Estimated Credits/Year:</span>
                    <span className="font-semibold">{roiData.totalCredits} tCO₂e</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Revenue:</span>
                    <span className="font-semibold text-green-600">₹{roiData.annualRevenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Cost:</span>
                    <span className="font-semibold">₹{roiData.planCost}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Net Benefit:</span>
                    <span className="font-bold text-green-600">₹{roiData.netBenefit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">ROI:</span>
                    <span className="font-bold text-primary">{roiData.roi}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2 text-foreground">Why TerraPulse AI Pays for Itself</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multiple revenue streams: Carbon + Soil + Biodiversity credits</li>
                  <li>• Automated MRV reduces verification costs by 80%</li>
                  <li>• AI-powered insights increase yield by 15-25%</li>
                  <li>• Direct market access eliminates middleman fees</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Feature Comparison</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Compare plans to find the perfect fit for your needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Features</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                  <th className="text-center p-4 font-semibold">NABARD</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Satellite Monitoring", "Basic", "Advanced", "Complete", "Complete"],
                  ["Carbon Credits", "✓", "✓", "✓", "✓"],
                  ["Soil Health Credits", "✗", "✓", "✓", "✓"],
                  ["Biodiversity Credits", "✗", "✓", "✓", "✓"],
                  ["Mobile App", "✓", "✓", "✓", "✓"],
                  ["Voice Support", "2 languages", "12 languages", "All Indian", "All Indian"],
                  ["API Access", "✗", "Basic", "Full", "Full"],
                  ["Custom Integration", "✗", "✗", "✓", "✓"],
                  ["White-label", "✗", "✗", "✓", "✓"],
                  ["Support", "Email", "Email + Chat", "Priority", "Dedicated"],
                ].map(([feature, starter, professional, enterprise, nabard], index) => (
                  <tr key={index} className="border-b hover:bg-muted/20">
                    <td className="p-4 font-medium">{feature}</td>
                    <td className="p-4 text-center">{starter}</td>
                    <td className="p-4 text-center">{professional}</td>
                    <td className="p-4 text-center">{enterprise}</td>
                    <td className="p-4 text-center">{nabard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I earn money with TerraPulse AI?",
                answer:
                  "You earn through multiple credit streams: carbon sequestration, soil health improvement, and biodiversity enhancement. Our AI automatically calculates and verifies these credits, which you can sell in carbon markets or through NABARD schemes.",
              },
              {
                question: "What's included in the free trial?",
                answer:
                  "The 30-day free trial includes full access to the Starter plan features: basic satellite monitoring, mobile app, carbon credit calculation, and monthly reports for up to 5 acres.",
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer:
                  "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. We'll prorate any charges accordingly.",
              },
              {
                question: "How accurate are the credit calculations?",
                answer:
                  "Our AI models have 95%+ accuracy, validated against ground truth data. All credits are blockchain-verified and meet international MRV standards including Verra and Gold Standard protocols.",
              },
              {
                question: "Do you offer volume discounts?",
                answer:
                  "Yes, we offer significant discounts for FPOs, cooperatives, and large farming operations. Contact our sales team for custom pricing based on your specific needs and scale.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major payment methods including UPI, net banking, credit/debit cards, and for enterprise customers, we also accept bank transfers and can work with NABARD financing schemes.",
              },
            ].map((faq, index) => (
              <Card key={index} className="glass border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Need a Custom Solution?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our team can create a tailored plan for your specific requirements, whether you're a large FPO,
                government agency, or enterprise partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Call
                </Button>
                <Button
                  variant="outline"
                  className="glass border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Sales Team
                </Button>
                <Button
                  variant="outline"
                  className="glass border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Start Earning Today</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of farmers already earning from regenerative agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-xl text-lg px-8 py-6"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300 text-lg px-8 py-6"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">TerraPulse AI</span>
              </Link>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Intelligent MRV for regenerative agriculture
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Platform</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Digital Twin
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Mobile App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Credit System
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Pricing</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/pricing" className="hover:text-foreground transition-colors text-lg">
                    Plans & Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Free Trial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors text-lg">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Media
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p className="text-lg">&copy; 2025 TerraPulse AI. Empowering sustainable agriculture through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
