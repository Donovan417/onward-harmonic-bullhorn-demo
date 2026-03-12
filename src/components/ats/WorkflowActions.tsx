import { Share2, Download, Paperclip, GitCompare, PenLine } from "lucide-react";

const actions = [
  { icon: Share2, label: "Share brief with hiring manager" },
  { icon: Download, label: "Export interview questions" },
  { icon: Paperclip, label: "Attach assessment to submission" },
  { icon: GitCompare, label: "Compare against req" },
  { icon: PenLine, label: "Log recruiter note" },
];

const WorkflowActions = () => {
  return (
    <div className="rounded-lg border border-border bg-card shadow-card p-3 md:p-4 mb-4 md:mb-5">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        Workflow Actions
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
        {actions.map((a) => (
          <button
            key={a.label}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 md:py-1.5 rounded-md border border-border text-xs font-medium text-foreground hover:bg-muted transition-colors min-h-[44px] md:min-h-0 w-full sm:w-auto"
          >
            <a.icon className="w-3.5 h-3.5 text-muted-foreground" />
            {a.label}
          </button>
        ))}
      </div>
      <p className="text-[11px] text-muted-foreground mt-3">
        Ready to share with hiring manager
      </p>
    </div>
  );
};

export default WorkflowActions;
