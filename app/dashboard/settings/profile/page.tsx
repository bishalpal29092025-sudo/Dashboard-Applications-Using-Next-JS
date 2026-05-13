"use client";

import Image from "next/image";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Profile Settings
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Profile</h1>
          <p className="text-white/60 mt-2">Update your public profile and personal information.</p>
        </div>

        {/* Avatar card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-violet-400 rounded-full" />
            Profile Picture
          </h2>
          <div className="flex items-center gap-6">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 scale-110 blur-sm opacity-60" />
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-violet-400/50">
                <Image
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <p className="text-white/70 text-sm font-medium mb-1">John Doe</p>
              <p className="text-white/30 text-xs mb-4">JPG, PNG or GIF · Max 5MB</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30">
                  Change Photo
                </button>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white/50 hover:text-white rounded-xl text-sm font-medium transition-all duration-200">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile info */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-400 rounded-full" />
            Profile Information
          </h2>
          <div className="space-y-5">
            {[
              { id: "full-name", label: "Full Name", type: "text", value: "John Doe" },
              { id: "username", label: "Username", type: "text", value: "john_doe" },
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-violet-400/60 focus:bg-white/15 transition-all duration-200 text-sm"
                />
              </div>
            ))}
            <div>
              <label htmlFor="bio" className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                rows={3}
                defaultValue="Admin at Example Corp. Passionate about technology and great UX."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-violet-400/60 focus:bg-white/15 transition-all duration-200 text-sm resize-none"
              />
            </div>
          </div>
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

export default Profile;