import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, {params}:{params: {id:string}}) {
  const {id} = params;
  
  //Get the book with the given id from the database
  const book = await prisma.book.findUnique({
    where: {
      id: id,
    } 
  })
  return NextResponse.json(book, { status: 200 });
  
}

export async function PATCH(request: Request, {params}:{params: {id:string}}) {
  const {id} = params;
  const {title, date} = await request.json();
  
  //Update the book with the given id from the database
  
  const book = await prisma.book.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      date: date,
    }
  })
  
  return NextResponse.json(book, { status: 200 });
  
}

