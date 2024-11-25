import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const restaurants = await prisma.restaurant.findMany()
  return NextResponse.json(restaurants)
}

export async function POST(request: Request) {
  const body = await request.json()
  const restaurant = await prisma.restaurant.create({
    data: {
      name: body.name,
      address: body.address,
      description: body.description,
    },
  })
  return NextResponse.json(restaurant)
}

