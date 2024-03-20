import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

export async function GET(request: Request) {
  // Get All Books from Database
  const books = await prisma.book.findMany();
  
  return NextResponse.json(books, { status: 200 });
}