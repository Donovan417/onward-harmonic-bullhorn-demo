import { ChevronRight, Zap, RefreshCw, Menu } from "lucide-react";

interface TopNavProps {
  onMenuToggle: () => void;
}

const TopNav = ({ onMenuToggle }: TopNavProps) => {
  return (
    <header className="h-12 flex items-center justify-between px-3 md:px-4 ats-nav-bg border-b border-white/10 flex-shrink-0">
      {/* Left: Bullhorn brand */}
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <button
          onClick={onMenuToggle}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="text-sm font-bold tracking-tight text-white flex-shrink-0">
          Bullhorn<span className="font-normal text-white/50 ml-1.5">ATS</span>
        </span>
        <span className="text-white/20 hidden md:inline">|</span>
        {/* Breadcrumb - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-1 text-xs text-white/50">
          <span className="hover:text-white/80 cursor-pointer transition-colors">Candidates</span>
          <ChevronRight className="w-3 h-3" />
          <span className="hover:text-white/80 cursor-pointer transition-colors">Machine Learning Engineer</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/90 font-medium">Jigyasa Grover</span>
        </nav>
      </div>

      {/* Right: Harmonic integration indicator */}
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-white/40">
          <RefreshCw className="w-3 h-3" />
          <span>Enriched 2 hrs ago</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 md:px-2.5 py-1 rounded-md bg-white/10 text-white/90 text-xs font-medium">
          <Zap className="w-3 h-3" />
          <span className="hidden sm:inline">Harmonic Enrichment</span>
          <span className="sm:hidden">Harmonic</span>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
