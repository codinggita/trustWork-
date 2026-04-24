import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Wallet, Lock, CheckCircle2, ArrowUpRight, History } from "lucide-react";
import PaymentCard from "./PaymentCard";
import PaymentSummary from "./PaymentSummary";

const Payments = () => {
  const { payments } = useSelector((state) => state.projects);

  const totals = {
    earnings: payments.filter(p => p.status === "Completed").reduce((acc, p) => acc + p.amount, 0),
    locked: payments.filter(p => p.status === "Locked").reduce((acc, p) => acc + p.amount, 0),
    released: payments.filter(p => p.status === "Completed").reduce((acc, p) => acc + p.amount, 0),
  };

  const handleWithdraw = () => {
    toast.success("Real withdrawal logic requires connected wallet", {
      style: { borderRadius: '16px', background: '#1F2937', color: '#fff' }
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-24 animate-in fade-in duration-700">
      <Toaster position="top-right" />
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Escrow Ledger</h1>
          <p className="text-gray-500 font-bold mt-1.5 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#6C5CE7] rounded-full animate-pulse" />
            Verified transactions from your active projects.
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWithdraw}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#6C5CE7] text-white font-black rounded-2xl shadow-xl transition-all"
        >
          <Wallet size={20} /> Withdraw Earnings
        </motion.button>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="p-2 bg-indigo-50 rounded-xl">
            <History size={22} className="text-[#6C5CE7]" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Escrow Summary</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PaymentSummary title="Total Earnings" value={`$${totals.earnings}`} icon={CheckCircle2} color="bg-indigo-500" />
          <PaymentSummary title="Locked in Escrow" value={`$${totals.locked}`} icon={Lock} color="bg-orange-500" />
          <PaymentSummary title="Released" value={`$${totals.released}`} icon={ArrowUpRight} color="bg-emerald-500" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight px-2">Transaction History</h2>
        <div className="space-y-5">
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <PaymentCard key={payment.id} payment={{...payment, projectName: "Project Transaction"}} index={index} />
            ))
          ) : (
            <div className="py-20 text-center bg-white rounded-[40px] border border-gray-100 italic font-bold text-gray-400">
              No transactions recorded in the system ledger.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Payments;
