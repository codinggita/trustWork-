import { motion } from "framer-motion";
import { Info } from "lucide-react";

const PaymentCard = ({ payment, index }) => {
  const getStatusInfo = (status) => {
    switch (status) {
      case "locked": 
        return { 
          label: "Locked", 
          color: "bg-orange-50 text-orange-600 border-orange-100", 
          desc: "Funds are held in escrow" 
        };
      case "released": 
        return { 
          label: "Released", 
          color: "bg-emerald-50 text-emerald-600 border-emerald-100", 
          desc: "Payment completed" 
        };
      default: 
        return { 
          label: "Pending", 
          color: "bg-gray-100 text-gray-500 border-gray-200", 
          desc: "Waiting for client approval" 
        };
    }
  };

  const statusInfo = getStatusInfo(payment.status);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.01 }}
      className="bg-white p-6 rounded-[22px] border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-lg transition-all group"
    >
      {/* LEFT: Project Info */}
      <div className="flex items-center gap-5 md:w-1/3">
        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center font-black text-gray-400 group-hover:bg-[#6C5CE7] group-hover:text-white transition-all duration-300">
          {payment.projectName.charAt(0)}
        </div>
        <div>
          <h3 className="text-[16px] font-black text-gray-900 line-clamp-1 leading-tight">{payment.projectName}</h3>
          <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest mt-1">{payment.client}</p>
        </div>
      </div>

      {/* CENTER: Amount */}
      <div className="flex flex-col md:w-1/4">
        <span className="text-xl font-black text-gray-900 tracking-tight">${payment.amount.toLocaleString()}</span>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{payment.type}</span>
      </div>

      {/* RIGHT: Status & Date */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:justify-end gap-6 md:w-2/5">
        <div className="flex flex-col items-start md:items-end">
          <span className={`px-4 py-1 rounded-full text-[11px] font-black border uppercase tracking-wider ${statusInfo.color}`}>
            {statusInfo.label}
          </span>
          <span className="text-[10px] font-bold text-gray-400 mt-2 flex items-center gap-1.5 italic">
            <Info size={12} className="shrink-0" />
            {statusInfo.desc}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-[13px] font-bold text-gray-500">{payment.date}</span>
          <button 
            onClick={() => alert(`Transaction Details:\n\nProject: ${payment.projectName}\nStatus: ${statusInfo.label}\nInfo: ${statusInfo.desc}`)}
            className="px-5 py-2.5 bg-gray-50 hover:bg-[#6C5CE7] hover:text-white text-gray-700 font-extrabold text-[13px] rounded-xl transition-all border border-gray-100 active:scale-95"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentCard;
