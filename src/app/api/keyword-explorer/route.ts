import { NextRequest, NextResponse } from "next/server";
import { getKeywordReport } from "@/lib/services/research-services";

export async function GET(req: NextRequest){
  const keyword = req.nextUrl.searchParams.get("keyword") ?? "freelancer dashboard";
  const report = await getKeywordReport(keyword);
  return NextResponse.json(report ?? { error: "Not found" }, { status: report ? 200 : 404 });
}
