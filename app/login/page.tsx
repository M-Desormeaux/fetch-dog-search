"use client";

import { handleSubmit } from "./handleSubmit";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const params = useSearchParams();
  const error = params.get("error");
  const name = params.get("name");
  const email = params.get("email");

  console.log(error, name, email);

  return (
    <div className="flex h-full flex-col gap-3 bg-white px-4 py-12">
      {/* ERROR BANNERS */}
      {error === "name" && (
        <div className="rounded border border-orange-300 bg-orange-100 p-1 text-center text-sm text-orange-600 drop-shadow">
          What should we call you?
        </div>
      )}
      {error === "email" && (
        <div className="rounded border border-orange-300 bg-orange-100 p-1 text-center text-sm text-orange-600 drop-shadow">
          Hmm, I don&apos;t think we can continue without that email.
        </div>
      )}
      {error === "fail" && (
        <div className="rounded border border-red-300 bg-red-100 p-1 text-center text-sm text-red-600 drop-shadow">
          For some reason that didn&apos;t work. Did you enter something
          incorrectly?
        </div>
      )}

      {/* JOKE ERROR BANNERS */}
      {error === "joke" && (
        <div className="rounded border border-green-300 bg-green-100 p-1 text-center text-sm text-green-600 drop-shadow">
          I know this is a demo, but you could try entering something? Unless
          you meant to do that.
        </div>
      )}

      {error === "secret" && (
        <div className="rounded border border-pink-300 bg-pink-100 p-1 text-center text-sm text-pink-600 drop-shadow">
          &#x2728; I don&apos;t know how you made it to this screen but you
          shouldn&apos;t be here. &#x2728;
        </div>
      )}

      <form action={handleSubmit} className="flex flex-col items-center gap-3">
        <div className="flex items-center">
          <label htmlFor="name" className="w-16 font-semibold">
            Name
          </label>
          <input
            defaultValue={name ?? ""}
            type="text"
            name="name"
            id="name"
            className="rounded border p-1"
            placeholder="And who are you?"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="w-16 font-semibold">
            eMail
          </label>
          <input
            defaultValue={email ?? ""}
            type="email"
            name="email"
            id="email"
            className="rounded border p-1"
            placeholder="arrow@knee.adventure"
          />
        </div>
        <button
          type="submit"
          className="h-min w-fit rounded border px-3 py-2 font-semibold bg-green-300 drop-shadow hover:drop-shadow-md active:drop-shadow"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
