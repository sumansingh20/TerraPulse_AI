// lib/database.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Farm Management
export class FarmService {
  async getFarmById(farmId: string) {
    return await prisma.farm.findUnique({
      where: { id: farmId },
      include: {
        sensors: true,
        crops: true,
        carbonCredits: true,
        weather: {
          orderBy: { timestamp: 'desc' },
          take: 1
        }
      }
    })
  }

  async getFarmerDashboard(farmerId: string) {
    const farms = await prisma.farm.findMany({
      where: { farmerId },
      include: {
        _count: {
          select: {
            sensors: true,
            carbonCredits: true
          }
        }
      }
    })

    const totalCarbonCredits = await prisma.carbonCredit.aggregate({
      where: {
        farm: {
          farmerId
        },
        status: 'VERIFIED'
      },
      _sum: {
        amount: true,
        value: true
      }
    })

    return {
      farms,
      totalCredits: totalCarbonCredits._sum.amount || 0,
      totalValue: totalCarbonCredits._sum.value || 0
    }
  }
}

// Sensor Data Management
export class SensorService {
  async recordSensorData(data: {
    sensorId: string
    temperature: number
    humidity: number
    soilMoisture: number
    pH: number
    nitrogen: number
    phosphorus: number
    potassium: number
  }) {
    return await prisma.sensorReading.create({
      data: {
        ...data,
        timestamp: new Date()
      }
    })
  }

  async getSensorTrends(sensorId: string, days: number = 30) {
    const fromDate = new Date()
    fromDate.setDate(fromDate.getDate() - days)

    return await prisma.sensorReading.findMany({
      where: {
        sensorId,
        timestamp: {
          gte: fromDate
        }
      },
      orderBy: {
        timestamp: 'asc'
      }
    })
  }

  async getAggregatedSensorData(farmId: string) {
    const latest = await prisma.sensorReading.findMany({
      where: {
        sensor: {
          farmId
        }
      },
      orderBy: {
        timestamp: 'desc'
      },
      take: 10,
      include: {
        sensor: true
      }
    })

    return latest
  }
}

// Carbon Credit Management
export class CarbonCreditService {
  async generateCarbonCredit(data: {
    farmId: string
    amount: number
    verificationData: any
    methodology: string
  }) {
    return await prisma.carbonCredit.create({
      data: {
        ...data,
        status: 'PENDING_VERIFICATION',
        generatedAt: new Date(),
        blockchainHash: '', // Will be updated after blockchain transaction
      }
    })
  }

  async verifyCarbonCredit(creditId: string, blockchainHash: string) {
    return await prisma.carbonCredit.update({
      where: { id: creditId },
      data: {
        status: 'VERIFIED',
        blockchainHash,
        verifiedAt: new Date()
      }
    })
  }

  async getCarbonCreditMarketData() {
    const totalCredits = await prisma.carbonCredit.aggregate({
      _sum: { amount: true },
      _count: true
    })

    const recentTransactions = await prisma.carbonCreditTransaction.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        carbonCredit: {
          include: {
            farm: true
          }
        }
      }
    })

    const avgPrice = await prisma.carbonCreditTransaction.aggregate({
      _avg: { pricePerCredit: true },
      where: {
        createdAt: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
        }
      }
    })

    return {
      totalCredits: totalCredits._sum.amount || 0,
      totalTransactions: totalCredits._count,
      averagePrice: avgPrice._avg.pricePerCredit || 0,
      recentTransactions
    }
  }
}

// Weather Data Management
export class WeatherDataService {
  async recordWeatherData(farmId: string, data: {
    temperature: number
    humidity: number
    rainfall: number
    windSpeed: number
    pressure: number
  }) {
    return await prisma.weatherData.create({
      data: {
        farmId,
        ...data,
        timestamp: new Date()
      }
    })
  }

  async getWeatherHistory(farmId: string, days: number = 7) {
    const fromDate = new Date()
    fromDate.setDate(fromDate.getDate() - days)

    return await prisma.weatherData.findMany({
      where: {
        farmId,
        timestamp: {
          gte: fromDate
        }
      },
      orderBy: {
        timestamp: 'asc'
      }
    })
  }
}
