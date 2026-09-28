import { ArrowDown, Download, Terminal } from "lucide-react";
import NeoBadge from "../components/ui/NeoBadge";
import NeoButton from "../components/ui/NeoButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Left Content */}
          <div>
            <NeoBadge variant="green" className="mb-6 gap-2">
              <span className="h-2 w-2 rounded-full bg-black" />
              Available for Hire
            </NeoBadge>

            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-wider">
              Hello, I'm Apri 👋
            </p>

            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Software
              <br />
              Engineer
              <br />
              <span className="text-neo-purple">
                & Backend
              </span>
              <br />
              Developer.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 md:text-lg">
              Building reliable and high-performance backend systems
              with <strong>Go, PostgreSQL, and Redis</strong>, while
              exploring modern mobile and web development.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <NeoButton href="#projects">
                <ArrowDown size={18} />
                View Projects
              </NeoButton>

              <NeoButton
                href="/cv.pdf"
                variant="white"
                target="_blank"
              >
                <Download size={18} />
                Download CV
              </NeoButton>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  border-[3px]
                  border-neo-black
                  bg-neo-white
                  p-3
                  shadow-[3px_3px_0_#000]
                  transition-all
                  hover:translate-x-[2px]
                  hover:translate-y-[2px]
                  hover:shadow-[1px_1px_0_#000]
                "
              >
                <Terminal size={20} />
              </a>

              <span className="font-mono text-xs font-bold uppercase">
                Let's build something
              </span>
            </div>
          </div>

          {/* Terminal */}
          <TerminalWindow />

        </div>
      </div>

      {/* Decorative element */}
      <div
        aria-hidden="true"
        className="
          absolute
          -right-10
          top-32
          hidden
          h-20
          w-20
          rotate-12
          border-[3px]
          border-neo-black
          bg-neo-pink
          shadow-[5px_5px_0_#000]
          lg:block
        "
      />
    </section>
  );
};

const TerminalWindow = () => {
  return (
    <div className="relative">
      {/* Floating label */}
      <div
        className="
          absolute
          -right-2
          -top-5
          z-10
          rotate-3
          border-[3px]
          border-neo-black
          bg-neo-yellow
          px-4
          py-2
          font-mono
          text-xs
          font-bold
          shadow-[4px_4px_0_#000]
        "
      >
        BACKEND_MODE
      </div>

      <div
        className="
          overflow-hidden
          border-[3px]
          border-neo-black
          bg-neo-black
          shadow-[8px_8px_0_#000]
        "
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b-[3px] border-neo-black bg-neo-white px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border-2 border-black bg-neo-pink" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-neo-yellow" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-neo-green" />
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <Terminal size={14} />
            terminal
          </div>
        </div>

        {/* Terminal Body */}
        <div className="min-h-[360px] p-6 font-mono text-sm leading-7 text-white md:p-8">
          <div>
            <span className="text-neo-green">$</span>{" "}
            <span>whoami</span>
          </div>

          <div className="mt-1 text-neo-yellow">
            apri@developer
          </div>

          <div className="mt-5">
            <span className="text-neo-green">$</span>{" "}
            <span>cat skills.json</span>
          </div>

          <div className="mt-2 text-gray-300">
            <span className="text-neo-purple">{"{"}</span>
            <br />

            <span className="pl-4">
              <span className="text-neo-yellow">"backend"</span>
              : [
            </span>

            <br />

            <span className="pl-8">
              "Go",
            </span>

            <br />

            <span className="pl-8">
              "REST API",
            </span>

            <br />

            <span className="pl-8">
              "PostgreSQL",
            </span>

            <br />

            <span className="pl-8">
              "Redis"
            </span>

            <br />

            <span className="pl-4">
              ],
            </span>

            <br />

            <span className="pl-4">
              <span className="text-neo-yellow">"tools"</span>
              : [
            </span>

            <br />

            <span className="pl-8">
              "Docker",
            </span>

            <br />

            <span className="pl-8">
              "Linux",
            </span>

            <br />

            <span className="pl-8">
              "Git"
            </span>

            <br />

            <span className="pl-4">
              ]
            </span>

            <br />

            <span className="text-neo-purple">{"}"}</span>
          </div>

          <div className="mt-5">
            <span className="text-neo-green">$</span>{" "}
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>

      {/* Bottom sticker */}
      <div
        className="
          absolute
          -bottom-5
          -left-4
          rotate-[-4deg]
          border-[3px]
          border-neo-black
          bg-neo-purple
          px-4
          py-2
          font-mono
          text-xs
          font-bold
          text-white
          shadow-[4px_4px_0_#000]
        "
      >
        GO + POSTGRESQL
      </div>
    </div>
  );
};

export default Hero;