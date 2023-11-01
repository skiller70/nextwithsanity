import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json({ name: "skiller" });
};
