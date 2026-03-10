import { cn } from "@/lib/utils";

type VerdictLevel = "weak" | "moderate" | "strong";

interface VerdictBadgeProps {
  label: string;
  level: VerdictLevel;
  className?: string;
  large?: boolean;
}

const VerdictBadge = ({ label, level, className, large }: VerdictBadgeProps) => {
  const base = "inline-flex items-center font-semibold uppercase tracking-wide border";
  const sizes = large
    ? "px-4 py-2 text-sm rounded-lg"
    : "px-2.5 py-1 text-xs rounded-md";

  const colors: Record<VerdictLevel, string> = {
    weak: "bg-verdict-weak-bg text-verdict-weak-fg border-verdict-weak-border",
    moderate: "bg-verdict-moderate-bg text-verdict-moderate-fg border-verdict-moderate-border",
    strong: "bg-verdict-strong-bg text-verdict-strong-fg border-verdict-strong-border",
  };

  return (
    <span className={cn(base, sizes, colors[level], className)}>{label}</span>
  );
};

export default VerdictBadge;
