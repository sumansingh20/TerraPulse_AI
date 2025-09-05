import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Log the form submission (in a real app, you'd save to database)
    console.log('Form submission:', body)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      data: body
    })
    
  } catch (error) {
    console.error('Form submission error:', error)
    
    return NextResponse.json({
      success: false,
      message: 'There was an error sending your message. Please try again.'
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'TerraPulse AI Contact API is running',
    version: '1.0.0',
    endpoints: {
      POST: 'Submit contact form',
      GET: 'API status'
    }
  })
}
