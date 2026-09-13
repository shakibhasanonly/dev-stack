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

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const iconModules = import.meta.glob(
  "../assets/technologies/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  const iconPath = `../assets/technologies/${technology.icon}`;
  const iconUrl = iconModules[iconPath];

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      {/* Top: Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center">
          {iconUrl && (
            <img
              src={iconUrl}
              alt={`${technology.name} icon`}
              className="h-8 w-8 object-contain"
            />
          )}
        </div>

        {technology.badge && (
          <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-medium text-sky-500">
            {technology.badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="mt-3 text-base font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-12 text-[11px] leading-5 text-slate-400">
        {technology.description}
      </p>

      {/* Info */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px]">
        <span className="rounded-sm bg-slate-50 px-2 py-1 font-medium text-slate-500">
          {technology.category}
        </span>

        <span className="text-slate-400">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 font-medium text-slate-500">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-3 w-full rounded-md px-4 py-2.5 text-xs font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;