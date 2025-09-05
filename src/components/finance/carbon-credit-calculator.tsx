"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  Target,
  Calculator,
  Banknote,
  CreditCard,
  Building
} from "lucide-react"

export function FinancialAnalytics() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("monthly")

  const marketData = {
    currentPrice: 1250,
    priceChange: +85,
    priceChangePercent: +7.3,
    volume24h: "₹2.4Cr",
    marketCap: "₹156Cr",
    totalCredits: 124780
  }

  const pricingTrends = [
    { month: "Mar 2025", price: 1050, volume: "₹1.8Cr", trend: "up" },
    { month: "Apr 2025", price: 1120, volume: "₹2.1Cr", trend: "up" },
    { month: "May 2025", price: 1085, volume: "₹1.9Cr", trend: "down" },
    { month: "Jun 2025", price: 1165, volume: "₹2.3Cr", trend: "up" },
    { month: "Jul 2025", price: 1200, volume: "₹2.2Cr", trend: "up" },
    { month: "Aug 2025", price: 1250, volume: "₹2.4Cr", trend: "up" }
  ]

  const farmerRevenueProjections = [
    {
      farmId: "NABARD-001247",
      farmer: "Rajesh Kumar",
      currentCredits: 2.35,
      projectedCredits: 4.8,
      currentRevenue: "₹2,93,750",
      projectedRevenue: "₹6,00,000",
      growthRate: "+104%",
      riskLevel: "Low"
    },
    {
      farmId: "NABARD-001248",
      farmer: "Priya Sharma", 
      currentCredits: 1.87,
      projectedCredits: 3.2,
      currentRevenue: "₹2,33,750",
      projectedRevenue: "₹4,00,000",
      growthRate: "+71%",
      riskLevel: "Medium"
    },
    {
      farmId: "NABARD-001249",
      farmer: "Amit Patel",
      currentCredits: 3.12,
      projectedCredits: 5.6,
      currentRevenue: "₹3,90,000",
      projectedRevenue: "₹7,00,000",
      growthRate: "+79%", 
      riskLevel: "Low"
    }
  ]

  const nabardLoanImpact = [
    {
      category: "Sustainable Agriculture Loans",
      totalAmount: "₹145Cr",
      carbonCreditsGenerated: "18,450 tCO2e",
      creditValue: "₹2.3Cr",
      loanRecoveryImprovement: "+23%",
      farmsImpacted: 1247
    },
    {
      category: "Climate Smart Agriculture",
      totalAmount: "₹89Cr", 
      carbonCreditsGenerated: "12,780 tCO2e",
      creditValue: "₹1.6Cr",
      loanRecoveryImprovement: "+18%",
      farmsImpacted: 892
    },
    {
      category: "Organic Farming Promotion",
      totalAmount: "₹67Cr",
      carbonCreditsGenerated: "9,340 tCO2e", 
      creditValue: "₹1.2Cr",
      loanRecoveryImprovement: "+15%",
      farmsImpacted: 634
    }
  ]

  const marketAnalysis = {
    demandSupplyRatio: 1.34,
    marketGrowthRate: "+15.7%",
    averageTransactionSize: "₹1,25,000",
    topBuyers: [
      { name: "Climate Corp Ltd", share: "28%", volume: "₹67Cr" },
      { name: "Green Energy Inc", share: "22%", volume: "₹52Cr" },
      { name: "Carbon Offset Partners", share: "18%", volume: "₹43Cr" },
      { name: "Sustainable Industries", share: "15%", volume: "₹36Cr" }
    ],
    priceDrivers: [
      { factor: "Government Policy", impact: "+12%", description: "New carbon tax regulations" },
      { factor: "International Demand", impact: "+8%", description: "Increased global commitments" },
      { factor: "Technology Adoption", impact: "+5%", description: "Improved verification methods" },
      { factor: "Market Liquidity", impact: "+3%", description: "More active participants" }
    ]
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Financial Analytics Dashboard
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Comprehensive carbon credit market analysis, revenue projections, and NABARD loan impact assessment for informed financial decisions
        </p>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Price</p>
                <p className="text-2xl font-bold">₹{marketData.currentPrice}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">+{marketData.priceChangePercent}%</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">24h Volume</p>
                <p className="text-2xl font-bold">{marketData.volume24h}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Market Cap</p>
                <p className="text-2xl font-bold">{marketData.marketCap}</p>
              </div>
              <PieChart className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Credits</p>
                <p className="text-2xl font-bold">{marketData.totalCredits.toLocaleString()}</p>
              </div>
              <Target className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Dashboard */}
      <Tabs value={selectedTimeframe} onValueChange={setSelectedTimeframe} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="monthly">Market Trends</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Projections</TabsTrigger>
          <TabsTrigger value="nabard">NABARD Impact</TabsTrigger>
          <TabsTrigger value="analysis">Market Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Carbon Credit Pricing Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pricingTrends.map((trend, index) => (
                  <div key={trend.month} className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{trend.month}</h4>
                      <div className="flex items-center gap-2">
                        {trend.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                        <Badge 
                          variant="outline" 
                          className={trend.trend === "up" ? "text-green-600 border-green-600" : "text-red-600 border-red-600"}
                        >
                          {trend.trend === "up" ? "Bullish" : "Bearish"}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Average Price</p>
                        <p className="text-lg font-bold">₹{trend.price}/tCO2e</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Trading Volume</p>
                        <p className="text-lg font-semibold">{trend.volume}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Price Change</p>
                        <p className={`text-lg font-semibold ${trend.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {index > 0 ? 
                            `${trend.trend === "up" ? "+" : ""}${((trend.price - pricingTrends[index-1].price) / pricingTrends[index-1].price * 100).toFixed(1)}%` 
                            : "Base"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Farmer Revenue Projections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {farmerRevenueProjections.map((projection) => (
                  <div key={projection.farmId} className="bg-muted/50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">{projection.farmer}</h4>
                        <p className="text-sm text-muted-foreground">{projection.farmId}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="outline"
                          className={
                            projection.riskLevel === "Low" ? "text-green-600 border-green-600" :
                            projection.riskLevel === "Medium" ? "text-yellow-600 border-yellow-600" :
                            "text-red-600 border-red-600"
                          }
                        >
                          {projection.riskLevel} Risk
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="font-medium text-green-600">Current Period</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Credits Generated:</span>
                            <span className="font-semibold">{projection.currentCredits} tCO2e</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Revenue Earned:</span>
                            <span className="font-semibold">{projection.currentRevenue}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h5 className="font-medium text-blue-600">Projected (Next 12 Months)</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Projected Credits:</span>
                            <span className="font-semibold">{projection.projectedCredits} tCO2e</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Projected Revenue:</span>
                            <span className="font-semibold">{projection.projectedRevenue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Growth Rate:</span>
                            <span className="font-semibold text-green-600">{projection.growthRate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Revenue Progress</span>
                        <span>{projection.growthRate}</span>
                      </div>
                      <Progress value={parseInt(projection.growthRate.replace("+", "").replace("%", ""))} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nabard" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                NABARD Loan Impact Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {nabardLoanImpact.map((impact) => (
                  <div key={impact.category} className="bg-muted/50 p-6 rounded-lg border-l-4 border-l-green-500">
                    <h4 className="text-lg font-semibold mb-4">{impact.category}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <h5 className="font-medium text-blue-600">Loan Details</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Total Amount:</span>
                            <span className="font-semibold">{impact.totalAmount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Farms Impacted:</span>
                            <span className="font-semibold">{impact.farmsImpacted.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Recovery Improvement:</span>
                            <span className="font-semibold text-green-600">{impact.loanRecoveryImprovement}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h5 className="font-medium text-green-600">Carbon Impact</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Credits Generated:</span>
                            <span className="font-semibold">{impact.carbonCreditsGenerated}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Market Value:</span>
                            <span className="font-semibold">{impact.creditValue}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h5 className="font-medium text-purple-600">Financial Benefits</h5>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">Additional Revenue Stream</p>
                          <p className="text-xl font-bold text-green-600">{impact.creditValue}</p>
                          <p className="text-xs text-muted-foreground mt-1">From carbon credits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Market Buyers Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketAnalysis.topBuyers.map((buyer) => (
                    <div key={buyer.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-semibold">{buyer.name}</p>
                        <p className="text-sm text-muted-foreground">Volume: {buyer.volume}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{buyer.share}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Price Drivers Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketAnalysis.priceDrivers.map((driver) => (
                    <div key={driver.factor} className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold">{driver.factor}</h5>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {driver.impact}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{driver.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass">
            <CardHeader>
              <CardTitle>Market Metrics Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Demand/Supply Ratio</p>
                  <p className="text-2xl font-bold text-blue-600">{marketAnalysis.demandSupplyRatio}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Market Growth Rate</p>
                  <p className="text-2xl font-bold text-green-600">{marketAnalysis.marketGrowthRate}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Avg Transaction Size</p>
                  <p className="text-2xl font-bold text-purple-600">{marketAnalysis.averageTransactionSize}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Market Maturity</p>
                  <p className="text-2xl font-bold text-orange-600">78%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
