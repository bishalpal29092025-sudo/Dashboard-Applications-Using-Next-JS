"use client";

import { useState } from "react";

type Status = "In Progress" | "Pending" | "Completed";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it.",
      status: "In Progress" as Status,
      dueDate: "2025-02-18",
    },
    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes.",
      status: "Pending" as Status,
      dueDate: "2025-02-20",
    },
    {
      id: 3,
      title: "Team meeting",
      description: "Discuss the project milestones and progress with the team.",
      status: "Completed" as Status,
      dueDate: "2025-02-15",
    },
  ]);

  const markComplete = (id: number) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "Completed" as Status } : t))
    );

  const deleteTask = (id: number) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const statusConfig: Record<Status, { badge: string; dot: string; bar: string }> = {
    "Completed":   { badge: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30", dot: "bg-emerald-400", bar: "bg-gradient-to-r from-emerald-600 to-teal-500" },
    "In Progress": { badge: "bg-amber-400/15 text-amber-400 border-amber-400/30",       dot: "bg-amber-400 animate-pulse", bar: "bg-gradient-to-r from-amber-600 to-yellow-500" },
    "Pending":     { badge: "bg-red-400/15 text-red-400 border-red-400/30",             dot: "bg-red-400", bar: "bg-gradient-to-r from-rose-600 to-red-500" },
  };

  const counts = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "Completed").length,
    inProgress: tasks.filter((t) => t.status === "In Progress").length,
    pending: tasks.filter((t) => t.status === "Pending").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-900 p-8 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-5xl mx-auto relative z-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Task Manager
            </div>
            <h1 className="text-5xl font-extrabold text-white tracking-tight">Tasks</h1>
            <p className="text-white/60 mt-2">Track, manage, and complete your work.</p>
          </div>
          <button className="self-start sm:self-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 text-sm flex-shrink-0">
            + New Task
          </button>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total", value: counts.total, color: "text-white" },
            { label: "Completed", value: counts.completed, color: "text-emerald-400" },
            { label: "In Progress", value: counts.inProgress, color: "text-amber-400" },
            { label: "Pending", value: counts.pending, color: "text-red-400" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
              <div className={`text-2xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-white/60 text-sm">Overall Progress</span>
            <span className="text-white/80 text-sm font-semibold">
              {counts.total > 0 ? Math.round((counts.completed / counts.total) * 100) : 0}%
            </span>
          </div>
          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full transition-all duration-700"
              style={{ width: `${counts.total > 0 ? (counts.completed / counts.total) * 100 : 0}%` }}
            />
          </div>
        </div>

        {/* Task list */}
        <div className="space-y-4">
          {tasks.map((task) => {
            const s = statusConfig[task.status];
            return (
              <div
                key={task.id}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Top colored bar */}
                <div className={`h-1 w-16 rounded-full ${s.bar} mb-4`} />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className={`text-lg font-bold text-white ${task.status === "Completed" ? "line-through text-white/40" : ""}`}>
                        {task.title}
                      </h2>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${s.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        {task.status}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm">{task.description}</p>
                    <p className="text-white/30 text-xs mt-2 flex items-center gap-1">
                      🗓 Due {task.dueDate}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white/60 hover:text-white rounded-xl text-xs font-medium transition-all duration-200">
                      Edit
                    </button>
                    {task.status !== "Completed" && (
                      <button
                        onClick={() => markComplete(task.id)}
                        className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500 border border-emerald-400/30 text-emerald-400 hover:text-white rounded-xl text-xs font-medium transition-all duration-200"
                      >
                        ✓ Complete
                      </button>
                    )}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="px-4 py-2 bg-red-500/10 hover:bg-red-500/30 border border-red-400/20 text-red-400 rounded-xl text-xs font-medium transition-all duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {tasks.length === 0 && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
              <div className="text-4xl mb-3">✅</div>
              <p className="text-white/50 font-medium">All tasks complete!</p>
              <p className="text-white/30 text-sm mt-1">Add a new task to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;