import React from "react";
import {
  ChartNoAxesColumn,
  Compass,
  Briefcase,
  GraduationCap,
  Users,
  Medal,
  Target,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    name: "Career Assessment",
    description:
      "In-depth assessment of your skills, interests, values, and personality to identify the best career fit.",
    icon: <ChartNoAxesColumn size={32} />,
  },
  {
    name: "Career Exploration",
    description:
      "Discover career paths aligned with your strengths and passions through guided exploration.",
    icon: <Compass size={32} />,
  },
  {
    name: "Job Search Strategy",
    description:
      "Develop an effective strategy to find and secure opportunities in your desired field.",
    icon: <Briefcase size={32} />,
  },
  {
    name: "Education Planning",
    description:
      "Guidance on educational pathways that will help you achieve your career goals.",
    icon: <GraduationCap size={32} />,
  },
  {
    name: "Interview Coaching",
    description:
      "Practice and feedback to help you excel in job interviews and showcase your value.",
    icon: <Users size={32} />,
  },
  {
    name: "Resume & LinkedIn",
    description:
      "Professional optimization of your resume and LinkedIn profile to stand out.",
    icon: <Medal size={32} />,
  },
  {
    name: "Career Transition",
    description:
      "Strategic guidance for changing careers or industries with confidence.",
    icon: <Target size={32} />,
  },
  {
    name: "Career Advancement",
    description:
      "Strategies to progress in your current field and achieve your promotion goals.",
    icon: <TrendingUp size={32} />,
  },
];

export default function Services() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="lg:container mx-auto px-5 py-16 flex flex-col justify-center items-center w-full">
        <h2 className="text-4xl font-medium text-white text-center">
          Our Services
        </h2>
        <p className="text-lg font-normal text-center">
          Tailored services designed to elevate your professional journey at
          every stage
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start items-stretch w-full gap-5 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start w-full rounded-xl border border-sky-500/25 bg-transparent backdrop-blur-3xl hover:bg-sky-500/5 transition-all duration-300 ease-in-out p-5 gap-2"
            >
              <span className="h-10 w-10 rounded-lg bg-white text-sky-500 backdrop-blur-3xl flex justify-center items-center">
                {service.icon}
              </span>
              <h3 className="text-2xl font-medium text-white">
                {service.name}
              </h3>
              <p className="text-md text-gray-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
