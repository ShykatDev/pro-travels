import { NextResponse } from "next/server";
import packagesData from "@/data/placeData.json";

export async function GET() {
  return NextResponse.json(packagesData);
}
