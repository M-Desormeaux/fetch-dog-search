// "use client";
import { redirect } from "next/navigation";

export const getDogBreeds = async () => {
  const url = "https://frontend-take-home-service.fetch.com";

  // const cookieStore = cookies().toString();

  const response = await fetch(url + "/dogs/breeds", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // Cookie: cookieStore,
    },
  });

  // if (!response.ok) redirect("/login?error=fail");

  return response.status;
};
