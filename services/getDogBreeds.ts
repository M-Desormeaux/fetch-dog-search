import { getBaseURL } from "@/utils";
import { cookies } from "next/headers";

// import { redirect } from "next/navigation";

export const getDogBreeds = async () => {
  const url = await getBaseURL();

  const cookieStore = cookies().toString();

  const response = await fetch(url + "/dogs/search?size=10", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore,
    },
  });

  // if (!response.ok) redirect("/login?error=fail");

  return response;
};
