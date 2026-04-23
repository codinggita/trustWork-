import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Wallet, Lock, CheckCircle2, ArrowUpRight, History, Plus } from "lucide-react";
import PaymentCard from "./PaymentCard";
import PaymentSummary from "./PaymentSummary";

const initialPayments = [
  { id: 1, projectName: "E-commerce Redesign", client: "Fashion Hub", amount: 1500, status: "released", type: "Full Payment", date: "Oct 22, 2026" },
  { id: 2, projectName: "Mobile App MVP", client: "Tech Start", amount: 4500, status: "locked", type: "Milestone", date: "Oct 24, 2026" },
  { id: 3, projectName: "SEO Campaign", client: "Local Biz", amount: 800, status: "pending", type: "Milestone", date: "Oct 25, 2026" },
  { id: 4, projectName: "Brand Identity", client: "Agency X", amount: 1200, status: "released", type: "Full Payment", date: "Oct 18, 2026" },
  { id: 5, projectName: "UI/UX Audit", client: "SaaS Corp", amount: 2000, status: "locked", type: "Milestone", date: "Oct 26, 2026" },
  { id: 6, projectName: "Backend API", client: "Cloud Soft", amount: 3000, status: "released", type: "Full Payment", date: "Oct 15, 2026" },
];

const Payments = () => {
  // Use state so we can simulate empty state if needed
  const [payments] = useState(initialPayments);

  const totals = {
    earnings: payments.reduce((acc, p) => acc + p.amount, 0),
    locked: payments.filter(p => p.status === "locked").reduce((acc, p) => acc + p.amount, 0),
    released: payments.filter(p => p.status === "released").reduce((acc, p) => acc + p.amount, 0),
  };

  const handleWithdraw = () => {
    toast.success("Withdrawal requested successfully!", {
      duration: 3000,
      style: {
        borderRadius: '16px',
        background: '#1F2937',
        color: '#fff',
        padding: '16px 24px',
        fontSize: '15px',
        fontWeight: '700'
      },
      iconTheme: {
        primary: '#6C5CE7',
        secondary: '#fff',
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-24 animate-in fade-in duration-700">
      <Toaster position="top-right" />
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C5CE7] opacity-[0.02] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Payments</h1>
          <p className="text-gray-500 font-bold mt-1.5 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#6C5CE7] rounded-full animate-pulse" />
            Manage your escrow earnings and withdrawals.
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(108, 92, 231, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWithdraw}
          className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-[#6C5CE7] text-white font-black rounded-2xl shadow-xl shadow-indigo-100 transition-all"
        >
          <Wallet size={20} strokeWidth={3} />
          Withdraw Funds
        </motion.button>
      </div>

      {/* SECTION 1: OVERVIEW */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="p-2 bg-indigo-50 rounded-xl">
            <History size={22} className="text-[#6C5CE7]" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Overview</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PaymentSummary 
            title="Total Earnings" 
            value={`$${totals.earnings.toLocaleString()}`} 
            icon={CheckCircle2} 
            color="bg-indigo-500" 
          />
          <PaymentSummary 
            title="Locked in Escrow" 
            value={`$${totals.locked.toLocaleString()}`} 
            icon={Lock} 
            color="bg-orange-500" 
          />
          <PaymentSummary 
            title="Released Payments" 
            value={`$${totals.released.toLocaleString()}`} 
            icon={ArrowUpRight} 
            color="bg-emerald-500" 
          />
        </div>
      </section>

      {/* SECTION 2: TRANSACTIONS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Transactions</h2>
          <span className="text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
            {payments.length} Records
          </span>
        </div>

        <div className="space-y-5">
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <PaymentCard key={payment.id} payment={payment} index={index} />
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 flex flex-col items-center justify-center bg-white rounded-[40px] border-2 border-dashed border-gray-100 shadow-inner"
            >
              <div className="w-64 h-64 mb-6">
                <DotLottieReact
                  src="https://lottie.host/8040d75a-4796-4177-a877-e23a4192b04f/VnI1G4m6fL.json"
                  loop
                  autoplay
                />
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">No payments yet</h3>
              <p className="text-gray-500 font-bold mt-2 mb-8 max-w-xs text-center leading-relaxed">
                Start working on projects to see your earnings and escrow records here.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:bg-gray-800 transition-all">
                <Plus size={18} strokeWidth={3} />
                Find Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Payments;
