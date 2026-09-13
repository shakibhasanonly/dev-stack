import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";

const testTechnology = {
  id: 1,
  name: "React",
  category: "Frontend",
  description:
    "A declarative, component-based JavaScript library for building modern user interfaces.",
  icon: "React.png",
  rating: 4.9,
  difficulty: "Beginner-Friendly",
  badge: "Popular",
};

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Technology Card Preview */}
        <section
          id="technologies"
          className="bg-white px-5 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-extrabold text-slate-900">
              Technology Card Preview
            </h2>

            <div className="w-full max-w-xs">
              <TechnologyCard
                technology={testTechnology}
                isAdded={false}
                onAdd={() => {}}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;