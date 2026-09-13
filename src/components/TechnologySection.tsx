import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";

type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

 const iconModules = import.meta.glob(
  "../assets/technologies/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
  const alreadyAdded = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setSelectedTechnologies((previous) => [
    ...previous,
    technology,
  ]);

  toast.success(`${technology.name} added to your stack!`);
};

  const handleRemoveFromStack = (id: number) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section
      id="technologies"
      className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10">
       <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
       Explore the{" "}
        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
         Technologies
        </span>
       </h2>

      <p className="mt-2 text-sm text-slate-500">
       Pick one technology per category to build your ideal stack.
      </p>
      </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* Technology Cards */}
          <div>
            {loading ? (
              <div className="flex min-h-60 items-center justify-center rounded-xl bg-white">
                <p className="text-sm font-medium text-slate-500">
                  Loading technologies...
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={selectedTechnologies.some(
                      (item) => item.id === technology.id
                    )}
                    onAdd={handleAddToStack}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Your Stack */}
          <aside className="h-fit rounded-xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <div>
            <h3 className="text-lg font-bold text-slate-900">
                Your Stack
                 </h3>

                    <p className="mt-1 text-xs text-slate-400">
                        {selectedTechnologies.length}{" "}
                    {selectedTechnologies.length === 1
                           ? "Technology"
                           : "Technologies"}{" "}
                       Selected
                    </p>
                    </div>

            {selectedTechnologies.length === 0 ? (
              <div className="mt-6 rounded-lg bg-slate-50 px-4 py-8 text-center">
                <p className="text-sm text-slate-400">
                  No technologies selected yet.
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Add technologies to build your stack.
                </p>
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                    {(() => {
                    const iconPath = `../assets/technologies/${technology.icon}`;
                    const iconUrl = iconModules[iconPath];

                     return (
                    iconUrl && (
                    <img
                    src={iconUrl}
                    alt={`${technology.name} icon`}
                     className="h-6 w-6 object-contain"
                     />
                     )
                     );
                   })()}
                   </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {technology.name}
                      </p>

                      <p className="text-[10px] text-slate-400">
                        {technology.category}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveFromStack(technology.id)}
                      className="text-sm font-medium text-slate-400 transition hover:text-red-500"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleRemoveAll}
                  className="mt-2 w-full rounded-md border border-red-200 bg-white px-4 py-2.5 text-xs font-medium text-red-500 shadow-sm transition hover:bg-red-50"
                >
                  Remove All
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;