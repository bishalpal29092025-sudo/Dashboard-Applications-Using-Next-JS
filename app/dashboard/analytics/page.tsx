"use client";

const Analytics = () => {
  const metrics = [
    { title: "Total Sales", value: "$120,000", change: "+12%", isPositive: true, icon: "💰" },
    { title: "Active Users", value: "1,200", change: "-8%", isPositive: false, icon: "👥" },
    { title: "Website Visits", value: "8,500", change: "+5%", isPositive: true, icon: "🌐" },
    { title: "New Sign-Ups", value: "350", change: "+18%", isPositive: true, icon: "✨" },
  ];

  const trafficData = [
    { label: "Mon", value: 65 },
    { label: "Tue", value: 82 },
    { label: "Wed", value: 74 },
    { label: "Thu", value: 91 },
    { label: "Fri", value: 88 },
    { label: "Sat", value: 55 },
    { label: "Sun", value: 48 },
  ];

  const signupData = [
    { label: "Jan", value: 40 },
    { label: "Feb", value: 58 },
    { label: "Mar", value: 72 },
    { label: "Apr", value: 61 },
    { label: "May", value: 85 },
    { label: "Jun", value: 78 },
  ];

  const maxTraffic = Math.max(...trafficData.map((d) => d.value));
  const maxSignup = Math.max(...signupData.map((d) => d.value));

  const recentActivity = [
    { title: "User Registration", desc: "New user signed up on 2026-04-16", value: "+10 Users", icon: "👤" },
    { title: "Sales Increase", desc: "Sales grew by 12% on 2026-04-16", value: "+$15,000", icon: "📈" },
    { title: "Website Traffic Surge", desc: "Traffic increased by 8% on 2026-04-16", value: "+200 Visits", icon: "🌐" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 p-8 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Live Analytics
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Analytics</h1>
          <p className="text-white/60 mt-2">Track your key metrics, traffic, and growth.</p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-xl">
                  {metric.icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  metric.isPositive
                    ? "text-emerald-400 bg-emerald-400/15 border-emerald-400/30"
                    : "text-red-400 bg-red-400/15 border-red-400/30"
                }`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">{metric.title}</p>
              <p className="text-2xl font-extrabold text-white">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Website Traffic Bar Chart */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-1 h-5 bg-purple-400 rounded-full" />
                  Website Traffic
                </h2>
                <p className="text-white/40 text-xs mt-1">Daily visits this week</p>
              </div>
              <span className="text-xs text-white/30 bg-white/5 border border-white/10 px-3 py-1 rounded-full">This Week</span>
            </div>
            <div className="flex items-end gap-3 h-40">
              {trafficData.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-white/40 text-xs">{bar.value}</span>
                  <div className="w-full relative group/bar">
                    <div
                      className="w-full bg-gradient-to-t from-purple-600 to-violet-400 rounded-t-lg transition-all duration-500 hover:from-purple-500 hover:to-violet-300 cursor-pointer"
                      style={{ height: `${(bar.value / maxTraffic) * 120}px` }}
                    />
                  </div>
                  <span className="text-white/40 text-xs">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sign-Ups Bar Chart */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-1 h-5 bg-blue-400 rounded-full" />
                  User Sign-Ups
                </h2>
                <p className="text-white/40 text-xs mt-1">Monthly growth trend</p>
              </div>
              <span className="text-xs text-white/30 bg-white/5 border border-white/10 px-3 py-1 rounded-full">2026</span>
            </div>
            <div className="flex items-end gap-3 h-40">
              {signupData.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-white/40 text-xs">{bar.value}</span>
                  <div className="w-full">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-lg transition-all duration-500 hover:from-blue-500 hover:to-indigo-300 cursor-pointer"
                      style={{ height: `${(bar.value / maxSignup) * 120}px` }}
                    />
                  </div>
                  <span className="text-white/40 text-xs">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-indigo-400 rounded-full" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-colors duration-150"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium">{item.title}</p>
                    <p className="text-white/35 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <span className="text-emerald-400 text-sm font-semibold bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full flex-shrink-0 ml-4">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;