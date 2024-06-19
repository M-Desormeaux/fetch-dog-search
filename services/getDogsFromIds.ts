import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const postDogsFromIds = async (ids: string[]) => {
  const url = "https://frontend-take-home-service.fetch.com";

  const cookieStore = cookies().toString();

  const response = await fetch(url + "/dogs", {
    method: "POST",
    credentials: "include",
    cache: "no-store",
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore,
    },
  });

  if (!response.ok) redirect("/login?error=fail");

  return response.json();
};
