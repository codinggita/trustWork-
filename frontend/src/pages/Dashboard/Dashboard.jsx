import { Briefcase, Clock, CheckCircle, FolderKanban, Plus } from "lucide-react";
import StatsCard from "./StatsCard";
import RecentProjects from "./RecentProjects";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Here's what's happening with your projects today.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#6C5CE7] hover:bg-[#5b4bc4] text-white text-sm font-semibold rounded-xl shadow-sm shadow-[#6C5CE7]/30 transition-all active:scale-[0.98]">
          <Plus size={18} strokeWidth={2.5} />
          Create Project
        </button>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard title="Total Projects" value="24" icon={FolderKanban} />
        <StatsCard title="Active Projects" value="12" icon={Briefcase} />
        <StatsCard title="Pending Projects" value="5" icon={Clock} />
        <StatsCard title="Completed Projects" value="7" icon={CheckCircle} />
      </div>

      {/* Recent Projects Table */}
      <div className="mt-8">
        <RecentProjects />
      </div>
    </div>
  );
};

export default Dashboard;
