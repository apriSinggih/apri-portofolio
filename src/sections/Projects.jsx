import { ArrowDown } from "lucide-react";

import NeoBadge from "../components/ui/NeoBadge";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t-[3px] border-neo-black bg-neo-bg"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <NeoBadge variant="black">
              02 / SELECTED PROJECTS
            </NeoBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
              Things I've
              <br />
              <span className="text-neo-purple">
                built & shipped.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase">
            <ArrowDown size={18} strokeWidth={3} />
            Scroll to explore
          </div>
        </div>

        {/* Projects */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 border-[3px] border-neo-black bg-neo-purple p-5 text-white shadow-[5px_5px_0_#000] md:p-6">
          <p className="font-mono text-xs font-bold uppercase">
            // more projects
          </p>

          <p className="mt-2 font-display text-xl font-bold">
            More experiments, side projects, and code are available on
            GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;