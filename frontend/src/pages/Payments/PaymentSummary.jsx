import { motion } from "framer-motion";

const PaymentSummary = ({ title, value, icon: Icon, color }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-7 rounded-[28px] border border-gray-100 shadow-sm group hover:border-[#6C5CE7]/40 transition-all duration-300 relative overflow-hidden"
    >
      <div className={`absolute -top-10 -right-10 w-32 h-32 ${color} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700`} />
      
      <div className="relative z-10">
        <div className={`w-14 h-14 ${color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
          <Icon size={28} className={color.replace('bg-', 'text-')} strokeWidth={2.5} />
        </div>
        <h4 className="text-gray-400 font-black text-[12px] uppercase tracking-widest">{title}</h4>
        <p className="text-4xl font-black text-gray-900 mt-2 tracking-tighter">{value}</p>
      </div>
    </motion.div>
  );
};

export default PaymentSummary;
