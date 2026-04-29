
import { Link } from 'react-router-dom';

export default function AdminUsers() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* SideNavBar Component */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 px-4 border-r border-slate-200 dark:border-slate-800 z-50">
        <div className="mb-10 px-4">
          <h1 className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter brand-font font-['Epilogue']">
            TeeUp Charity
          </h1>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Admin Console
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-body">Dashboard</span>
          </Link>
          {/* Active Navigation: User Management */}
          <Link
            className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded-lg font-bold transition-all duration-200 ease-in-out"
            to="/admin/users"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-body">User Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/draws"
          >
            <span className="material-symbols-outlined">
              confirmation_number
            </span>
            <span className="text-sm font-body">Draw Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/charities"
          >
            <span className="material-symbols-outlined">volunteer_activism</span>
            <span className="text-sm font-body">Charity Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/winners"
          >
            <span className="material-symbols-outlined">emoji_events</span>
            <span className="text-sm font-body">Winners Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/analytics"
          >
            <span className="material-symbols-outlined">leaderboard</span>
            <span className="text-sm font-body">Analytics</span>
          </Link>
        </nav>
        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-lg py-3 px-4 font-bold text-sm mb-6 flex items-center justify-center gap-2 shadow-sm transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
            Quick Report
          </button>
          <div className="space-y-1">
            <Link
              className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all rounded-lg"
              to="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                settings
              </span>
              <span className="text-sm font-body">Settings</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all rounded-lg"
              to="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                help_outline
              </span>
              <span className="text-sm font-body">Support</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all rounded-lg"
              to="/admin-signin"
            >
              <span className="material-symbols-outlined text-[20px]">
                logout
              </span>
              <span className="text-sm font-body">Sign Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* TopNavBar Component */}
      <header className="fixed top-0 right-0 left-72 h-16 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl flex justify-between items-center px-6 z-40 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-orange-500/20 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-500"
              placeholder="Search subscribers..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all scale-95 active:scale-90 relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all scale-95 active:scale-90">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200 dark:border-slate-800">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-none">
                Admin User
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                System Manager
              </p>
            </div>
            <button className="p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all scale-95 active:scale-90">
              <img
                alt="Admin User"
                className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQDstVc0ZJCeoPQr2D3L5MUkKPWnXD6J2xqG8oYLQlP5vKc_vfXel841SPh5y2oI56sOFpcrjUZEdk-0BR3TguLFrNx6HFcIP06PCXUve6pY6NzIIsYkrFCVRWPSfBSl19RPEE2nkUOTiQwwkDqlmGEEfCyWG64pldsaahghhVq9ZkPOwAa8ozna_QbUItpi7ISnZerz__DOwUhb5_Gf3aK8NVqdVGd43ND2QZmp7SaXv-Dc7Mx5Lko7pgGrBg97IvuaAiOAdQ-Bo"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-72 pt-24 p-8 min-h-screen">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-black text-on-surface tracking-tight mb-2 font-['Epilogue']">
              User Management
            </h2>
            <p className="text-on-surface-variant font-medium">
              Manage subscriber accounts, golf scores, and charity impacts.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-xl font-bold text-sm hover:opacity-80 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                filter_list
              </span>
              Advanced Filters
            </button>
            <Link
              className="bg-gradient-to-r from-primary to-orange-400 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
              to="/admin/users/new"
            >
              <span className="material-symbols-outlined text-sm">
                person_add
              </span>
              Add Subscriber
            </Link>
          </div>
        </div>

        {/* Metrics Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[120px]">
                group
              </span>
            </div>
            <p className="text-sm font-bold text-on-surface-variant mb-1">
              Total Subscribers
            </p>
            <h3 className="text-3xl font-black text-on-surface">1,284</h3>
            <p className="text-xs text-primary font-bold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                trending_up
              </span>
              +12% from last month
            </p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl">
            <p className="text-sm font-bold text-on-surface-variant mb-1">
              Active Subscriptions
            </p>
            <h3 className="text-3xl font-black text-on-surface">942</h3>
            <div className="w-full bg-surface-container-highest h-2 rounded-full mt-4 overflow-hidden">
              <div className="bg-primary h-full w-[73%]"></div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl">
            <p className="text-sm font-bold text-on-surface-variant mb-1">
              Total Impact Generated
            </p>
            <h3 className="text-3xl font-black text-on-surface">$42,500</h3>
            <p className="text-xs text-on-tertiary-fixed-variant font-bold mt-2">
              Target: $50,000
            </p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border-2 border-primary/10">
            <p className="text-sm font-bold text-primary mb-1">
              Lapsed This Week
            </p>
            <h3 className="text-3xl font-black text-on-surface">14</h3>
            <button className="mt-3 text-xs font-bold underline text-on-surface-variant hover:text-primary transition-colors">
              Review Lapsed Accounts
            </button>
          </div>
        </div>

        {/* Subscribers Table Container */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_32px_48px_rgba(44,47,48,0.06)] overflow-hidden">
          <div className="p-6 border-b border-surface-container flex justify-between items-center bg-surface-container-low/30">
            <div className="flex gap-4">
              <span className="bg-primary-container/20 text-on-primary-container px-3 py-1 rounded-full text-xs font-bold">
                All Members
              </span>
              <span className="text-on-surface-variant px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-surface-container-high transition-colors">
                Monthly
              </span>
              <span className="text-on-surface-variant px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-surface-container-high transition-colors">
                Yearly
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">sort</span>
              Sorted by: Recent Activity
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-on-surface-variant text-[11px] uppercase tracking-widest font-black">
                  <th className="px-8 py-5">Subscriber</th>
                  <th className="px-6 py-5">Plan</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5 text-center">Golf Score</th>
                  <th className="px-6 py-5">Next Draw</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-on-surface-variant overflow-hidden">
                        <img
                          alt="Alex Reed"
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjDjBN1DjR26o9O2WzdoZKfJZhZ6smKR6NMfKOlhlK5tUi2tAhkuckUpr10BJ0R20vP9WBcj_I8cBXfDn98Y_jAk04BIMmvCOkRE-aHUqJXi9dNkxCvgsSXs92oW3As5PBtdmrvh7kJBardTk3pysmBu6tQyJZErMX_zr0PghUEX8M4hedI3UyHcxSl3XfnjXM-46lU9QCb-vmls2ASubuwVA15ZGAKzHogahICcYbZ838ApOffbF3fzH3ptqVkyTvy9KgSrX-Nac"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">Alex Reed</p>
                        <p className="text-xs text-on-surface-variant">
                          alex.r@golfmail.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium text-on-surface">
                      Yearly
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm font-bold text-on-surface">
                        Active
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="bg-surface-container text-on-surface px-3 py-1 rounded-lg text-sm font-black">
                      74
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-on-surface">Oct 24, 2023</p>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 hover:bg-surface-container-highest rounded-lg text-on-surface-variant transition-all"
                        title="Edit Profile"
                      >
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button
                        className="p-2 hover:bg-surface-container-highest rounded-lg text-on-surface-variant transition-all"
                        title="Manage Subscription"
                      >
                        <span className="material-symbols-outlined text-xl">
                          credit_card
                        </span>
                      </button>
                      <button
                        className="p-2 hover:bg-error/10 hover:text-error rounded-lg text-on-surface-variant transition-all"
                        title="More Options"
                      >
                        <span className="material-symbols-outlined text-xl">
                          more_vert
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Additional rows can be added here following the same structure */}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-surface-container flex items-center justify-between">
            <p className="text-xs font-bold text-on-surface-variant">
              Showing 1-10 of 1,284 subscribers
            </p>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-lg border border-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined text-sm">
                  chevron_left
                </span>
              </button>
              <button className="w-8 h-8 rounded-lg bg-primary text-white font-black text-xs flex items-center justify-center">
                1
              </button>
              <button className="w-8 h-8 rounded-lg border border-surface-container font-black text-xs text-on-surface-variant flex items-center justify-center hover:bg-surface-container">
                2
              </button>
              <button className="w-8 h-8 rounded-lg border border-surface-container font-black text-xs text-on-surface-variant flex items-center justify-center hover:bg-surface-container">
                3
              </button>
              <span className="text-on-surface-variant px-1 pt-2">...</span>
              <button className="w-8 h-8 rounded-lg border border-surface-container font-black text-xs text-on-surface-variant flex items-center justify-center hover:bg-surface-container">
                128
              </button>
              <button className="w-8 h-8 rounded-lg border border-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Impact Action Card */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-on-surface rounded-xl p-8 text-surface relative overflow-hidden flex flex-col justify-center min-h-[240px]">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
              <img
                alt="Golf Background"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWD4qpSlnArtx-BChpG4yFXHgFFAJcXVnQfHPXsLv8RmFRuvHTxPEI_gspMtADTPd4cJUVf30d_tcVyy7VPfoGGZ4h5rdqI_s4EOm6BaAeDUK6FmYknecklkm1RsMs7pqMg4X7OYUad2ZMs26Z-nMFdINHL8DYSoP_tSdhUAa8AOGBDygrI80QWohfvWao8mND9SLxCNVoq3WDPp3T2FITGKeGzHUP95HSZ0mmBU15XCoDd44DUkQELVxCfDLwDcrI5hSWjPaf1HM"
              />
            </div>
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-4 tracking-tight">
                Need to bulk update scores?
              </h4>
              <p className="max-w-md opacity-80 mb-6">
                Upload tournament results or handicap adjustments for all active
                subscribers in one click. Our system handles validation
                automatically.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 w-fit hover:scale-105 transition-all">
                <span className="material-symbols-outlined text-sm">
                  upload_file
                </span>
                Bulk Upload Tournament Data
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 bg-tertiary-container rounded-xl p-8 text-on-tertiary-container flex flex-col justify-between">
            <div>
              <span
                className="material-symbols-outlined text-4xl mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <h4 className="text-xl font-black mb-2 leading-tight font-['Epilogue']">
                Subscriber Insights
              </h4>
              <p className="text-sm opacity-90 leading-relaxed">
                System has identified 12 high-scoring members who haven't
                updated their charity focus this quarter.
              </p>
            </div>
            <button className="mt-4 border-2 border-on-tertiary-container/30 rounded-lg py-2 font-bold text-sm hover:bg-on-tertiary-container/10 transition-all">
              Send Reminder
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
