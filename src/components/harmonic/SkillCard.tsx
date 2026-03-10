import { ExternalLink } from "lucide-react";
import VerdictBadge from "./VerdictBadge";

interface EvidenceLink {
  label: string;
  url: string;
}

interface SkillCardProps {
  title: string;
  level: "weak" | "moderate" | "strong";
  levelLabel: string;
  summary: string;
  evidenceNote: string;
  links: EvidenceLink[];
}

const SkillCard = ({ title, level, levelLabel, summary, evidenceNote, links }: SkillCardProps) => {
  return (
    <div className="rounded-lg border border-border bg-card shadow-card p-6 md:p-8 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <VerdictBadge label={levelLabel} level={level} />
      </div>
      <p className="font-serif text-[15px] leading-relaxed text-foreground/85 mb-5">
        {summary}
      </p>
      <div className="border-t border-border pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          {evidenceNote}
        </p>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-link hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
