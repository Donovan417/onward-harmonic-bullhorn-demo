import CandidateRow from "./CandidateRow";
import { Zap } from "lucide-react";

interface CandidateTableProps {
  briefExpanded: boolean;
  onToggleBrief: () => void;
}

const columns = ["#", "Candidate", "Verdict", "Python", "Docker", "NLP/LLMs", "Flags", "Evidence Coverage", ""];

const CandidateTable = ({ briefExpanded, onToggleBrief }: CandidateTableProps) => {
  return (
    <div className="rounded-lg border border-border bg-card shadow-card overflow-hidden mb-5">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Candidates in Bullhorn req: Machine Learning Engineer
          </p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            1 Bullhorn candidate enriched by Harmonic · Ranked by technical evidence
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Zap className="w-3 h-3" />
          Enriched by Harmonic
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <CandidateRow briefExpanded={briefExpanded} onToggleBrief={onToggleBrief} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateTable;
