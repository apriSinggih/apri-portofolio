import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";


function App() {
  return (
    <div className="min-h-screen bg-neo-bg">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />

        <section
          id="experience"
          className="min-h-screen border-t-[3px] border-neo-black px-5 py-20 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-4xl font-bold">
              Experience
            </h2>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen border-t-[3px] border-neo-black px-5 py-20 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-4xl font-bold">
              Contact
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;