import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldAlert, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  Search, 
  Filter, 
  ChevronRight,
  AlertCircle,
  FileText,
  User,
  ExternalLink
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const initialDisputes = [
  {
    id: "DSP-4921",
    projectName: "Food Delivery App UI",
    client: "QuickEats Inc.",
    freelancer: "Abdul Haque",
    amount: 1200,
    status: "Active",
    reason: "Missing core features in milestone 2",
    date: "Oct 20, 2026",
    priority: "High"
  },
  {
    id: "DSP-3810",
    projectName: "Custom CRM Integration",
    client: "Global Logistics",
    freelancer: "Sarah Chen",
    amount: 2500,
    status: "Pending",
    reason: "Delayed response for feedback",
    date: "Oct 22, 2026",
    priority: "Medium"
  },
  {
    id: "DSP-2755",
    projectName: "E-commerce SEO",
    client: "Niche Boutique",
    freelancer: "Mike Ross",
    amount: 800,
    status: "Resolved",
    reason: "Misalignment on target keywords",
    date: "Oct 15, 2026",
    priority: "Low"
  }
];

const Disputes = () => {
  const [disputes] = useState(initialDisputes);
  const [activeTab, setActiveTab] = useState("All");

  const filteredDisputes = activeTab === "All" 
    ? disputes 
    : disputes.filter(d => d.status === activeTab);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active": return "bg-rose-50 text-rose-600 border-rose-100";
      case "Pending": return "bg-amber-50 text-amber-600 border-amber-100";
      case "Resolved": return "bg-emerald-50 text-emerald-600 border-emerald-100";
      default: return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High": return "text-rose-500 bg-rose-50";
      case "Medium": return "text-amber-500 bg-amber-50";
      case "Low": return "text-blue-500 bg-blue-50";
      default: return "text-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-24 animate-in fade-in duration-700">
      <Toaster position="top-right" />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 opacity-[0.02] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight flex items-center gap-3">
            Disputes
            <span className="text-sm font-bold bg-rose-50 text-rose-500 px-3 py-1 rounded-full border border-rose-100">
              {disputes.filter(d => d.status === "Active").length} Active
            </span>
          </h1>
          <p className="text-gray-500 font-bold mt-1.5 flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            Resolve conflicts and manage escrow claims.
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => toast.error("New Dispute creation disabled in demo", {
            style: { borderRadius: '16px', background: '#1F2937', color: '#fff' }
          })}
          className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-black rounded-2xl shadow-xl transition-all"
        >
          <ShieldAlert size={20} />
          Report Issue
        </motion.button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Disputes", count: 1, icon: AlertCircle, color: "text-rose-500", bg: "bg-rose-50" },
          { label: "Pending Resolution", count: 1, icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
          { label: "Resolved Cases", count: 1, icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center`}>
              <stat.icon size={28} className={stat.color} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-black text-gray-900">{stat.count}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* FILTERS & LIST */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
            {["All", "Active", "Pending", "Resolved"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab 
                    ? "bg-[#6C5CE7] text-white shadow-md" 
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search disputes..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/10 focus:border-[#6C5CE7] transition-all"
            />
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredDisputes.map((dispute, index) => (
              <motion.div
                key={dispute.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#6C5CE7]/20 transition-all flex flex-col lg:flex-row items-start lg:items-center gap-6"
              >
                {/* ID & Project */}
                <div className="flex items-center gap-5 lg:w-1/4">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#6C5CE7] group-hover:text-white transition-all duration-300">
                    <ShieldAlert size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{dispute.id}</span>
                    <h3 className="text-lg font-black text-gray-900 leading-tight line-clamp-1">{dispute.projectName}</h3>
                    <p className="text-xs font-bold text-gray-500 mt-0.5">{dispute.date}</p>
                  </div>
                </div>

                {/* Amount & Parties */}
                <div className="flex flex-col gap-3 lg:w-1/3">
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Escrow Amount</p>
                      <p className="text-lg font-black text-gray-900">${dispute.amount}</p>
                    </div>
                    <div className="w-px h-8 bg-gray-100" />
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Priority</p>
                      <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${getPriorityStyle(dispute.priority)}`}>
                        {dispute.priority}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <User size={14} />
                    <span>{dispute.client}</span>
                    <ChevronRight size={12} className="text-gray-300" />
                    <span>{dispute.freelancer}</span>
                  </div>
                </div>

                {/* Reason */}
                <div className="lg:flex-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Reason for Dispute</p>
                  <p className="text-sm font-semibold text-gray-700 leading-relaxed italic border-l-4 border-gray-100 pl-4">
                    "{dispute.reason}"
                  </p>
                </div>

                {/* Status & Action */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto gap-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black border uppercase tracking-widest ${getStatusStyle(dispute.status)}`}>
                    {dispute.status}
                  </span>
                  <button 
                    onClick={() => toast.success(`Opening Case ${dispute.id}`, {
                      style: { borderRadius: '16px', background: '#1F2937', color: '#fff' }
                    })}
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#6C5CE7] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#6C5CE7]/20 transition-all hover:bg-[#5A4ED1] active:scale-95"
                  >
                    View Case
                    <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER TIP */}
      <div className="bg-indigo-50/50 p-6 rounded-[28px] border border-indigo-100 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
          <FileText className="text-[#6C5CE7]" />
        </div>
        <div>
          <h4 className="font-black text-gray-900">How Disputes Work</h4>
          <p className="text-sm text-gray-500 font-semibold mt-1">Our resolution center ensures both parties have 7 days to provide evidence before manual review.</p>
        </div>
        <button className="sm:ml-auto px-6 py-2 bg-white border border-indigo-100 text-[#6C5CE7] text-xs font-bold rounded-xl hover:bg-white transition-all shadow-sm">
          Resolution Policy
        </button>
      </div>
    </div>
  );
};

export default Disputes;
