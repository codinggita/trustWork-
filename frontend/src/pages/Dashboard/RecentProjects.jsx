const projects = [
  { id: 1, name: "Website Redesign", status: "Active", deadline: "Oct 24, 2026", amount: "$1,200" },
  { id: 2, name: "Mobile App MVP", status: "Pending", deadline: "Nov 02, 2026", amount: "$3,500" },
  { id: 3, name: "SEO Optimization", status: "Completed", deadline: "Sep 15, 2026", amount: "$800" },
  { id: 4, name: "Logo Design", status: "Active", deadline: "Oct 28, 2026", amount: "$450" },
];

const badgeColors = {
  Active: "bg-emerald-50 text-emerald-600 ring-emerald-600/20",
  Pending: "bg-orange-50 text-orange-600 ring-orange-600/20",
  Completed: "bg-[#6C5CE7]/10 text-[#6C5CE7] ring-[#6C5CE7]/20",
};

const RecentProjects = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight">Recent Projects</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Project Name</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Deadline</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{project.name}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ring-1 ring-inset ${badgeColors[project.status]}`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{project.deadline}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{project.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProjects;
