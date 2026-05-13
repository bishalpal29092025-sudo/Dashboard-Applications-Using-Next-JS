"use client";

import Image from "next/image";

const UsersDetails = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "New York, USA",
    joined: "Jan 2024",
    activities: [
      { id: 1, description: "Updated password", timestamp: "2025-02-10", icon: "🔐" },
      { id: 2, description: "Changed email address", timestamp: "2025-01-25", icon: "✉️" },
      { id: 3, description: "Logged in from a new device", timestamp: "2025-01-15", icon: "💻" },
    ],
    stats: [
      { label: "Tasks Done", value: "124" },
      { label: "Projects", value: "8" },
      { label: "Messages", value: "342" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 p-8 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        {/* Profile card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar with ring */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 scale-110 blur-sm opacity-60" />
              <div className="relative w-24 h-24 rounded-full ring-2 ring-violet-400/50 overflow-hidden">
                <Image
                  src={user.profilePicture}
                  alt={`${user.name}'s profile`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full" />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h1 className="text-3xl font-extrabold text-white">{user.name}</h1>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-400/15 text-emerald-400 border border-emerald-400/30 rounded-full text-xs font-semibold">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  {user.status}
                </span>
              </div>
              <p className="text-white/50 text-sm mb-3">{user.email}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-violet-500/20 text-violet-300 border border-violet-400/30 rounded-lg text-xs font-medium">
                  {user.role}
                </span>
                <span className="px-3 py-1 bg-white/5 text-white/40 border border-white/10 rounded-lg text-xs">
                  📍 {user.location}
                </span>
                <span className="px-3 py-1 bg-white/5 text-white/40 border border-white/10 rounded-lg text-xs">
                  🗓 Joined {user.joined}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 flex-shrink-0">
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white rounded-xl text-sm font-medium transition-all duration-200">
                Edit
              </button>
              <button className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30">
                Message
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
            {user.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-violet-500 rounded-full" />
            About
          </h2>
          <p className="text-white/55 leading-relaxed text-sm">{user.bio}</p>
        </div>

        {/* Activity */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-indigo-500 rounded-full" />
            Recent Activity
          </h2>
          <ul className="space-y-3">
            {user.activities.map((activity, idx) => (
              <li
                key={activity.id}
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-colors duration-150"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center text-lg flex-shrink-0">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white/80 text-sm font-medium">{activity.description}</p>
                  <p className="text-white/30 text-xs mt-0.5">{activity.timestamp}</p>
                </div>
                <span className="text-white/20 text-xs">→</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersDetails;