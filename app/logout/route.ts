"use server";

import { getBaseURL } from "@/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  const url = await getBaseURL();

  const cookieStore = cookies();

  const response = await fetch(url + "/auth/logout", {
    method: "POST",
    credentials: "include",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
  });
  cookieStore.delete("fetch-access-token");

  // if (!response.ok) redirect("/search?msg=stuck");

  redirect("/?msg=bye");
}
