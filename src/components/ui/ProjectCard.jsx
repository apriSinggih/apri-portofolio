import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import NeoBadge from "./NeoBadge";
import NeoButton from "./NeoButton";
import NeoCard from "./NeoCard";

const colorClasses = {
  purple: "bg-neo-purple text-white",
  yellow: "bg-neo-yellow",
  green: "bg-neo-green",
  pink: "bg-neo-pink",
};

const ProjectCard = ({ project }) => {
  const Icon = project.icon;

  return (
    <NeoCard
      hover
      className={`overflow-hidden ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-[3px] border-neo-black bg-neo-bg px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold">
            PROJECT_{project.number}
          </span>

          <NeoBadge variant="black">
            {project.category}
          </NeoBadge>
        </div>

        <ArrowUpRight size={22} strokeWidth={3} />
      </div>

      <div className="p-5 md:p-7">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
          {/* Project Info */}
          <div>
            <div className="mb-5 flex items-start gap-4">
              <div
                className={`
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  border-[3px]
                  border-neo-black
                  ${colorClasses[project.color]}
                `}
              >
                <Icon size={28} strokeWidth={2.5} />
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-black/75">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Problem / Solution */}
            <div className="grid gap-5 border-t-[3px] border-neo-black pt-5 md:grid-cols-2">
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase">
                  // problem
                </p>

                <p className="text-sm leading-6">
                  {project.problem}
                </p>
              </div>

              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase">
                  // solution
                </p>

                <p className="text-sm leading-6">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 lg:w-64 lg:grid-cols-1">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-[3px] border-neo-black bg-neo-yellow p-3 shadow-[3px_3px_0_#000]"
              >
                <p className="font-display text-xl font-bold md:text-2xl">
                  {metric.value}
                </p>

                <p className="mt-1 font-mono text-[10px] font-bold uppercase leading-4">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack + Links */}
        <div className="mt-7 flex flex-col gap-5 border-t-[3px] border-neo-black pt-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase">
              // stack
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <NeoBadge key={technology} variant="white">
                  {technology}
                </NeoBadge>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 gap-3">
            {project.github !== "#" && (
              <NeoButton
                href={project.github}
                variant="white"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2"
              >
                <Terminal size={18} />
                GitHub
              </NeoButton>
            )}

            {project.demo !== "#" && (
              <NeoButton
                href={project.demo}
                variant="black"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2"
              >
                <ExternalLink size={18} />
                Live
              </NeoButton>
            )}
          </div>
        </div>
      </div>
    </NeoCard>
  );
};

export default ProjectCard;