import { ExternalLink, Send, ArrowRight, StickyNote, Share2, Globe } from "lucide-react";
import VerdictBadge from "../harmonic/VerdictBadge";

const CandidateRecordHeader = () => {
  return (
    <div className="rounded-lg border border-border bg-card shadow-card p-5 mb-5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        {/* Left: identity */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center text-xl font-bold text-foreground">
            J
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-foreground">Jigyasa Grover</h1>
              <VerdictBadge label="Weak Fit" level="weak" />
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              Machine Learning Engineer · @jigyasa-grover
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
              <span>
                <span className="font-medium text-foreground/70">Stage:</span> Technical Review
              </span>
              <span>
                <span className="font-medium text-foreground/70">Req:</span> Machine Learning Engineer
              </span>
              <span>
                <span className="font-medium text-foreground/70">Owner:</span> Sarah Chen
              </span>
              <span>
                <span className="font-medium text-foreground/70">Source:</span> Bullhorn Candidate Record
              </span>
            </div>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex flex-wrap items-center gap-2">
          <ActionButton icon={Send} label="Submit" />
          <ActionButton icon={ArrowRight} label="Move Stage" />
          <ActionButton icon={StickyNote} label="Add Note" />
          <ActionButton icon={Share2} label="Share Brief" />
          <a
            href="https://github.com/jigyasa-grover"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-medium text-muted-foreground hover:bg-muted transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ATS meta strip */}
      <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
        <span>
          <span className="font-medium text-foreground/70">Status:</span> Internal Review
        </span>
        <span>
          <span className="font-medium text-foreground/70">Client:</span> Confidential
        </span>
        <span>
          <span className="font-medium text-foreground/70">Seniority:</span> Senior (SFIA 5)
        </span>
        <span className="text-muted-foreground/60">
          Attached to Bullhorn candidate record
        </span>
      </div>
    </div>
  );
};

const ActionButton = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-card text-xs font-medium text-foreground hover:bg-muted transition-colors">
    <Icon className="w-3.5 h-3.5" />
    {label}
  </button>
);

export default CandidateRecordHeader;
