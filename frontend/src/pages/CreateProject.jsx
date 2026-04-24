import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProject } from "../store/slices/projectSlice";
import { Plus, Trash2, Calendar, DollarSign, Briefcase, ChevronRight, Save } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const CreateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [category, setCategory] = useState("Development");
  const [milestones, setMilestones] = useState([{ id: 1, title: "", amount: "", deadline: "" }]);

  const addMilestone = () => setMilestones([...milestones, { id: Date.now(), title: "", amount: "", deadline: "" }]);
  const removeMilestone = (id) => setMilestones(milestones.filter(m => m.id !== id));

  const updateMilestone = (id, field, value) => {
    setMilestones(milestones.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!name || !client || milestones.some(m => !m.title || !m.amount)) {
      return toast.error("Please fill all required fields");
    }

    const totalAmount = milestones.reduce((acc, m) => acc + Number(m.amount), 0);
    dispatch(addProject({ name, client, category, milestones, totalAmount }));
    
    toast.success("Project Created & Escrow Locked!", {
      duration: 4000,
      style: { borderRadius: '16px', background: '#1F2937', color: '#fff' }
    });
    
    setTimeout(() => navigate("/projects"), 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-24 animate-in slide-in-from-bottom-4 duration-700">
      <Toaster position="top-right" />
      
      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Create New Contract</h1>
        <p className="text-gray-500 font-bold mt-1.5 italic">Define milestones and lock funds in escrow.</p>
      </div>

      <form onSubmit={handleCreate} className="space-y-8">
        {/* Basic Info */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-[#6C5CE7]" size={20} />
            <h2 className="text-xl font-black text-gray-900">Project Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Project Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="e.g. Mobile App Redesign" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold focus:border-[#6C5CE7] transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Client Name</label>
              <input value={client} onChange={(e) => setClient(e.target.value)} type="text" placeholder="e.g. Acme Corp" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold focus:border-[#6C5CE7] transition-all outline-none" />
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Plus className="text-[#6C5CE7]" size={20} />
              <h2 className="text-xl font-black text-gray-900">Milestones & Payments</h2>
            </div>
            <button type="button" onClick={addMilestone} className="text-[#6C5CE7] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-70">
              <Plus size={16} /> Add Milestone
            </button>
          </div>

          <div className="space-y-4">
            {milestones.map((m, index) => (
              <div key={m.id} className="p-6 bg-gray-50 rounded-[24px] border border-gray-100 space-y-4 relative group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-6 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase">Title</label>
                    <input value={m.title} onChange={(e) => updateMilestone(m.id, 'title', e.target.value)} type="text" placeholder="Milestone Name" className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl font-bold outline-none" />
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase">Amount ($)</label>
                    <input value={m.amount} onChange={(e) => updateMilestone(m.id, 'amount', e.target.value)} type="number" placeholder="0.00" className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl font-bold outline-none" />
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase">Deadline</label>
                    <input value={m.deadline} onChange={(e) => updateMilestone(m.id, 'deadline', e.target.value)} type="date" className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl font-bold outline-none" />
                  </div>
                </div>
                {milestones.length > 1 && (
                  <button type="button" onClick={() => removeMilestone(m.id)} className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-rose-100 text-rose-500 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all">
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="text-gray-400 font-bold flex items-center gap-2">
            <DollarSign size={20} />
            Total Escrow Amount: <span className="text-gray-900 text-xl font-black">${milestones.reduce((acc, m) => acc + Number(m.amount || 0), 0)}</span>
          </div>
          <button type="submit" className="px-10 py-4 bg-[#6C5CE7] text-white font-black rounded-2xl shadow-xl shadow-[#6C5CE7]/30 flex items-center gap-3 hover:scale-105 transition-all">
            <Save size={20} /> Create Project & Lock Funds
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
