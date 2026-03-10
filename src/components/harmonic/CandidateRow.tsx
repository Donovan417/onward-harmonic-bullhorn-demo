import { ChevronDown, ChevronRight } from "lucide-react";
import VerdictBadge from "./VerdictBadge";

interface CandidateRowProps {
  briefExpanded: boolean;
  onToggleBrief: () => void;
}

const CandidateRow = ({ briefExpanded, onToggleBrief }: CandidateRowProps) => {
  return (
    <tr className="hover:bg-muted/40 transition-colors">
      <td className="px-4 py-4 text-muted-foreground font-medium">1</td>
      <td className="px-4 py-4">
        <div className="font-semibold text-foreground">Jigyasa Grover</div>
        <div className="text-xs text-muted-foreground">@jigyasa-grover</div>
      </td>
      <td className="px-4 py-4">
        <VerdictBadge label="Weak Fit" level="weak" />
      </td>
      <td className="px-4 py-4">
        <VerdictBadge label="Moderate" level="moderate" />
      </td>
      <td className="px-4 py-4">
        <VerdictBadge label="Moderate" level="moderate" />
      </td>
      <td className="px-4 py-4">
        <VerdictBadge label="Weak" level="weak" />
      </td>
      <td className="px-4 py-4">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-verdict-weak-bg text-verdict-weak-fg text-xs font-bold">
          3
        </span>
      </td>
      <td className="px-4 py-4">
        <div className="text-foreground font-medium text-xs">37 selected / 69 analyzed</div>
        <div className="text-[11px] text-muted-foreground">repository coverage</div>
      </td>
      <td className="px-4 py-4">
        <button
          onClick={onToggleBrief}
          className="inline-flex items-center gap-1 text-sm font-semibold text-link hover:underline transition-colors"
        >
          Brief
          {briefExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </td>
    </tr>
  );
};

export default CandidateRow;
