// "use client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getDogBreeds = async () => {
  const url = "https://frontend-take-home-service.fetch.com";

  const cookieStore = cookies().toString();

  console.log(cookieStore);

  const response = await fetch(url + "/dogs/breeds", {
    method: "GET",
    credentials: "include",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore,
    },
  });

  // if (!response.ok) redirect("/login?error=fail");

  return response.json();
};
