import {
  LayoutDashboard,
  Briefcase,
  Users,
  Building2,
  Send,
  CalendarDays,
  BarChart3,
  Zap,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Briefcase, label: "Jobs" },
  { icon: Users, label: "Candidates", active: true },
  { icon: Building2, label: "Companies" },
  { icon: Send, label: "Submissions" },
  { icon: CalendarDays, label: "Interviews" },
  { icon: BarChart3, label: "Reports" },
];

const LeftSidebar = () => {
  return (
    <aside className="w-52 flex-shrink-0 bg-card border-r border-border flex flex-col">
      <div className="flex-1 py-4">
        <nav className="space-y-0.5 px-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      {/* Harmonic integration badge */}
      <div className="px-3 pb-4">
        <div className="rounded-md harmonic-badge px-3 py-2.5 flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <div>
            <p className="text-xs font-semibold">Harmonic</p>
            <p className="text-[10px] opacity-70">Integration active</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
