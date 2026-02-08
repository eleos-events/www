import { NextResponse } from "next/server";

export function badRequest(message: string = "Bad Request") {
  return NextResponse.json({ success: false, message }, { status: 400 });
}

export function internalServerError(message: string = "Internal Server Error") {
  return NextResponse.json({ success: false, message }, { status: 500 });
}

export function notModified(message: string = "Not Modified") {
  return NextResponse.json({ success: true, message }, { status: 304 });
}

export function ok(message: string = "OK") {
  return NextResponse.json({ success: true, message }, { status: 200 });
}
