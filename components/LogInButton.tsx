"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const LogInButton = (props: { isAuth: boolean }) => {
  // get pathname to hide button on '/login'
  const pathname = usePathname().split("/");
  if (pathname[1] === "login") return null;

  // take passed down server cookies check for auth
  const { isAuth } = props;
  const color = isAuth ? "bg-red-300 text-white" : "bg-green-300 text-black";

  return (
    <Link
      href="/login"
      className={
        "drop-shadow-sm hover:drop-shadow-md active:drop-shadow h-min rounded border bg-gray-50 px-3 py-2 font-semibold " +
        color
      }
    >
      {isAuth ? "Logout" : "Login"}
    </Link>
  );
};
