
import { Link } from 'react-router-dom';

export default function AdminDraws() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* SideNavBar Shell */}
      <aside className="h-screen w-72 fixed left-0 top-0 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 px-4 border-r border-slate-200 dark:border-slate-800 z-50">
        <div className="mb-10 px-4">
          <h1 className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter font-['Epilogue']">
            TeeUp Charity
          </h1>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
            Admin Console
          </p>
        </div>
        <nav className="flex-1 space-y-1.5">
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/users"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="font-medium">User Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded-lg font-bold transition-all duration-200 ease-in-out"
            to="/admin/draws"
          >
            <span className="material-symbols-outlined">
              confirmation_number
            </span>
            <span className="font-bold">Draw Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/charities"
          >
            <span className="material-symbols-outlined">volunteer_activism</span>
            <span className="font-medium">Charity Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/winners"
          >
            <span className="material-symbols-outlined">emoji_events</span>
            <span className="font-medium">Winners Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/analytics"
          >
            <span className="material-symbols-outlined">leaderboard</span>
            <span className="font-medium">Analytics</span>
          </Link>
        </nav>
        <div className="mt-auto space-y-2 pt-4">
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-bold text-sm shadow-sm transition-all active:scale-95">
            Quick Report
          </button>
          <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
            <Link
              className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all rounded-lg text-sm"
              to="#"
            >
              <span className="material-symbols-outlined text-lg">settings</span>
              <span className="font-medium">Settings</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all rounded-lg text-sm"
              to="#"
            >
              <span className="material-symbols-outlined text-lg">
                help_outline
              </span>
              <span className="font-medium">Support</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all rounded-lg text-sm"
              to="/admin-signin"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
              <span className="font-medium">Sign Out</span>
            </Link>
          </div>
          <div className="flex items-center gap-3 px-4 py-4 mt-2 bg-slate-100 dark:bg-slate-900 rounded-xl">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-300">
              <img
                alt="Admin Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkcAc1EnOJlZDZjj53n6uY-Tznjehv4R_i7l8xu8WorjMdfXT-JqvVJKp8w0cKqSnTnwh_Ea4knraA7kmo4n5plGy7wzegD1Xide7QplpBFJFh2EylKYF_T6brW4wUFQuTz--BRyhvN4tX9Mf3Bx9YAdB-FJUDDEM84NvBynj8oQdwSxtWtCfWUZwH3bZs39tAPWl_t5JzZiLAwqqN-n2tChDIeVrdf-DxfOJ0RdAZI9S7ORPuj5ORcbmCW0weDaqRrctqOkxWgVg"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Admin User
              </p>
              <p className="text-[10px] uppercase font-bold text-orange-600 opacity-80">
                Super Admin
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-72 min-h-screen">
        {/* TopNavBar Shell */}
        <header className="flex justify-between items-center px-6 w-full h-16 sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-orange-500/20 placeholder-slate-400 outline-none"
                placeholder="Search draws or winners..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all scale-95 active:scale-90 relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-600 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </header>

        <div className="pt-12 px-8 pb-12 max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl font-black font-['Epilogue'] tracking-tighter text-on-surface">
                Draw Management
              </h2>
              <p className="text-on-surface-variant mt-2 max-w-md">
                Configure sophisticated draw logic, run live simulations, and
                execute high-impact prize distributions.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-surface-container-highest text-on-surface rounded-full font-bold text-sm hover:opacity-80 transition-opacity">
                View Audit Log
              </button>
              <Link
                className="px-6 py-3 bg-orange-600 text-white rounded-full font-bold text-sm shadow-xl flex items-center gap-2 active:scale-95 transition-transform"
                to="/admin/draws/new"
              >
                <span className="material-symbols-outlined text-sm">
                  rocket_launch
                </span>
                Schedule New Draw
              </Link>
            </div>
          </div>

          {/* Dashboard Grid (Asymmetric) */}
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Active Prize Pool Card (Left Column) */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl"></div>
                <p className="text-sm font-bold text-orange-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                  ACTIVE POOL
                </p>
                <h3 className="text-4xl font-black font-['Epilogue'] tracking-tight text-on-surface mb-1">
                  $482,950.00
                </h3>
                <p className="text-on-surface-variant text-sm font-medium">
                  Accumulated for May Charity Classic
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Ticket Sales</span>
                    <span className="font-bold">84% of Goal</span>
                  </div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-orange-600 h-full rounded-full"
                      style={{ width: '84%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                    <div className="text-xs">
                      <p className="text-on-surface-variant">Tickets Sold</p>
                      <p className="font-bold text-lg">12,402</p>
                    </div>
                    <div className="text-xs text-right">
                      <p className="text-on-surface-variant">Days Remaining</p>
                      <p className="font-bold text-lg text-error">04:12:55</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charity Distribution */}
              <div className="bg-surface-container-low p-8 rounded-2xl">
                <h4 className="font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">
                    volunteer_activism
                  </span>
                  Current Allocation
                </h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-orange-600">
                      <span className="material-symbols-outlined">potted_plant</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold">Greens for Good</span>
                        <span className="text-on-surface-variant">45%</span>
                      </div>
                      <div className="w-full bg-surface-container h-1 rounded-full">
                        <div
                          className="bg-tertiary-fixed h-full rounded-full"
                          style={{ width: '45%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-orange-600">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold">Junior Golf Fund</span>
                        <span className="text-on-surface-variant">30%</span>
                      </div>
                      <div className="w-full bg-surface-container h-1 rounded-full">
                        <div
                          className="bg-orange-600 h-full rounded-full"
                          style={{ width: '30%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Draw Logic Configuration (Middle/Right) */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-outline-variant/10">
                <h3 className="text-2xl font-black font-['Epilogue']">
                  Algorithm Configuration
                </h3>
                <div className="flex bg-surface-container p-1 rounded-full">
                  <button className="px-6 py-1.5 rounded-full text-xs font-bold bg-white shadow-sm">
                    Random
                  </button>
                  <button className="px-6 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">
                    Algorithmic
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                      Weighting Factor
                    </label>
                    <select className="w-full bg-surface-container-low border-none rounded-xl p-3 focus:ring-2 focus:ring-orange-500/20 outline-none">
                      <option>Equal Weighted (Linear)</option>
                      <option>Loyalty Weighted (Tiered)</option>
                      <option>Geographic Distribution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                      Prize Split Logic
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/50 p-3 rounded-xl text-center">
                        <p className="text-xs text-orange-700 dark:text-orange-400 font-bold">
                          50/30/20
                        </p>
                      </div>
                      <div className="bg-surface-container-low p-3 rounded-xl text-center">
                        <p className="text-xs font-bold">Winner Takes All</p>
                      </div>
                      <div className="bg-surface-container-low p-3 rounded-xl text-center">
                        <p className="text-xs font-bold">Custom Tier</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface p-6 rounded-2xl border border-dashed border-outline-variant/50">
                  <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      science
                    </span>
                    Live Simulation
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-on-surface-variant">
                        Estimated Winners
                      </span>
                      <span className="font-bold">142 Participants</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-on-surface-variant">
                        Avg. Prize Value
                      </span>
                      <span className="font-bold text-orange-600">
                        $3,401.05
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-on-surface-variant">
                        Entropy Rating
                      </span>
                      <span className="font-bold text-tertiary">
                        9.8/10 (High)
                      </span>
                    </div>
                    <button className="w-full mt-4 py-2 border border-orange-600 text-orange-600 rounded-full text-xs font-bold hover:bg-orange-600 hover:text-white transition-colors">
                      Run 10,000 Iterations
                    </button>
                  </div>
                </div>
              </div>

              {/* Simulation Result Graph */}
              <div className="bg-surface-container-low h-48 rounded-2xl flex items-end justify-between p-6 gap-2">
                <div className="bg-orange-600/20 w-full rounded-t-lg h-24"></div>
                <div className="bg-orange-600/30 w-full rounded-t-lg h-32"></div>
                <div className="bg-orange-600/50 w-full rounded-t-lg h-40"></div>
                <div className="bg-orange-600 w-full rounded-t-lg h-48 relative group">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
                    Peak Distribution
                  </div>
                </div>
                <div className="bg-orange-600/60 w-full rounded-t-lg h-36"></div>
                <div className="bg-orange-600/40 w-full rounded-t-lg h-28"></div>
                <div className="bg-orange-600/20 w-full rounded-t-lg h-16"></div>
                <div className="bg-orange-600/10 w-full rounded-t-lg h-8"></div>
              </div>
              <div className="flex justify-between px-2 mt-2">
                <span className="text-[10px] font-bold text-on-surface-variant">
                  Tier 5
                </span>
                <span className="text-[10px] font-bold text-on-surface-variant">
                  Tier 3
                </span>
                <span className="text-[10px] font-bold text-on-surface-variant">
                  Tier 1 (Jackpot)
                </span>
              </div>

              <div className="mt-12 flex items-center justify-between p-6 bg-orange-600/5 rounded-2xl border border-orange-600/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined">publish</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Ready for Execution</p>
                    <p className="text-xs text-on-surface-variant">
                      Algorithm is validated and pool is locked for simulation.
                    </p>
                  </div>
                </div>
                <button className="bg-on-surface text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:opacity-90 active:scale-95 transition-all">
                  Publish &amp; Finalize Draw
                </button>
              </div>
            </div>
          </div>

          {/* Past Draws History */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black font-['Epilogue'] tracking-tight">
                Draw History
              </h3>
              <div className="flex gap-2">
                <button className="p-2 bg-surface-container rounded-lg hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button className="p-2 bg-surface-container rounded-lg hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
              <table className="w-full text-left">
                <thead className="bg-surface-container-low">
                  <tr>
                    <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase">
                      Draw ID
                    </th>
                    <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase">
                      Date
                    </th>
                    <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase">
                      Total Pool
                    </th>
                    <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase">
                      Charity Share
                    </th>
                    <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase">
                      Winners
                    </th>
                    <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-6 py-5">
                      <p className="font-bold text-sm">#TX-2024-04</p>
                      <p className="text-[10px] text-on-surface-variant">
                        April Masters Special
                      </p>
                    </td>
                    <td className="px-6 py-5 text-sm">Apr 12, 2024</td>
                    <td className="px-6 py-5 text-sm font-bold">$1,250,000</td>
                    <td className="px-6 py-5 text-sm">$625,000</td>
                    <td className="px-6 py-5 text-sm">1,402</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800">
                        COMPLETED
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-orange-600 font-bold text-xs hover:underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-6 py-5">
                      <p className="font-bold text-sm">#TX-2024-03</p>
                      <p className="text-[10px] text-on-surface-variant">
                        March Madness Drive
                      </p>
                    </td>
                    <td className="px-6 py-5 text-sm">Mar 28, 2024</td>
                    <td className="px-6 py-5 text-sm font-bold">$890,400</td>
                    <td className="px-6 py-5 text-sm">$445,200</td>
                    <td className="px-6 py-5 text-sm">945</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800">
                        COMPLETED
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-orange-600 font-bold text-xs hover:underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-6 py-5">
                      <p className="font-bold text-sm">#TX-2024-02</p>
                      <p className="text-[10px] text-on-surface-variant">
                        Winter Invitational
                      </p>
                    </td>
                    <td className="px-6 py-5 text-sm">Feb 15, 2024</td>
                    <td className="px-6 py-5 text-sm font-bold">$420,150</td>
                    <td className="px-6 py-5 text-sm">$210,075</td>
                    <td className="px-6 py-5 text-sm">312</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800">
                        COMPLETED
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-orange-600 font-bold text-xs hover:underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Contextual FAB */}
      <button
        className="fixed bottom-8 right-8 w-16 h-16 bg-on-surface text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-105 active:scale-95 transition-all"
        title="Create Emergency Draw Override"
      >
        <span className="material-symbols-outlined text-3xl">warning</span>
      </button>
    </div>
  );
}
