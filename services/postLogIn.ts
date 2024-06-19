"use client";

export const postLogIn = async (args: { name: string; email: string }) => {
  const url = "https://frontend-take-home-service.fetch.com";

  const response = await fetch(url + "/auth/login", {
    method: "POST",
    body: JSON.stringify(args),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return false;
  }

  return true;
};
