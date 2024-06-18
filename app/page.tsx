import { Metadata } from "next";

// json data for mock testimonials
import testimonials from "@/local_data/testimonials.json";

export const metadata: Metadata = {
  title: "Bark Avenue Orphanage | Home",
  description: "Adopting smiles, One paw at a time. &#x1F43E;",
};

export default function Home() {
  return (
    <div className="flex h-full flex-col gap-3 bg-white p-5">
      <section id="hero" className="flex h-1/2 flex-col gap-4 py-5">
        <span className="rounded border border-orange-300 bg-orange-100 p-1 text-center text-sm text-orange-600">
          to see dogs available to adopt, please sign in
        </span>
        <div>
          <h1 className="py-3 text-4xl font-bold">
            Welcome to Bark Avenue Orphanage.
          </h1>
          <q className="italic">
            Adopting smiles, One paw at a time. &#x1F43E;
          </q>
        </div>
      </section>
      <section id="testemonials">
        <h2 className="pb-2 pt-3 text-2xl font-bold">Testimonials</h2>
        <ul className="flex flex-col gap-2 text-black">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.id}
              className="flex w-11/12 flex-col gap-2 rounded bg-rose-100 p-3 even:self-end"
            >
              <div className="flex gap-2">
                <div className="inline-block h-6 w-6 rounded-full bg-gray-600" />
                <span className="text-lg font-semibold">{testimonial.dog}</span>
              </div>
              <q className="italic">{testimonial.testimonial}</q>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
