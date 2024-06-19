"use client";

import axios from "axios";

const BASE_URL = "https://frontend-take-home-service.fetch.com";

// Function to make authenticated requests
const fetchWithAuth = async (url: string, method = "GET", data = {}) => {
  const response = await axios({
    method,
    url: `${BASE_URL}${url}`,
    withCredentials: true,
    data,
  });
  return response.data;
};

// Function to log in and obtain the auth cookie
export const postLogIn = async (name: string, email: string) => {
  const response = await fetchWithAuth("/auth/login", "POST", { name, email });

  // Access the `Set-Cookie` header from the response (server-side)
  const setCookieHeader = response.headers.get("set-cookie");

  if (setCookieHeader) {
    // Log the `Set-Cookie` header
    console.log("Set-Cookie Header:", setCookieHeader);

    // Optional: Parse the specific cookie value if needed
    const cookies = setCookieHeader
      .split(";")
      .map((cookie: any) => cookie.trim());
    const specificCookie = cookies.find((cookie: any) =>
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

  return response;
};

// Function to log out and invalidate the auth cookie
export const postLogOut = async () => {
  const response = await fetchWithAuth("/auth/logout", "POST");
  return response;
};
