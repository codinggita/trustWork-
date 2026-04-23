import { useState, useEffect } from "react";
import { Plus, Loader2, FolderKanban, Sparkles } from "lucide-react";
import ProjectRow from "./ProjectRow";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("All Projects");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch project data");
        const data = await res.json();
        
        const mapped = data.products.map((item, index) => {
          let status = "Completed";
          let progress = 100;
          if (index < 5) {
            status = "Active";
            progress = Math.floor(Math.random() * 60) + 20;
          } else if (index >= 5 && index < 10) {
            status = "Pending";
            progress = 0;
          }

          return {
            id: item.id,
            name: item.title,
            category: item.category,
            amount: `$${item.price.toFixed(2)}`,
            status,
            progress
          };
        });

        setProjects(mapped);
        setFilteredProjects(mapped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleFilter = (tab) => {
    setActiveTab(tab);
    if (tab === "All Projects") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.status === tab));
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-24 min-h-[500px]">
      <Loader2 size={44} className="text-[#6C5CE7] animate-spin mb-5" />
      <p className="text-gray-500 font-bold tracking-tight">Syncing your projects...</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Projects</h1>
          <p className="text-[15px] text-gray-500 mt-1.5 font-semibold">Track and manage all your active escrow contracts in one place.</p>
        </div>
        <button 
          onClick={() => alert("Navigate to Create Project Page")}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#6C5CE7] to-[#8A7DF2] text-white text-[15px] font-extrabold rounded-xl shadow-[0_8px_16px_-4px_rgba(108,92,231,0.4)] transition-all hover:-translate-y-0.5 active:scale-95"
        >
          <Plus size={20} strokeWidth={3} />
          Create Project
        </button>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-white/50 px-2 rounded-t-2xl">
        {["All Projects", "Active", "Pending", "Completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleFilter(tab)}
            className={`px-8 py-4.5 text-[15px] font-extrabold transition-all relative ${
              activeTab === tab 
                ? "text-[#6C5CE7]" 
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[3.5px] bg-[#6C5CE7] rounded-t-full shadow-[0_-2px_10px_rgba(108,92,231,0.5)]" />
            )}
          </button>
        ))}
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-4 pt-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))
        ) : (
          <div className="py-24 text-center bg-white rounded-[32px] border-2 border-dashed border-gray-100">
            <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-gray-100 shadow-inner">
              <FolderKanban size={32} className="text-gray-200" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">No projects found</h3>
            <p className="text-gray-500 mb-10 max-w-xs mx-auto font-medium">Try adjusting your filters or create a new project to start working.</p>
            <button 
              onClick={() => alert("Navigate to Create Project Page")}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:bg-gray-800 transition-all active:scale-95"
            >
              <Plus size={18} strokeWidth={3} />
              Create Your First Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
