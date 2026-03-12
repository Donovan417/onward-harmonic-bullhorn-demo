import { AlertTriangle } from "lucide-react";

interface Risk {
  severity: "High" | "Medium";
  title: string;
  description: string;
}

const risks: Risk[] = [
  {
    severity: "High",
    title: "No MLOps or deployment evidence",
    description:
      "The portfolio shows no verified evidence of production deployment, monitoring, or lifecycle management for ML systems.",
  },
  {
    severity: "High",
    title: "Critical skills not verifiable from code",
    description:
      "Vertex AI, TensorRT, Triton Inference Server, and REST API depth cannot be confirmed from the GitHub evidence reviewed.",
  },
  {
    severity: "Medium",
    title: "Evidence skewed toward demos, tutorials, and forks",
    description:
      "A meaningful portion of the portfolio consists of demo/tutorial work and forked repositories, which reduces confidence in direct authorship and production readiness.",
  },
];

const RiskFlagsCard = () => {
  return (
    <div className="rounded-lg border border-border bg-card shadow-card p-4 md:p-6 mb-3 md:mb-4">
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <AlertTriangle className="w-5 h-5 text-risk-high" />
        <h3 className="text-base md:text-lg font-bold text-foreground">Key Risk Flags</h3>
      </div>
      <div className="space-y-3 md:space-y-4">
        {risks.map((risk) => {
          const isHigh = risk.severity === "High";
          return (
            <div
              key={risk.title}
              className={`rounded-lg border p-3 md:p-4 ${
                isHigh
                  ? "border-verdict-weak-border bg-verdict-weak-bg/30"
                  : "border-verdict-moderate-border bg-verdict-moderate-bg/30"
              }`}
              style={{
                borderLeftWidth: "3px",
                borderLeftColor: isHigh
                  ? "hsl(var(--risk-high-accent))"
                  : "hsl(var(--risk-medium-accent))",
              }}
            >
              <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-1">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isHigh ? "text-verdict-weak-fg" : "text-verdict-moderate-fg"
                  }`}
                >
                  {risk.severity}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  — {risk.title}
                </span>
              </div>
              <p className="font-serif text-sm text-foreground/80 leading-relaxed">
                {risk.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RiskFlagsCard;
