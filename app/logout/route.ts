import { getBaseURL } from "@/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST() {
  const url = await getBaseURL();

  const cookieStore = cookies();

  const response = await fetch(url + "/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
  });

  if (!response.ok) redirect("/search?msg=stuck");

  cookieStore.set("fetch-access-token", "", {
    expires: new Date(-1),
    httpOnly: true,
    secure: true,
  });

  redirect("/?msg");
}
