import { Info } from "lucide-react";

const ExecutiveSummaryCard = () => {
  return (
    <div className="rounded-lg border border-border bg-card shadow-card p-4 md:p-6 mb-3 md:mb-4">
      <h3 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">Executive Summary</h3>
      <p className="font-serif text-sm md:text-[15px] leading-relaxed text-foreground/85 mb-4 md:mb-5">
        Moderate evidence in Python engineering and Docker/containerization, but major gaps remain around production ML
        deployment, MLOps, and verifiable depth across must-have systems.
      </p>
      <div className="rounded-lg bg-muted/60 border border-border p-3 md:p-4 flex gap-3">
        <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground/70">Note:</span> Links to.ipynb notebook files do not highlight
          exact lines of code.
        </p>
      </div>
    </div>
  );
};

export default ExecutiveSummaryCard;
