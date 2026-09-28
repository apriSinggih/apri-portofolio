import {
  Code2,
  Database,
  Smartphone,
  Server,
} from "lucide-react";

import NeoBadge from "../components/ui/NeoBadge";
import NeoCard from "../components/ui/NeoCard";

const skillGroups = [
  {
    title: "Backend & Systems",
    icon: Server,
    variant: "purple",
    skills: [
      "Go",
      "RESTful API",
      "Echo",
      "GORM",
      "PHP",
      "Microservices",
    ],
  },
  {
    title: "Database & Cache",
    icon: Database,
    variant: "yellow",
    skills: [
      "PostgreSQL",
      "Redis",
      "Database Migration",
    ],
  },
  {
    title: "Mobile & Frontend",
    icon: Smartphone,
    variant: "green",
    skills: [
      "Flutter",
      "Dart",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Code2,
    variant: "pink",
    skills: [
      "Git",
      "Docker",
      "Docker Compose",
      "Linux",
      "Nginx",
      "Postman",
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="border-t-[3px] border-neo-black bg-neo-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <NeoBadge variant="black">01 / ABOUT</NeoBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
              Building systems
              <br />
              <span className="text-neo-purple">that make sense.</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-sm leading-6 md:text-right">
            BACKEND • PERFORMANCE • MOBILE
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* About */}
          <NeoCard
            hover={false}
            className="flex flex-col justify-between bg-neo-yellow p-6 md:p-8"
          >
            <div>
              <p className="mb-6 font-mono text-sm font-bold uppercase">
                // whoami
              </p>

              <h3 className="mb-5 font-display text-3xl font-bold md:text-4xl">
                Software Engineer
                <br />
                & Backend Developer
              </h3>

              <div className="space-y-4 text-base leading-7">
                <p>
                  Saya fokus membangun aplikasi backend yang terstruktur,
                  scalable, dan mampu menangani proses secara reliable.
                </p>

                <p>
                  Berpengalaman menggunakan Go, PostgreSQL, Redis, Docker,
                  serta membangun REST API dengan pendekatan clean dan
                  maintainable.
                </p>

                <p>
                  Saya juga memiliki ketertarikan pada mobile development
                  menggunakan Flutter.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t-[3px] border-neo-black pt-5">
              <p className="font-mono text-xs font-bold uppercase">
                Currently exploring
              </p>

              <p className="mt-2 font-display text-xl font-bold">
                Backend Performance & Concurrency
              </p>
            </div>
          </NeoCard>

          {/* Skills */}
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <NeoCard
                  key={group.title}
                  className="p-5 md:p-6"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        border-[3px]
                        border-neo-black
                        ${
                          group.variant === "purple"
                            ? "bg-neo-purple text-white"
                            : group.variant === "yellow"
                              ? "bg-neo-yellow"
                              : group.variant === "green"
                                ? "bg-neo-green"
                                : "bg-neo-pink"
                        }
                      `}
                    >
                      <Icon size={24} strokeWidth={2.5} />
                    </div>

                    <span className="font-mono text-xs font-bold">
                      0{skillGroups.indexOf(group) + 1}
                    </span>
                  </div>

                  <h3 className="mb-4 font-display text-xl font-bold">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <NeoBadge
                        key={skill}
                        variant="white"
                      >
                        {skill}
                      </NeoBadge>
                    ))}
                  </div>
                </NeoCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;