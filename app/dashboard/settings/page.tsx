import Link from "next/link";

const settingsLinks = [
  {
    href: "/dashboard/settings/account",
    icon: "🔐",
    label: "Account",
    description: "Manage your credentials, password, and security settings.",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-400/30",
    accent: "text-purple-400",
    glow: "hover:shadow-purple-500/20",
    iconBg: "bg-purple-500/20 border-purple-400/30",
  },
  {
    href: "/dashboard/settings/notifications",
    icon: "🔔",
    label: "Notifications",
    description: "Control how and when you receive email, SMS, and push alerts.",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-400/30",
    accent: "text-blue-400",
    glow: "hover:shadow-blue-500/20",
    iconBg: "bg-blue-500/20 border-blue-400/30",
  },
  {
    href: "/dashboard/settings/profile",
    icon: "👤",
    label: "Profile",
    description: "Update your display name, avatar, bio, and public information.",
    color: "from-violet-500/20 to-blue-500/10",
    border: "border-violet-400/30",
    accent: "text-violet-400",
    glow: "hover:shadow-violet-500/20",
    iconBg: "bg-violet-500/20 border-violet-400/30",
  },
];

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 p-8 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Configuration
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-3">Settings</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Customize your account, manage notifications, and keep your profile up to date.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {settingsLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${item.glow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 ${item.iconBg} border rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{item.label}</h2>
                <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
                <div className={`mt-6 flex items-center gap-2 text-sm font-medium ${item.accent}`}>
                  Configure
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info panel */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center text-lg flex-shrink-0">
            💡
          </div>
          <p className="text-white/50 text-sm">Changes are saved per section. Visit each setting page to update and save individually.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;