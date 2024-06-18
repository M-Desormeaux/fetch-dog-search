import { cookies } from "next/headers";

export const getBaseURL = async () => process.env.BASE_URL;

// server check for specific auth cookie, used across app for checks
export const getIsAuth = () => {
  const cookieStore = cookies();
  const access = cookieStore.get("Secure, fetch-access-token");
  return Boolean(access);
};
