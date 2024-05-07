import { NextResponse } from "next/server";
import recommendedData from "@/data/recommended.json";

export async function GET() {
  return NextResponse.json(recommendedData);
}
