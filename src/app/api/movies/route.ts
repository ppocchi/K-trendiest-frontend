import { NextResponse } from "next/server";

const DATA_SOURCE_URL = '192.168.219.159:8080/movies';

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL);

    const movies: TrendItem[] = await res.json();

    return NextResponse.json(movies)
}