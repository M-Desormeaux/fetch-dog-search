"use server";

import { postLogIn } from "@/services/postLogIn";
import { redirect } from "next/navigation";

export const handleSubmit = async (formData: FormData) => {
  const rawFormData: { name: string | null; email: string | null } = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
  };

  const { name, email } = {
    name: String(rawFormData.name),
    email: String(rawFormData.email),
  };

  switch (true) {
    case Boolean(name) && Boolean(email):
      const status = await postLogIn({ name, email });
      if (!status) redirect("/login?error=fail");
      if (status) redirect("/search");
      break;
    case !Boolean(name) && Boolean(email):
      redirect(`/login?error=name&email=${email}`);
    case Boolean(name) && !Boolean(email):
      redirect(`/login?error=email&name=${name}`);
    case !Boolean(name) && !Boolean(email):
      redirect("/login?error=joke");
    default:
      redirect("/login?error=secret");
  }
};
