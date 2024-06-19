// "use client";
import { cookies } from "next/headers";

export const postLogIn = async (args: { name: string; email: string }) => {
  const url = "https://frontend-take-home-service.fetch.com";

  const response = await fetch(url + "/auth/login", {
    method: "POST",
    body: JSON.stringify(args),
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return false;
  }

  const setCookieHeader = response.headers.get("set-cookie");

  if (setCookieHeader) {
    // Parse the specific cookie value if needed
    const cookiesHeaders = setCookieHeader
      .split(";")
      .map((cookie) => cookie.trim());
    const specificCookie = cookiesHeaders.find((cookie) =>
      cookie.startsWith("Secure, fetch-access-token="),
    );

    // grab and set cookie manually since for some reason credentials and axios do not work as well with next 14
    const realCookie = specificCookie?.split("=")[1] ?? "";

    cookies().set("fetch-access-token", realCookie, {
      httpOnly: true,
      secure: true,
    });

    if (specificCookie) {
      console.log("\n\nSpecific Cookie:", realCookie, "\n\n");
    } else {
      console.log("Specific cookie not found");
    }
  } else {
    console.log("No Set-Cookie header found");
  }

  return true;
};
