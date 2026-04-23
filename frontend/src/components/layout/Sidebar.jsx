import { NavLink } from "react-router-dom";
import { LayoutDashboard, FolderKanban, CreditCard, ShieldAlert, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", path: "/projects", icon: FolderKanban },
  { label: "Payments", path: "/payments", icon: CreditCard },
  { label: "Disputes", path: "/disputes", icon: ShieldAlert },
  { label: "Settings", path: "/settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 h-screen w-[250px] bg-white border-r border-gray-200/60 flex flex-col">
      <div className="flex items-center gap-3 px-6 h-16 border-b border-gray-200/60">
        <div className="w-8 h-8 rounded-lg bg-[#6C5CE7] flex items-center justify-center shadow-md shadow-[#6C5CE7]/30">
          <span className="text-white font-bold text-sm tracking-tight">E</span>
        </div>
        <h1 className="text-[19px] font-bold text-gray-900 tracking-tight">
          Escrow<span className="text-[#6C5CE7]">Flow</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 py-6 flex flex-col gap-1.5 overflow-y-auto">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#6C5CE7] text-white shadow-sm shadow-[#6C5CE7]/20"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={18}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200/60">
        <div className="bg-[#F8F9FC] p-4 rounded-xl border border-gray-100">
          <p className="text-xs font-semibold text-gray-800 mb-1">Need help?</p>
          <p className="text-[11px] text-gray-500 mb-3">Check our docs</p>
          <button className="w-full py-1.5 px-3 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
            Documentation
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
