"use client";

import { useState } from "react";

type NotifKey = "emailNotifications" | "smsNotifications" | "pushNotifications" | "weeklyDigest" | "securityAlerts";

const Notifications = () => {
  const [toggles, setToggles] = useState<Record<NotifKey, boolean>>({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    weeklyDigest: true,
    securityAlerts: true,
  });

  const toggle = (key: NotifKey) =>
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  const notificationGroups = [
    {
      title: "Channels",
      accent: "bg-purple-400",
      items: [
        { key: "emailNotifications" as NotifKey, icon: "✉️", label: "Email Notifications", desc: "Receive updates and alerts via email." },
        { key: "smsNotifications" as NotifKey, icon: "💬", label: "SMS Notifications", desc: "Get text messages for critical events." },
        { key: "pushNotifications" as NotifKey, icon: "🔔", label: "Push Notifications", desc: "Browser and mobile push alerts." },
      ],
    },
    {
      title: "Content",
      accent: "bg-blue-400",
      items: [
        { key: "weeklyDigest" as NotifKey, icon: "📋", label: "Weekly Digest", desc: "A summary of activity delivered every Monday." },
        { key: "securityAlerts" as NotifKey, icon: "🛡️", label: "Security Alerts", desc: "Instant alerts for logins and security events." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Notifications
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Notifications</h1>
          <p className="text-white/60 mt-2">Choose how and when you want to be notified.</p>
        </div>

        {/* Toggle groups */}
        {notificationGroups.map((group) => (
          <div key={group.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
            <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <span className={`w-1 h-5 ${group.accent} rounded-full`} />
              {group.title}
            </h2>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors duration-150 cursor-pointer"
                  onClick={() => toggle(item.key)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">{item.label}</p>
                      <p className="text-white/35 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  {/* Toggle pill */}
                  <div
                    className={`relative w-11 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ml-4 ${
                      toggles[item.key] ? "bg-indigo-500" : "bg-white/15"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
                        toggles[item.key] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Status summary */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center text-base flex-shrink-0">
            📊
          </div>
          <p className="text-white/50 text-sm">
            <span className="text-white/80 font-semibold">
              {Object.values(toggles).filter(Boolean).length}
            </span>{" "}
            of {Object.values(toggles).length} notification channels are currently enabled.
          </p>
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

export default Notifications;