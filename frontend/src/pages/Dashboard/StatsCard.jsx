const StatsCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        {Icon && (
          <div className="p-2.5 bg-gray-50 rounded-lg">
            <Icon size={20} className="text-[#6C5CE7]" strokeWidth={2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
