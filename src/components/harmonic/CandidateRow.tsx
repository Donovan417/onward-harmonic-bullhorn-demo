import { ChevronDown, ChevronRight } from "lucide-react";
import VerdictBadge from "./VerdictBadge";

interface CandidateRowProps {
  briefExpanded: boolean;
  onToggleBrief: () => void;
}

const CandidateRow = ({ briefExpanded, onToggleBrief }: CandidateRowProps) => {
  return (
    <tr className="hover:bg-muted/40 transition-colors">
      <td className="px-3 py-3 text-muted-foreground font-medium text-xs">1</td>
      <td className="px-3 py-3">
        <div className="font-semibold text-foreground text-sm">Jigyasa Grover</div>
        <div className="text-[11px] text-muted-foreground">@jigyasa-grover</div>
      </td>
      <td className="px-3 py-3">
        <VerdictBadge label="Weak Fit" level="weak" />
      </td>
      <td className="px-3 py-3">
        <VerdictBadge label="Moderate" level="moderate" />
      </td>
      <td className="px-3 py-3">
        <VerdictBadge label="Moderate" level="moderate" />
      </td>
      <td className="px-3 py-3">
        <VerdictBadge label="Weak" level="weak" />
      </td>
      <td className="px-3 py-3">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-verdict-weak-bg text-verdict-weak-fg text-[11px] font-bold">
          3
        </span>
      </td>
      <td className="px-3 py-3">
        <div className="text-foreground font-medium text-xs">37 selected / 69 analyzed</div>
        <div className="text-[10px] text-muted-foreground">repository coverage</div>
      </td>
      <td className="px-3 py-3">
        <button
          onClick={onToggleBrief}
          className="inline-flex items-center gap-1 text-xs font-semibold text-link hover:underline transition-colors"
        >
          Brief
          {briefExpanded ? (
            <ChevronDown className="w-3.5 h-3.5" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5" />
          )}
        </button>
      </td>
    </tr>
  );
};

export default CandidateRow;
