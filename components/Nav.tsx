import { getIsAuth } from "@/utils";
import Link from "next/link";

export const Nav = async () => {
  /*
  Getting auth confirmation here since need that for _which_ button to show.
  but just want to hide it on /login, so login button is client to check pathname
  */
  const isAuth = getIsAuth();
  const color = isAuth ? "bg-red-300 text-white" : "bg-green-300 text-black";

  return (
    <nav className="flex min-h-14 w-full items-center justify-between gap-2 border-b bg-white px-3">
      <Link
        href="/"
        className="h-min rounded px-3 py-2 font-semibold drop-shadow-sm hover:drop-shadow-md active:drop-shadow bg-gray-50"
      >
        Home
      </Link>
      <Link
        href={isAuth ? "/logout" : "/login"}
        className={
          "drop-shadow-sm hover:drop-shadow-md active:drop-shadow h-min rounded border bg-gray-50 px-3 py-2 font-semibold " +
          color
        }
      >
        {isAuth ? "Logout" : "Login"}
      </Link>
    </nav>
  );
};
