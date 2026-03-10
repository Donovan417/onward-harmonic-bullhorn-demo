import { ExternalLink } from "lucide-react";
import VerdictBadge from "./VerdictBadge";

const skills = ["Python", "Docker", "Gemini API", "Vertex AI", "LLM Agents"];

const metaItems = [
  { label: "Verdict", value: "Weak Fit" },
  { label: "Confidence", value: "LOW" },
  { label: "Required Skills Met", value: "2 of 7" },
  { label: "Seniority", value: "Senior (SFIA 5)" },
  { label: "Repos Analyzed", value: "69" },
  { label: "Selected", value: "37" },
  { label: "Excluded", value: "2" },
];

const CandidateHero = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-card mb-8 animate-brief-enter">
      {/* Dark hero */}
      <div className="hero-gradient px-8 py-10 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left */}
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold text-white">
              J
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Jigyasa Grover</h2>
              <p className="text-white/60 text-sm mt-0.5">@jigyasa-grover</p>
              <p className="text-white/80 text-sm mt-1">Machine Learning Engineer</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-white/90 border border-white/15"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-4">
            <a
              href="https://github.com/jigyasa-grover"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
            >
              GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="bg-white/10 border border-white/20 rounded-lg px-6 py-5 text-center">
              <VerdictBadge label="Weak Fit" level="weak" large />
              <p className="text-white/50 text-xs mt-2 uppercase tracking-wider">
                Overall Verdict
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meta grid */}
      <div className="bg-card border-t border-border grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 divide-x divide-border">
        {metaItems.map((item) => (
          <div key={item.label} className="px-4 py-4 text-center">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
              {item.label}
            </div>
            <div className="text-sm font-semibold text-foreground">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateHero;
