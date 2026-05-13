"use client";

const Account = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Account Settings
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Account</h1>
          <p className="text-white/60 mt-2">Manage your profile info and security credentials.</p>
        </div>

        {/* Profile Information */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-purple-400 rounded-full" />
            Profile Information
          </h2>
          <div className="space-y-5">
            {[
              { id: "full-name", label: "Full Name", type: "text", value: "John Doe" },
              { id: "email", label: "Email Address", type: "email", value: "john.doe@example.com" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  defaultValue={field.value}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-purple-400/60 focus:bg-white/15 transition-all duration-200 text-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-400 rounded-full" />
            Security
          </h2>
          <div className="space-y-5">
            {[
              { id: "password", label: "New Password", placeholder: "Enter new password" },
              { id: "confirm-password", label: "Confirm Password", placeholder: "Confirm new password" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                  {field.label}
                </label>
                <input
                  type="password"
                  id={field.id}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-blue-400/60 focus:bg-white/15 transition-all duration-200 text-sm"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-white/30 text-xs">Use at least 8 characters including uppercase, numbers, and special characters.</p>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-500/10 border border-red-500/25 rounded-2xl p-6">
          <h2 className="text-base font-semibold text-red-400 mb-1">Danger Zone</h2>
          <p className="text-white/40 text-sm mb-4">Permanently delete your account and all associated data.</p>
          <button className="px-4 py-2 bg-red-500/15 hover:bg-red-500/30 text-red-400 border border-red-500/30 rounded-xl text-sm font-medium transition-all duration-200">
            Delete Account
          </button>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-2">
          <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white/60 hover:text-white rounded-xl text-sm font-medium transition-all duration-200">
            Cancel
          </button>
          <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;