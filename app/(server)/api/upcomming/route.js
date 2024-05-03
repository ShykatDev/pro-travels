import { NextResponse } from "next/server";
import packagesData from "@/data/upComming.json";

export async function GET() {
  return NextResponse.json(packagesData);
}
