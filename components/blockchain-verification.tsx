"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Shield,
  Lock,
  FileCheck,
  DollarSign,
  TrendingUp,
  Smartphone,
  Share2,
  Award,
  Clock,
  CheckCircle2
} from "lucide-react"

export function BlockchainVerification() {
  const [activeTab, setActiveTab] = useState("credits")

  const carbonCredits = [
    {
      id: "CC-2025-001247",
      farmId: "NABARD-FARM-001247",
      farmer: "Rajesh Kumar",
      location: "Maharashtra, Pune",
      amount: 2.35,
      status: "Verified",
      verificationDate: "2025-08-15",
      blockchainHash: "0x7d4a8b9c2f1e3a5d6c8b9a7e4f2d1c3b5a8e9d7f",
      price: 1250,
      buyer: "Climate Corp Ltd"
    },
    {
      id: "CC-2025-001248", 
      farmId: "NABARD-FARM-001248",
      farmer: "Priya Sharma",
      location: "Haryana, Karnal",
      amount: 1.87,
      status: "Pending Verification",
      verificationDate: "2025-08-20",
      blockchainHash: "",
      price: 1200,
      buyer: "Pending"
    },
    {
      id: "CC-2025-001249",
      farmId: "NABARD-FARM-001249", 
      farmer: "Amit Patel",
      location: "Gujarat, Rajkot",
      amount: 3.12,
      status: "Sold",
      verificationDate: "2025-08-10",
      blockchainHash: "0x9f6e8d5c4b3a2e1f7d9c8b6a5e4f3d2c1b9a8f7e",
      price: 1300,
      buyer: "Green Energy Inc"
    }
  ]

  const digitalCertificates = [
    {
      id: "CERT-2025-001",
      type: "Organic Certification",
      farmId: "NABARD-FARM-001247",
      farmer: "Rajesh Kumar",
      issueDate: "2025-07-01",
      expiryDate: "2026-07-01",
      status: "Active",
      verificationLevel: "Level 3",
      blockchainVerified: true
    },
    {
      id: "CERT-2025-002",
      type: "Carbon Neutral Farm",
      farmId: "NABARD-FARM-001249",
      farmer: "Amit Patel", 
      issueDate: "2025-08-01",
      expiryDate: "2026-08-01",
      status: "Active",
      verificationLevel: "Level 2",
      blockchainVerified: true
    },
    {
      id: "CERT-2025-003",
      type: "Sustainable Agriculture",
      farmId: "NABARD-FARM-001248",
      farmer: "Priya Sharma",
      issueDate: "2025-06-15",
      expiryDate: "2026-06-15", 
      status: "Under Review",
      verificationLevel: "Level 1",
      blockchainVerified: false
    }
  ]

  const auditTrail = [
    {
      timestamp: "2025-08-20 14:30:25",
      action: "Credit Verification Initiated",
      actor: "NABARD Field Officer",
      details: "GPS coordinates verified, soil samples collected",
      txHash: "0xa1b2c3d4e5f6789012345abcdef67890"
    },
    {
      timestamp: "2025-08-20 15:45:10", 
      action: "Satellite Data Validation",
      actor: "AI Verification System",
      details: "NDVI analysis confirms carbon sequestration claims",
      txHash: "0xb2c3d4e5f6789012345abcdef67890a1"
    },
    {
      timestamp: "2025-08-20 16:20:55",
      action: "Smart Contract Execution",
      actor: "Blockchain Network",
      details: "Carbon credit tokens minted and assigned to farmer",
      txHash: "0xc3d4e5f6789012345abcdef67890a1b2"
    },
    {
      timestamp: "2025-08-20 17:10:30",
      action: "Credit Listed for Sale",
      actor: "Carbon Marketplace",
      details: "Credits available on verified carbon exchange",
      txHash: "0xd4e5f6789012345abcdef67890a1b2c3"
    }
  ]

  const smartContracts = [
    {
      name: "Carbon Credit Issuance",
      address: "0x742d35Cc6528Dd5B4B6B8E9E2c4a8F9c7B5A3E1D",
      status: "Active",
      transactions: 1247,
      gasUsed: "2.5M",
      lastUpdate: "2 hours ago"
    },
    {
      name: "Farmer Registration",
      address: "0x8F9c7B5A3E1D742d35Cc6528Dd5B4B6B8E9E2c4a", 
      status: "Active",
      transactions: 892,
      gasUsed: "1.8M",
      lastUpdate: "1 hour ago"
    },
    {
      name: "Verification Protocol",
      address: "0x5B4B6B8E9E2c4a8F9c7B5A3E1D742d35Cc6528Dd",
      status: "Active", 
      transactions: 2156,
      gasUsed: "4.2M",
      lastUpdate: "30 minutes ago"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Blockchain Verification System
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Immutable carbon credit verification with smart contracts, digital certificates, and transparent audit trails for complete traceability
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass border-purple-200 hover:border-purple-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Credits Verified</p>
                <p className="text-2xl font-bold">2,847</p>
              </div>
              <Shield className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-purple-200 hover:border-purple-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Blockchain Transactions</p>
                <p className="text-2xl font-bold">15,293</p>
              </div>
              <Lock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-purple-200 hover:border-purple-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Digital Certificates</p>
                <p className="text-2xl font-bold">1,456</p>
              </div>
              <Award className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-purple-200 hover:border-purple-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Market Value</p>
                <p className="text-2xl font-bold">₹3.2Cr</p>
              </div>
              <DollarSign className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Blockchain Dashboard */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="credits">Carbon Credits</TabsTrigger>
          <TabsTrigger value="certificates">Digital Certificates</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          <TabsTrigger value="contracts">Smart Contracts</TabsTrigger>
        </TabsList>

        <TabsContent value="credits" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                Carbon Credit Verification & Trading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {carbonCredits.map((credit) => (
                  <div key={credit.id} className="bg-muted/50 p-6 rounded-lg border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Credit ID</p>
                        <p className="font-mono text-sm font-semibold">{credit.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Farmer</p>
                        <p className="font-medium">{credit.farmer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="font-semibold">{credit.amount} tCO2e</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge 
                          variant={
                            credit.status === "Verified" ? "default" :
                            credit.status === "Sold" ? "secondary" :
                            "outline"
                          }
                          className={
                            credit.status === "Verified" ? "text-green-600 border-green-600" :
                            credit.status === "Sold" ? "text-blue-600 border-blue-600" :
                            "text-orange-600 border-orange-600"
                          }
                        >
                          {credit.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-sm">{credit.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="text-sm font-semibold">₹{credit.price}/tCO2e</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Buyer</p>
                        <p className="text-sm">{credit.buyer}</p>
                      </div>
                    </div>

                    {credit.blockchainHash && (
                      <div className="bg-card p-3 rounded border">
                        <p className="text-sm text-muted-foreground mb-1">Blockchain Hash</p>
                        <p className="font-mono text-xs break-all">{credit.blockchainHash}</p>
                      </div>
                    )}
                    
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Share2 className="h-4 w-4 mr-2" />
                        View on Explorer
                      </Button>
                      {credit.status === "Verified" && (
                        <Button size="sm">
                          <DollarSign className="h-4 w-4 mr-2" />
                          List for Sale
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Digital Certificates & Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalCertificates.map((cert) => (
                  <div key={cert.id} className="bg-gradient-to-br from-card to-card/50 p-6 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <Award className="h-8 w-8 text-yellow-500" />
                      {cert.blockchainVerified && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <h4 className="font-semibold text-lg mb-2">{cert.type}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{cert.farmer}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Certificate ID:</span>
                        <span className="font-mono">{cert.id}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Verification Level:</span>
                        <Badge variant="secondary">{cert.verificationLevel}</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Valid Until:</span>
                        <span>{cert.expiryDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Certificate
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Transparent Audit Trail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditTrail.map((entry, index) => (
                  <div key={`${entry.timestamp}-${index}`} className="bg-muted/50 p-4 rounded-lg border-l-4 border-l-blue-500">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{entry.action}</h4>
                        <p className="text-sm text-muted-foreground">{entry.actor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-mono">{entry.timestamp}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-3">{entry.details}</p>
                    
                    <div className="bg-card p-2 rounded">
                      <p className="text-xs text-muted-foreground">Transaction Hash</p>
                      <p className="font-mono text-xs break-all">{entry.txHash}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contracts" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Smart Contract Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {smartContracts.map((contract) => (
                  <div key={contract.address} className="bg-muted/50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">{contract.name}</h4>
                      <Badge 
                        variant="outline" 
                        className={
                          contract.status === "Active" ? 
                          "text-green-600 border-green-600" : 
                          "text-red-600 border-red-600"
                        }
                      >
                        {contract.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Contract Address</p>
                        <p className="font-mono text-xs break-all">{contract.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Transactions</p>
                        <p className="font-semibold">{contract.transactions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Gas Used</p>
                        <p className="font-semibold">{contract.gasUsed}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Last Update</p>
                        <p className="text-sm">{contract.lastUpdate}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Smartphone className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Analytics
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Network Status */}
      <Card className="glass border-green-200">
        <CardHeader>
          <CardTitle>Blockchain Network Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>Network Status</span>
              <Badge variant="outline" className="text-green-600 border-green-600">Healthy</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span>Block Height</span>
              <span className="font-mono text-sm">18,547,392</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span>Gas Price</span>
              <span className="font-semibold">23 Gwei</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span>TPS</span>
              <span className="font-semibold">15.3</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
