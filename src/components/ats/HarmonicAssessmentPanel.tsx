import { Zap, ExternalLink, Send, ArrowRight, StickyNote, Share2, Globe } from "lucide-react";
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

const ActionButton = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <button className="inline-flex items-center justify-center gap-1.5 px-3 py-2 md:py-1.5 rounded-md border border-white/20 bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors min-h-[44px] md:min-h-0 w-full sm:w-auto">
    <Icon className="w-3.5 h-3.5" />
    {label}
  </button>
);

const HarmonicAssessmentPanel = () => {
  return (
    <div className="rounded-lg border border-border overflow-hidden shadow-card mb-4 md:mb-5 animate-brief-enter">
      {/* Panel header label */}
      <div className="bg-card border-b border-border px-3 md:px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded flex items-center justify-center harmonic-badge flex-shrink-0">
            <Zap className="w-3 h-3" />
          </div>
          <h2 className="text-sm font-bold text-foreground">Harmonic Technical Assessment</h2>
          <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-muted font-medium hidden sm:inline">
            AI Evidence Brief
          </span>
        </div>
        <span className="text-[11px] text-muted-foreground">Pulled from GitHub evidence</span>
      </div>

      {/* Dark hero section – merged candidate header */}
      <div className="hero-gradient px-4 py-6 md:px-8 md:py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
          {/* Left: identity */}
          <div className="flex items-start gap-3 md:gap-4 min-w-0">
            <div className="flex-shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-lg md:text-xl font-bold text-white">
              J
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <h1 className="text-lg md:text-xl font-bold text-white">Jigyasa Grover</h1>
                <VerdictBadge label="Weak Fit" level="weak" />
              </div>
              <p className="text-white/80 text-sm mt-0.5 truncate">
                Machine Learning Engineer · @jigyasa-grover
              </p>
              {/* ATS metadata */}
              <div className="flex flex-wrap items-center gap-x-3 md:gap-x-4 gap-y-1 mt-2 text-xs text-white/70">
                <span>
                  <span className="font-medium text-white/90">Stage:</span> Technical Review
                </span>
                <span>
                  <span className="font-medium text-white/90">Req:</span> ML Engineer
                </span>
                <span className="hidden sm:inline">
                  <span className="font-medium text-white/90">Owner:</span> Sarah Chen
                </span>
                <span className="hidden sm:inline">
                  <span className="font-medium text-white/90">Source:</span> Bullhorn Candidate Record
                </span>
              </div>
              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 text-[11px] font-medium rounded bg-white/10 text-white border border-white/15"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: actions */}
          <div className="flex flex-col items-stretch sm:items-end gap-2 md:gap-3">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center sm:justify-end gap-2">
              <ActionButton icon={Send} label="Submit" />
              <ActionButton icon={ArrowRight} label="Move Stage" />
              <ActionButton icon={StickyNote} label="Add Note" />
              <ActionButton icon={Share2} label="Share Brief" />
              <a
                href="https://github.com/jigyasa-grover"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 md:py-1.5 rounded-md bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors min-h-[44px] md:min-h-0 col-span-2 sm:col-span-1"
              >
                <Globe className="w-3.5 h-3.5" />
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ATS meta strip */}
        <div className="mt-4 md:mt-5 pt-3 border-t border-white/10 flex flex-wrap gap-x-4 md:gap-x-6 gap-y-1 text-xs text-white/70">
          <span>
            <span className="font-medium text-white/90">Status:</span> Internal Review
          </span>
          <span>
            <span className="font-medium text-white/90">Client:</span> Confidential
          </span>
          <span>
            <span className="font-medium text-white/90">Seniority:</span> Senior (SFIA 5)
          </span>
          <span className="text-white/60 hidden sm:inline">
            Attached to Bullhorn candidate record
          </span>
        </div>
      </div>

      {/* Meta grid */}
      <div className="bg-card border-t border-border grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 divide-x divide-border">
        {metaItems.map((item) => (
          <div key={item.label} className="px-2 md:px-3 py-2.5 md:py-3 text-center">
            <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
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
