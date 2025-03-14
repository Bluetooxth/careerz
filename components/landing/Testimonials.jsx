import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emily Carter",
    position: "Recent Graduate",
    feedback:
      "The career assessment provided incredible insights into my strengths and interests. It truly set me on the right path!",
  },
  {
    name: "David Wilson",
    position: "Mid-Career Professional",
    feedback:
      "Career transition support helped me switch industries seamlessly. I now have a fulfilling role that aligns with my passions!",
  },
  {
    name: "Sophia Martinez",
    position: "Senior Executive",
    feedback:
      "The career advancement strategies were game-changing. I successfully secured a promotion and grew in my leadership role!",
  },
];

export default function Testimonials() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="lg:container mx-auto px-5 py-16 flex flex-col justify-center items-center w-full">
        <h2 className="text-4xl font-medium text-white text-center">
          Testimonials
        </h2>
        <p className="text-lg font-normal text-center">
          Hear from professionals who have benefited from our services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch w-full gap-5 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start w-full rounded-xl border border-sky-500/25 bg-transparent backdrop-blur-3xl hover:bg-sky-500/5 transition-all duration-300 ease-in-out p-5 gap-1"
            >
              <span className=" text-sky-500 self-end">
                <Quote size={24} />
              </span>
              <p className="text-md text-gray-100">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-medium text-white">
                {testimonial.name}
              </h3>
              <p className="text-md text-gray-300">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
