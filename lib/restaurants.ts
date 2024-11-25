import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getRestaurants() {
  return prisma.restaurant.findMany()
}

export async function getRestaurantById(id: number) {
  return prisma.restaurant.findUnique({
    where: { id },
    include: { reviews: true },
  })
}

