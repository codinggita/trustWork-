import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F8F9FC]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Sidebar />
      <div className="flex flex-col flex-1 ml-[250px]">
        <Navbar />
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
