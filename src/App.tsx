import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="technologies"
          className="px-5 py-20 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Technologies
          </h2>
        </section>

        <section
          id="projects"
          className="px-5 py-20 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Projects
          </h2>
        </section>

        <section
          id="about"
          className="px-5 py-20 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            About
          </h2>
        </section>

        <section
          id="contact"
          className="px-5 py-20 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Contact
          </h2>
        </section>
      </main>
    </>
  );
}

export default App;