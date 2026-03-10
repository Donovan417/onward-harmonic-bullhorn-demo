import { Zap, ExternalLink } from "lucide-react";
import VerdictBadge from "../harmonic/VerdictBadge";

const metaItems = [
  { label: "Verdict", value: "Weak Fit" },
  { label: "Confidence", value: "LOW" },
  { label: "Required Skills Met", value: "2 of 7" },
  { label: "Seniority", value: "Senior (SFIA 5)" },
  { label: "Repos Analyzed", value: "69" },
  { label: "Selected", value: "37" },
  { label: "Excluded", value: "2" },
];

const skills = ["Python", "Docker", "Gemini API", "Vertex AI", "LLM Agents"];

const HarmonicAssessmentPanel = () => {
  return (
    <div className="rounded-lg border border-border overflow-hidden shadow-card mb-5 animate-brief-enter">
      {/* Panel header label */}
      <div className="bg-card border-b border-border px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded flex items-center justify-center harmonic-badge">
            <Zap className="w-3 h-3" />
          </div>
          <h2 className="text-sm font-bold text-foreground">Harmonic Technical Assessment</h2>
          <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-muted font-medium">
            AI Evidence Brief
          </span>
        </div>
        <span className="text-[11px] text-muted-foreground">Pulled from GitHub evidence</span>
      </div>

      {/* Dark hero section */}
      <div className="hero-gradient px-6 py-8 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xl font-bold text-white">
              J
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Jigyasa Grover</h3>
              <p className="text-white/50 text-sm mt-0.5">@jigyasa-grover</p>
              <p className="text-white/70 text-sm mt-1">Machine Learning Engineer</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 text-[11px] font-medium rounded bg-white/10 text-white/80 border border-white/15"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-3">
            <a
              href="https://github.com/jigyasa-grover"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
            >
              GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
            <div className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-center">
              <VerdictBadge label="Weak Fit" level="weak" large />
              <p className="text-white/40 text-[11px] mt-1.5 uppercase tracking-wider">
                Overall Verdict
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meta grid */}
      <div className="bg-card border-t border-border grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 divide-x divide-border">
        {metaItems.map((item) => (
          <div key={item.label} className="px-3 py-3 text-center">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
              {item.label}
            </div>
            <div className="text-xs font-semibold text-foreground">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HarmonicAssessmentPanel;
