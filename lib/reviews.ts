import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getUserReviews(userId: number) {
  return prisma.review.findMany({
    where: { userId },
    include: { restaurant: true },
  })
}

