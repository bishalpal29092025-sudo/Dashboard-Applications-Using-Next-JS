"use client";

const UsersList = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active", avatar: "JD" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Editor", status: "Inactive", avatar: "JS" },
    { id: 3, name: "Sam Brown", email: "sam.brown@example.com", role: "User", status: "Suspended", avatar: "SB" },
    { id: 4, name: "Emily Johnson", email: "emily.johnson@example.com", role: "Admin", status: "Active", avatar: "EJ" },
    { id: 5, name: "Michael Brown", email: "michael.brown@example.com", role: "Editor", status: "Inactive", avatar: "MB" },
    { id: 6, name: "Sarah Davis", email: "sarah.davis@example.com", role: "User", status: "Suspended", avatar: "SD" },
  ];

  const statusConfig: Record<string, { dot: string; badge: string; label: string }> = {
    Active:    { dot: "bg-emerald-400", badge: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30", label: "Active" },
    Inactive:  { dot: "bg-amber-400",   badge: "bg-amber-400/15 text-amber-400 border-amber-400/30",     label: "Inactive" },
    Suspended: { dot: "bg-rose-400",    badge: "bg-rose-400/15 text-rose-400 border-rose-400/30",         label: "Suspended" },
  };

  const roleColors: Record<string, string> = {
    Admin:  "bg-violet-500/20 text-violet-300 border-violet-400/30",
    Editor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    User:   "bg-slate-500/20 text-slate-300 border-slate-400/30",
  };

  const avatarColors = [
    "from-purple-500 to-indigo-600",
    "from-rose-500 to-pink-600",
    "from-amber-500 to-orange-600",
    "from-teal-500 to-cyan-600",
    "from-blue-500 to-indigo-600",
    "from-green-500 to-emerald-600",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-8 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full border border-white/10 mb-3">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
              Total {users.length} users
            </div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Users List</h1>
            <p className="text-white/50 mt-1">Browse and manage all registered users.</p>
          </div>
          <button className="self-start sm:self-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 text-sm">
            + Add User
          </button>
        </div>

        {/* Table card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-4 px-6 text-left text-xs font-semibold text-white/40 uppercase tracking-widest">User</th>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-white/40 uppercase tracking-widest">Email</th>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-white/40 uppercase tracking-widest">Role</th>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-white/40 uppercase tracking-widest">Status</th>
                  <th className="py-4 px-6 text-center text-xs font-semibold text-white/40 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => {
                  const s = statusConfig[user.status];
                  return (
                    <tr
                      key={user.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors duration-150 group"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                            {user.avatar}
                          </div>
                          <span className="text-white font-medium">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-white/50 text-sm">{user.email}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${roleColors[user.role]}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium border ${s.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                          {s.label}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <button className="px-3 py-1.5 text-white/60 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 rounded-lg text-xs font-medium transition-all duration-200">
                            Edit
                          </button>
                          <button className="px-3 py-1.5 text-indigo-300 hover:text-white bg-indigo-500/20 hover:bg-indigo-500 border border-indigo-400/30 rounded-lg text-xs font-medium transition-all duration-200">
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;