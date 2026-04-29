
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="bg-slate-50 text-slate-900 font-['Manrope'] min-h-screen flex">
      {/* SIDENAVBAR */}
      <aside className="h-screen w-72 fixed left-0 top-0 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 px-4 border-r border-slate-200 dark:border-slate-800 z-50 overflow-y-auto">
        <div className="mb-10 px-4">
          <span className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter block font-['Epilogue']">
            TeeUp Charity
          </span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 block">
            Admin Console
          </span>
        </div>

        {/* User Profile Snapshot */}
        <div className="mb-8 px-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
            <img
              alt="Admin headshot"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVQ9mPraHRvX5ZcBHt3jwqgNYUmoh9x891gcQWc34i_lFlrMnKmrBGZVP_gQEFm2wNV_QXS-93NsebZRWFrHZGdTJSpxeti4qzA5boHlD93m6ILHzad93O58MKqAjDhIjxJNb3NfCIi0aJA5oafLie4hH7wSFg-hgZm8KaBKOA6o__MLd6-_7JBxkHE64BDIqajqfviE2ThFiOi9vsJrOCYhGf9GTF8XYQsEkpPQlrcJ9j3FWyLhi4lnH80FMOqTyOlRdY2rMm-GM"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Impact Dashboard
            </span>
            <span className="text-[10px] text-slate-500">
              Kinetic Philanthropist
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <Link
            className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded-lg font-bold transition-all duration-200 ease-in-out"
            to="/admin/dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/users"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">User Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/draws"
          >
            <span className="material-symbols-outlined">confirmation_number</span>
            <span className="text-sm font-medium">Draw Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/charities"
          >
            <span className="material-symbols-outlined">volunteer_activism</span>
            <span className="text-sm font-medium">Charity Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/winners"
          >
            <span className="material-symbols-outlined">emoji_events</span>
            <span className="text-sm font-medium">Winners Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/analytics"
          >
            <span className="material-symbols-outlined">leaderboard</span>
            <span className="text-sm font-medium">Analytics</span>
          </Link>
        </nav>

        <div className="mt-auto space-y-1 pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="#"
          >
            <span className="material-symbols-outlined">help</span>
            <span className="text-sm font-medium">Support</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin-signin"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-medium">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* RIGHT SIDE WRAPPER */}
      <div className="ml-72 flex-1 flex flex-col min-h-screen">
        {/* TOPNAVBAR */}
        <header className="flex justify-between items-center px-6 h-16 w-full sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl transition-all border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg w-96">
            <span className="material-symbols-outlined text-slate-400 text-lg">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm text-slate-600 w-full p-0"
              placeholder="Search platform data..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="p-8 flex-1">
          {/* HERO HEADER */}
          <header className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2 font-['Epilogue']">
                Platform Command
              </h1>
              <p className="text-slate-500 font-medium">
                Overseeing the kinetic impact of global charity golf.
              </p>
            </div>
            <Link
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform scale-100 active:scale-95"
              to="/admin/draws/new"
            >
              <span className="material-symbols-outlined">add</span>
              Create New Draw
            </Link>
          </header>

          {/* ANALYTICS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Metric 1 */}
            <div className="bg-white p-6 rounded-xl relative overflow-hidden border border-slate-200">
              <div className="absolute -right-4 -bottom-4 opacity-10 text-slate-300">
                <span className="material-symbols-outlined !text-8xl">
                  group
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Total Subscribers
              </p>
              <h3 className="text-3xl font-black text-slate-900 font-['Epilogue']">
                12,842
              </h3>
              <p className="text-xs text-orange-600 font-bold mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                +12% from last month
              </p>
            </div>

            {/* Metric 2 */}
            <div className="bg-white p-6 rounded-xl relative overflow-hidden border border-slate-200">
              <div className="absolute -right-4 -bottom-4 opacity-10 text-orange-200">
                <span className="material-symbols-outlined !text-8xl">
                  payments
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Current Prize Pool
              </p>
              <h3 className="text-3xl font-black text-slate-900 font-['Epilogue']">
                $245,000
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-2">
                Accruing across 4 active draws
              </p>
            </div>

            {/* Metric 3 */}
            <div className="bg-orange-600 text-white p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-20">
                <span className="material-symbols-outlined !text-8xl">
                  volunteer_activism
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">
                Total Charity Impact
              </p>
              <h3 className="text-3xl font-black font-['Epilogue']">
                $1.2M
              </h3>
              <p className="text-xs font-medium mt-2 text-white/90">
                Contributed to 24 organizations
              </p>
            </div>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT COLUMN: USER MANAGEMENT & WINNER VERIFICATION */}
            <div className="lg:col-span-8 space-y-8">
              {/* USER MANAGEMENT TABLE */}
              <section className="bg-white rounded-xl overflow-hidden border border-slate-200">
                <div className="p-6 flex justify-between items-center bg-slate-50/50 border-b border-slate-200">
                  <h2 className="text-xl font-bold text-slate-900 font-['Epilogue']">
                    User Management
                  </h2>
                  <div className="flex gap-2">
                    <span className="bg-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-700">
                      1,200 New
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                      Active
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-xs font-bold uppercase text-slate-400 border-b border-slate-100">
                        <th className="px-6 py-4">Subscriber</th>
                        <th className="px-6 py-4">Plan</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Total Score</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      <tr>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                            <div>
                              <p className="text-sm font-bold text-slate-900">
                                Marcus Thorne
                              </p>
                              <p className="text-[10px] text-slate-400">
                                m.thorne@golfhub.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-700">
                            Pro Tier
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-green-600">
                            <span className="w-2 h-2 rounded-full bg-current"></span>
                            <span className="text-xs font-bold">Active</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-slate-700">
                          72.4
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-orange-600 hover:bg-orange-50 p-2 rounded-full transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              edit
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-orange-50"></div>
                            <div>
                              <p className="text-sm font-bold text-slate-900">
                                Sarah Jenkins
                              </p>
                              <p className="text-[10px] text-slate-400">
                                sarah.j@charity.org
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-700">
                            Club Member
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-current"></span>
                            <span className="text-xs font-bold">Trial</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-slate-700">
                          78.1
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-orange-600 hover:bg-orange-50 p-2 rounded-full transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              edit
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* WINNER VERIFICATION QUEUE */}
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 font-['Epilogue']">
                  Winner Verification Queue
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Verification Card 1 */}
                  <div className="bg-white p-5 rounded-xl border-l-4 border-orange-600 shadow-sm border-t border-b border-r border-slate-200">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                          <img
                            alt="Liam"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1PEYtbw7Yh3yIuawY164WNhfeLsyIPiQktyAys-mRgy-mIs3HajGmy7ckWOmsrnd6LBje-Lebbo_CtIvkh3wD4i7OGep-9rEXgtCiSPTPfZ_q0ax8Bv14J7YFXGoXZ-Xw9Kf5c8NxCQaCUcvXy53n3qIP5jwxhV6UqL8I3og81WZMrA68YdoJJBhykcSeaLHU4rT4LXlUCdESTHWTcJnRgKKE2LbKoqxPQphoLYHf-gjnQV5Ayl8goOOQMox5_HmPm0cKvQZklCs"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            Liam Peterson
                          </p>
                          <p className="text-[10px] text-slate-400">
                            August Invitational
                          </p>
                        </div>
                      </div>
                      <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] font-black uppercase">
                        Urgent
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg mb-4">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                          Match Type
                        </p>
                        <p className="text-xs font-bold text-slate-900">
                          Stableford 18-Hole
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                          Reported Score
                        </p>
                        <p className="text-xs font-black text-orange-600">
                          67 (-5)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 text-xs font-bold bg-slate-200 py-2 rounded-lg flex items-center justify-center gap-2 text-slate-700">
                        <span className="material-symbols-outlined text-sm">
                          image
                        </span>
                        Review Proof
                      </button>
                      <button className="flex-1 text-xs font-bold bg-orange-600 text-white py-2 rounded-lg">
                        Approve
                      </button>
                    </div>
                  </div>

                  {/* Verification Card 2 */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                          <img
                            alt="Emma"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABcaW7vGz2wMTGEGr2fq4uuhjdkNv0GImSB0z19WJ-7yiBYLFIVKxpVNNAMvmnTMagool3Hzfe0vCmEqcgK9JT63Ix23zGHkI74CsyLBYgeL5ooWHiDiGOgj0wAklmn-RGubSiq4ktwuaU_DtXECMBbJH3UJ4_6t1w1gjgtlnM59Lzy3Y4n1YqVkSHa2W8nRrfLYXh_Qvk999Irwna6RWUScttTTJrtXmr0al41KNH3QeBzU3xRvtEp83bky5_hPAew8kRSJm0888"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            Emma Richardson
                          </p>
                          <p className="text-[10px] text-slate-400">
                            Charity Open #14
                          </p>
                        </div>
                      </div>
                      <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-[10px] font-black uppercase">
                        Pending
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg mb-4">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                          Match Type
                        </p>
                        <p className="text-xs font-bold text-slate-900">
                          Stroke Play
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                          Reported Score
                        </p>
                        <p className="text-xs font-black text-orange-600">
                          74 (+2)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 text-xs font-bold bg-slate-200 py-2 rounded-lg flex items-center justify-center gap-2 text-slate-700">
                        <span className="material-symbols-outlined text-sm">
                          image
                        </span>
                        Review Proof
                      </button>
                      <button className="flex-1 text-xs font-bold bg-orange-600 text-white py-2 rounded-lg">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: DRAW CONTROLS & LOGS */}
            <div className="lg:col-span-4 space-y-8">
              {/* DRAW CONTROLS SECTION */}
              <section className="bg-slate-900 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-black text-white mb-6 font-['Epilogue']">
                  Draw Logic Control
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest block mb-3 text-slate-400">
                      Algorithm Mode
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-orange-600 text-white py-3 rounded-xl text-xs font-bold flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined">
                          shuffle
                        </span>
                        Random
                      </button>
                      <button className="bg-slate-800 text-slate-400 py-3 rounded-xl text-xs font-bold flex flex-col items-center gap-1 hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined">hub</span>
                        Algorithmic
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-white">
                        Monte Carlo Simulation
                      </span>
                      <span className="text-[10px] text-orange-500 font-bold">
                        Ready
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 mb-4">
                      Run 1,000 iterations based on current score distributions
                      to predict fairness outcomes.
                    </p>
                    <button className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg border border-white/10 hover:bg-slate-700">
                      Execute Simulation
                    </button>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <button className="w-full bg-orange-600 py-4 rounded-full font-black text-white uppercase tracking-tighter hover:scale-[0.97] transition-all">
                      Publish Draw Results
                    </button>
                    <p className="text-[10px] text-center mt-3 text-slate-500">
                      Last published: 2 hours ago by admin_alpha
                    </p>
                  </div>
                </div>
              </section>

              {/* RECENT SYSTEM ACTIVITY */}
              <section className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 font-['Epilogue']">
                  System Logs
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-orange-600 text-sm mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Payout Batch #902 Processed
                      </p>
                      <p className="text-[10px] text-slate-400">
                        12 minutes ago
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-yellow-600 text-sm mt-0.5">
                      warning
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Score Outlier Detected: User #4912
                      </p>
                      <p className="text-[10px] text-slate-400">
                        45 minutes ago
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-slate-400 text-sm mt-0.5">
                      info
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Charity 'GreenFuture' Profile Updated
                      </p>
                      <p className="text-[10px] text-slate-400">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-slate-400 text-sm mt-0.5">
                      info
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        New Subscriber Peak: 800/hr
                      </p>
                      <p className="text-[10px] text-slate-400">
                        3 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-100 dark:bg-slate-900 py-12 px-8 flex flex-col md:flex-row justify-between items-center transition-all border-t border-slate-200 dark:border-slate-800">
          <div className="mb-6 md:mb-0">
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              TeeUp Charity
            </span>
            <p className="text-xs text-slate-500 mt-1">
              © 2024 TeeUp Charity. Kinetic Impact.
            </p>
          </div>
          <div className="flex gap-8">
            <Link
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 transition-colors"
              to="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 transition-colors"
              to="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 transition-colors"
              to="#"
            >
              Impact Report
            </Link>
            <Link
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 transition-colors"
              to="#"
            >
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
