interface HeaderProps {
  activeSort: string;
  onSortChange: (sort: string) => void;
}

const sorts = ["Verdict", "Activity", "Name"];

const Header = ({ activeSort, onSortChange }: HeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Machine Learning Engineer — Candidates
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          1 candidate enriched by Harmonic · Ranked by technical evidence
        </p>
      </div>
      <div className="inline-flex items-center rounded-lg border border-border bg-card p-1 shadow-sm">
        {sorts.map((s) => (
          <button
            key={s}
            onClick={() => onSortChange(s)}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors ${
              activeSort === s
                ? "bg-foreground text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
