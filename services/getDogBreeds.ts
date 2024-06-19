import { getBaseURL } from "@/utils";
import { cookies } from "next/headers";

// import { redirect } from "next/navigation";

export const getDogBreeds = async () => {
  const url = await getBaseURL();

  const response = await fetch(url + "/dogs/breeds", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });

  // if (!response.ok) redirect("/login?error=fail");

  return response;
};
