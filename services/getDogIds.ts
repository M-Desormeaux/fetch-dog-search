import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDogIds = async () => {
  const url = "https://frontend-take-home-service.fetch.com";

  const cookieStore = cookies().toString();

  const response = await fetch(
    url + "/dogs/search?breeds=Cairn&breeds=Vizsla&size=100&sort=breed:asc",
    {
      method: "GET",
      credentials: "include",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore,
      },
    },
  );

  if (!response.ok) redirect("/login?error=fail");

  return response.json();
};
