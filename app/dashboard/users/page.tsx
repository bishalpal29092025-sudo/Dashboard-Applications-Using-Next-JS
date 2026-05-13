import Link from "next/link";

const Users = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 p-8 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            User Management
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-3 tracking-tight">
            Users
          </h1>
          <p className="text-lg text-white/60">
            Manage your users — view details or browse the full list.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* BUG FIX: was /dashboard/users/users-details — correct path is user-details */}
          <Link
            href="/dashboard/users/user-details"
            className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-teal-500/20 border border-teal-400/30 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                👤
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">User Details</h2>
              <p className="text-white/60 leading-relaxed">
                View detailed information, activity history, and profile data for each user.
              </p>
              <div className="mt-6 flex items-center gap-2 text-teal-400 text-sm font-medium">
                View Details
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </div>
          </Link>

          {/* BUG FIX: was /dashboard/users/users-list — correct path is user-list */}
          <Link
            href="/dashboard/users/user-list"
            className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-orange-500/20 border border-orange-400/30 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                👥
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">User List</h2>
              <p className="text-white/60 leading-relaxed">
                Browse, filter, and manage all users registered in the system.
              </p>
              <div className="mt-6 flex items-center gap-2 text-orange-400 text-sm font-medium">
                Browse All
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { label: "Total Users", value: "6", color: "text-blue-400" },
            { label: "Active", value: "2", color: "text-green-400" },
            { label: "Suspended", value: "2", color: "text-red-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;