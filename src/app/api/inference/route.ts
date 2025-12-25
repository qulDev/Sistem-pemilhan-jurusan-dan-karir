import { NextResponse } from "next/server";
import { runInference } from "@/lib/inference-engine";
import { UserFacts } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const facts: UserFacts = body.facts;

    // Validasi input
    if (!facts) {
      return NextResponse.json(
        { error: "Facts are required" },
        { status: 400 }
      );
    }

    // Jalankan inference engine
    const result = runInference(facts);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Inference error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
