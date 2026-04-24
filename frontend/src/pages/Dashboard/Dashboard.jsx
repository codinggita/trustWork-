import { useSelector } from "react-redux";
import { Plus, LayoutGrid, FolderKanban, Clock, CheckCircle, AlertCircle } from "lucide-react";
import StatsCard from "./Dashboard/StatsCard";
import RecentProjects from "./Dashboard/RecentProjects";

const Dashboard = () => {
  const { projects } = useSelector((state) => state.projects);

  const stats = {
    total: projects.length,
    active: projects.filter(p => p.status === "Active").length,
    pending: projects.filter(p => p.status === "Pending").length,
    completed: projects.filter(p => p.status === "Completed").length,
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C5CE7] opacity-[0.02] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Escrow Overview</h1>
          <p className="text-gray-500 font-bold mt-1">Real-time status of your connected system.</p>
        </div>
        <button className="relative z-10 inline-flex items-center gap-2 px-6 py-3.5 bg-[#6C5CE7] text-white font-black rounded-2xl shadow-xl hover:scale-[1.02] transition-all">
          <Plus size={20} strokeWidth={3} /> Create Project
        </button>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <LayoutGrid size={22} className="text-[#6C5CE7]" />
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">System Metrics</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCard title="Total Projects" value={stats.total} icon={FolderKanban} color="bg-indigo-500" />
          <StatsCard title="Active Work" value={stats.active} icon={Clock} color="bg-emerald-500" />
          <StatsCard title="Pending" value={stats.pending} icon={AlertCircle} color="bg-orange-500" />
          <StatsCard title="Completed" value={stats.completed} icon={CheckCircle} color="bg-purple-500" />
        </div>
      </section>

      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
        <RecentProjects projects={projects.slice(0, 5)} />
      </div>
    </div>
  );
};

export default Dashboard;
