import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    message: "DevCanvas API is running smoothly!" 
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Process your hackathon logic here (e.g., save to state or external service)
    return NextResponse.json({ 
      success: true, 
      receivedData: body, 
      message: "Data processed successfully!" 
    }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: "Invalid JSON or server error" 
    }, { status: 400 });
  }
}