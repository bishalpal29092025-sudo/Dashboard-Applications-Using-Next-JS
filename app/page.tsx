import Link from "next/link";

export default function Home() {
  const features = [
    { icon: "📋", label: "Task Management", desc: "Organize and track every task with ease." },
    { icon: "📊", label: "Live Analytics", desc: "Real-time insights into your performance." },
    { icon: "👥", label: "User Control", desc: "Manage roles, profiles, and permissions." },
    { icon: "⚙️", label: "Smart Settings", desc: "Fully customizable to your workflow." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-4xl w-full text-center space-y-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Version 2.0 — Now live
        </div>

        {/* Hero */}
        <div className="space-y-5">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Your Command
            <span className="block bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
            Manage tasks, track analytics, control users, and configure your workspace — all from one beautiful dashboard.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40 text-base"
          >
            Go to Dashboard
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
          <Link
            href="/dashboard/analytics"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105 text-base"
          >
            View Analytics
          </Link>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <p className="text-white font-semibold text-sm">{f.label}</p>
              <p className="text-white/40 text-xs mt-1 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <p className="text-white/20 text-xs">Built with Next.js · Tailwind CSS · TypeScript</p>
      </div>
    </div>
  );
}