"use client";

import { getDogBreeds } from "@/services/getDogBreeds";

export default function Search() {
  const breeds = getDogBreeds();

  console.log(breeds);

  return (
    <div className="flex h-full flex-col gap-3 bg-white px-4 py-12">
      <h1>Dogs Available for Adoption</h1>
      {JSON.stringify(breeds, null, 2)}
    </div>
  );
}
