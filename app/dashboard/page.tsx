import Link from "next/link";

const navCards = [
  {
    href: "dashboard/tasks",
    icon: "📋",
    label: "Tasks",
    description: "View, organize, and manage your daily tasks.",
    color: "from-purple-500/20 to-indigo-500/10",
    accent: "text-purple-400",
    iconBg: "bg-purple-500/20 border-purple-400/30",
    glow: "hover:shadow-purple-500/20",
  },
  {
    href: "dashboard/analytics",
    icon: "📊",
    label: "Analytics",
    description: "Gain insights into your performance and trends.",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/20 border-blue-400/30",
    glow: "hover:shadow-blue-500/20",
  },
  {
    href: "dashboard/settings",
    icon: "⚙️",
    label: "Settings",
    description: "Customize and configure your dashboard preferences.",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-400",
    iconBg: "bg-violet-500/20 border-violet-400/30",
    glow: "hover:shadow-violet-500/20",
  },
  {
    href: "dashboard/users",
    icon: "👥",
    label: "Users",
    description: "View, manage, and monitor your entire user base.",
    color: "from-indigo-500/20 to-blue-500/10",
    accent: "text-indigo-400",
    iconBg: "bg-indigo-500/20 border-indigo-400/30",
    glow: "hover:shadow-indigo-500/20",
  },
];

const stats = [
  { label: "Active Users", value: "1,200", change: "+8%", positive: true },
  { label: "Tasks Done", value: "342", change: "+12%", positive: true },
  { label: "Total Sales", value: "$120k", change: "+5%", positive: true },
  { label: "New Sign-Ups", value: "350", change: "+18%", positive: true },
];

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 p-8 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              All systems operational
            </div>
            <h1 className="text-5xl font-extrabold text-white tracking-tight">Dashboard</h1>
            <p className="text-white/60 mt-2 text-lg">
              Welcome back! Here&apos;s what&apos;s happening today.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              JD
            </div>
            <div>
              <p className="text-white text-sm font-medium">John Doe</p>
              <p className="text-white/40 text-xs">Administrator</p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">{s.label}</p>
              <p className="text-2xl font-extrabold text-white">{s.value}</p>
              <span className="inline-block mt-2 text-xs font-semibold text-emerald-400 bg-emerald-400/15 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                {s.change}
              </span>
            </div>
          ))}
        </div>

        {/* Nav cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {navCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${card.glow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 ${card.iconBg} border rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{card.label}</h2>
                <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>
                <div className={`mt-5 flex items-center gap-1.5 text-sm font-medium ${card.accent}`}>
                  Open
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer row */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/30 text-sm">Last updated: just now · Dashboard v2.0</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-xs font-medium">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}