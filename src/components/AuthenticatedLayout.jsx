import { NavLink, Outlet } from 'react-router-dom';

export default function AuthenticatedLayout() {
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? 'flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-[#9c3f00] to-[#ff7a2f] text-white rounded-xl shadow-lg translate-x-1 duration-200'
      : 'flex items-center gap-3 px-4 py-3 text-[#2c2f30] dark:text-[#dadddf] hover:bg-[#dadddf]/50 rounded-xl transition-all';

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f5f6f7] dark:bg-[#2c2f30] flex flex-col p-6 space-y-4 z-50">
        <div className="mb-8 px-2">
          <h1 className="text-xl font-black text-[#2c2f30] dark:text-[#f5f6f7]">TeeUp Charity</h1>
          <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mt-1 text-primary">Kinetic Philanthropy</p>
        </div>

        <nav className="flex-1 space-y-2">
          <NavLink to="/dashboard" className={navLinkClasses}>
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-semibold text-sm">Dashboard</span>
          </NavLink>

          <NavLink to="/score-entry" className={navLinkClasses}>
            <span className="material-symbols-outlined">sports_golf</span>
            <span className="font-semibold text-sm">Score Entry</span>
          </NavLink>

          <NavLink to="/charity-hub" className={navLinkClasses}>
            <span className="material-symbols-outlined">volunteer_activism</span>
            <span className="font-semibold text-sm">Charity Hub</span>
          </NavLink>

          <NavLink to="/winnings" className={navLinkClasses}>
            <span className="material-symbols-outlined">payments</span>
            <span className="font-semibold text-sm">Winnings</span>
          </NavLink>

          <NavLink to="/settings" className={navLinkClasses}>
            <span className="material-symbols-outlined">settings</span>
            <span className="font-semibold text-sm">Settings</span>
          </NavLink>
        </nav>

        <div className="mt-auto pt-6 border-t border-outline-variant/10">
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm shadow-xl hover:opacity-90 transition-opacity">
            Enter Score
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="ml-64 min-h-screen flex flex-col bg-surface">
        <Outlet />
      </div>
    </div>
  );
}
