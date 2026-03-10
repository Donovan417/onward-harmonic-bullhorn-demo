import { Info } from "lucide-react";

const ExecutiveSummaryCard = () => {
  return (
    <div className="rounded-lg border border-border bg-card shadow-card p-6 md:p-8 mb-6">
      <h3 className="text-lg font-bold text-foreground mb-4">Executive Summary</h3>
      <p className="font-serif text-[15px] leading-relaxed text-foreground/85 mb-5">
        Moderate evidence in Python engineering and Docker/containerization, but major gaps remain
        around production ML deployment, MLOps, and verifiable depth across must-have systems.
      </p>
      <div className="rounded-lg bg-muted/60 border border-border p-4 flex gap-3">
        <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground/70">Note:</span>{" "}
          .ipynb notebook files can show hands-on experimentation, but they are less reliable than
          standard source files for proving exact authorship and production-grade engineering depth.
        </p>
      </div>
    </div>
  );
};

export default ExecutiveSummaryCard;
