import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const dir = path.join(process.cwd(), "public/brands")
  const files = fs
    .readdirSync(dir)
    .filter(f => f.endsWith(".svg"))

  return NextResponse.json(files)
}
