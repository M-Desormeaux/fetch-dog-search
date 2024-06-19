"use client";

import { getDogBreeds } from "@/services/getDogBreeds";
import { getDogIds } from "@/services/getDogIds";
import { postDogsFromIds } from "@/services/getDogsFromIds";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Search() {
  // !! need client for params to do api calls
  const params = useSearchParams();
  const breeds = params.getAll("breeds");
  const size = params.get("size");

  // // ? Existing api calls to possibly refactored
  // const breeds = await getDogBreeds();
  // const dogIds = await getDogIds();
  // const dogObjs = await postDogsFromIds(dogIds?.resultIds);

  return (
    <div className="flex h-full flex-col gap-3 bg-white px-4 py-12">
      {/* <h1>Dogs Available for Adoption</h1>
      <details>
        <summary>Breeds</summary>
        <ul className="flex gap-2 flex-wrap">
          {breeds.map((breed: string) => (
            <li
              key={breed}
              className="py-1 px-2 border bg-gray-50 rounded text-sm"
            >
              <span>{breed}</span>
            </li>
          ))}
        </ul>
      </details>

      <details>
        <summary>Dogs : Dogs</summary>
        <ul className="grid grid-cols-2 gap-3 place-items-center sm:grid-cols-3 md:grid-cols-4">
          {dogObjs?.map(
            (
              dog: {
                img: string;
                name: string;
                age: number;
                breed: string;
                zip_code: string;
                id: string;
              },
              index: number,
            ) => (
              <li
                key={dog?.id}
                className="relative justify-center py-1 px-2 border bg-gray-50 rounded text-sm w-full"
              >
                <span className="absolute top-0 left-0 opacity-10">
                  {index + 1}
                </span>
                <div className="flex justify-center items-center aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={dog.img}
                    alt="beautiful puppy"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="text-gray-800 text-xs font-semibold text-center p-1">
                  {dog.breed}
                </div>
                <div className="flex justify-between items-center p-1">
                  <span className="text-lg">{dog.name}</span>
                  <span>{dog.age}</span>
                </div>
                <div className="text-gray-800 text-xs text-end">
                  {dog.zip_code}
                </div>
              </li>
            ),
          )}
        </ul>
      </details> */}
    </div>
  );
}
