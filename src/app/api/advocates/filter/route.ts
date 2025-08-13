import db from "@/db";
import { advocates } from "@/db/schema";
import { gte, ilike, sql } from "drizzle-orm";

export async function GET(
    request: Request
) {
  const url = new URL(request.url);
  console.log("url", url);
  const filter = url.searchParams.get("filter") ?? "";
  const searchTerm = url.searchParams.get("searchTerm");
  const numericFilter: boolean = filter === "yearsOfExperience"
  const specialtiesFilter: boolean = filter ==="specialties"

  let data;

  if (numericFilter) {
    data = await db.select().from(advocates).where(gte(filterToColumnMapper[filter], Number(searchTerm))) 
  } else if (specialtiesFilter) {
        const wildCardSearchTerm = `%${searchTerm}%`
        data = await db.select().from(advocates).where(sql`${filterToColumnMapper[filter]}::text ILIKE ${wildCardSearchTerm}`)
  } else {
        data = await db.select().from(advocates).where(ilike(filterToColumnMapper[filter], `%${searchTerm}%`));
  }

  return Response.json({ data });
}

const filterToColumnMapper = {
  "firstName": advocates.firstName,
  "lastName": advocates.lastName,
  "city": advocates.city,
  "degree": advocates.degree,
  "specialties": advocates.specialties,
  "yearsOfExperience": advocates.yearsOfExperience,
  "phoneNumber": advocates.phoneNumber,
}
