import { getBaseURL } from "@/utils";

export const postLogIn = async (args: { name: string; email: string }) => {
  const url = await getBaseURL();

  const response = await fetch(url + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });

  console.log(response, response.ok, response);

  if (!response.ok) {
    return false;
  }

  // Access the `Set-Cookie` header from the response (server-side)
  const setCookieHeader = response.headers.get("set-cookie");

  if (setCookieHeader) {
    // Log the `Set-Cookie` header
    console.log("Set-Cookie Header:", setCookieHeader);

    // Optional: Parse the specific cookie value if needed
    const cookies = setCookieHeader.split(";").map((cookie) => cookie.trim());
    const specificCookie = cookies.find((cookie) =>
      cookie.startsWith("Secure, fetch-access-token="),
    );

    if (specificCookie) {
      console.log("Specific Cookie:", specificCookie);
    } else {
      console.log("Specific cookie not found");
    }
  } else {
    console.log("No Set-Cookie header found");
  }

  return true;
};
