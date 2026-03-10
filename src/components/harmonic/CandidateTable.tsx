import CandidateRow from "./CandidateRow";

interface CandidateTableProps {
  briefExpanded: boolean;
  onToggleBrief: () => void;
}

const CandidateTable = ({ briefExpanded, onToggleBrief }: CandidateTableProps) => {
  const columns = ["#", "Candidate", "Verdict", "Python", "Docker", "NLP/LLMs", "Flags", "Activity", ""];

  return (
    <div className="rounded-lg border border-border bg-card shadow-card overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground"
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
