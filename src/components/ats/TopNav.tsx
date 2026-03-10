import { ChevronRight, Zap, RefreshCw } from "lucide-react";

const TopNav = () => {
  return (
    <header className="h-12 flex items-center justify-between px-4 ats-nav-bg border-b border-white/10 flex-shrink-0">
      {/* Left: Bullhorn brand */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-bold tracking-tight text-white">
          Bullhorn<span className="font-normal text-white/50 ml-1.5">ATS</span>
        </span>
        <span className="text-white/20">|</span>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs text-white/50">
          <span className="hover:text-white/80 cursor-pointer transition-colors">Candidates</span>
          <ChevronRight className="w-3 h-3" />
          <span className="hover:text-white/80 cursor-pointer transition-colors">Machine Learning Engineer</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/90 font-medium">Jigyasa Grover</span>
        </nav>
      </div>

      {/* Right: Harmonic integration indicator */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-white/40">
          <RefreshCw className="w-3 h-3" />
          <span>Enriched 2 hrs ago</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-white/90 text-xs font-medium">
          <Zap className="w-3 h-3" />
          Harmonic Enrichment
        </div>
      </div>
    </header>
  );
};

export default TopNav;
