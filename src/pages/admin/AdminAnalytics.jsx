
import { Link } from 'react-router-dom';

export default function AdminAnalytics() {
  return (
    <div className="bg-slate-50 text-slate-900 font-['Manrope'] min-h-screen">
      {/* SideNavBar */}
      <aside className="h-screen w-72 fixed left-0 top-0 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 px-4 border-r border-slate-200 dark:border-slate-800 z-40">
        <div className="px-2 mb-10">
          <h2 className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter uppercase font-['Epilogue']">
            TeeUp Charity
          </h2>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">
            Admin Console
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-['Manrope'] font-medium text-sm">Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/users"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="font-['Manrope'] font-medium text-sm">
              User Management
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/draws"
          >
            <span className="material-symbols-outlined">
              confirmation_number
            </span>
            <span className="font-['Manrope'] font-medium text-sm">
              Draw Management
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/charities"
          >
            <span className="material-symbols-outlined">volunteer_activism</span>
            <span className="font-['Manrope'] font-medium text-sm">
              Charity Management
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/winners"
          >
            <span className="material-symbols-outlined">emoji_events</span>
            <span className="font-['Manrope'] font-medium text-sm">
              Winners Management
            </span>
          </Link>
          {/* Active State: Analytics */}
          <Link
            className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded-lg font-bold transition-all duration-200 ease-in-out"
            to="/admin/analytics"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              leaderboard
            </span>
            <span className="font-['Manrope'] text-sm">Analytics</span>
          </Link>
        </nav>
        <div className="mt-auto space-y-1">
          <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold text-sm mb-6 flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 hover:opacity-90 transition-all scale-95 active:scale-90">
            <span className="material-symbols-outlined text-sm">add</span>
            New Draw
          </button>
          <Link
            className="flex items-center gap-3 text-slate-600 px-4 py-3 rounded-lg hover:bg-slate-200 transition-all duration-200"
            to="#"
          >
            <span className="material-symbols-outlined">help</span>
            <span className="font-['Manrope'] font-medium text-sm">Support</span>
          </Link>
          <Link
            className="flex items-center gap-3 text-error px-4 py-3 rounded-lg hover:bg-error/5 transition-all duration-200"
            to="/admin-signin"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-['Manrope'] font-medium text-sm">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-72 min-h-screen">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-6 w-full h-16 sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">
                search
              </span>
              <input
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-600/20 w-64 transition-all outline-none"
                placeholder="Global search..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
                notifications
              </span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
                settings
              </span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <div className="flex items-center gap-3 pl-2">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border border-slate-200"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJpnODgKDyIhM0w1KTWZXjElzrSnaRulHcI-iIurFLKKg7NY1S2kAxIWrDt3lWnyzwUgSj_Rmm44rmVlI8eKLNWtk2mNSVingRAbUehoVxDxV9xE5k9JmU-C_jtuWopRxvvyby6yxdssIHovnJGNkvQTCe2-_Uhn9c4Dre7j2LLxg-sHmiAm60bKjZQfgB3BRgZ8QUzLPFNP7RJTLhnwcK9w1Cf21Jou_Vw349eqlnQEULmIOvjMk-nJ9QmEskTl7GZxnwEuduxOM"
              />
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight font-['Epilogue']">
                Growth &amp; Impact
              </h2>
              <p className="text-slate-500 font-medium mt-1">
                Platform-wide analytics for TeeUp Charity ecosystem.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                Last 30 Days
              </button>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-orange-600/20 flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-sm">
                  download
                </span>
                Export PDF
              </button>
            </div>
          </div>

          {/* Financial Overview: Bento Grid Style */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl flex flex-col justify-between border-b-4 border-orange-600 shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <span
                  className="bg-orange-50 p-3 rounded-2xl text-orange-600 material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  account_balance_wallet
                </span>
                <span className="text-xs font-bold text-orange-600 px-2 py-1 bg-orange-50 rounded-full">
                  +12.4%
                </span>
              </div>
              <div className="mt-8">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Total Prize Pool Generated
                </p>
                <h3 className="text-5xl font-black text-orange-600 mt-2 tracking-tighter font-['Epilogue']">
                  $2,482,900
                </h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl flex flex-col justify-between border-b-4 border-yellow-500 shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <span
                  className="bg-yellow-50 p-3 rounded-2xl text-yellow-600 material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  volunteer_activism
                </span>
                <span className="text-xs font-bold text-yellow-600 px-2 py-1 bg-yellow-50 rounded-full">
                  +8.1%
                </span>
              </div>
              <div className="mt-8">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Total Charity Contributions
                </p>
                <h3 className="text-5xl font-black text-slate-900 mt-2 tracking-tighter font-['Epilogue']">
                  $842,500
                </h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl flex flex-col justify-between border-b-4 border-slate-400 shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <span
                  className="bg-slate-50 p-3 rounded-2xl text-slate-600 material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  trending_up
                </span>
                <span className="text-xs font-bold text-slate-600 px-2 py-1 bg-slate-50 rounded-full">
                  +18.2%
                </span>
              </div>
              <div className="mt-8">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Monthly Revenue Growth
                </p>
                <h3 className="text-5xl font-black text-slate-900 mt-2 tracking-tighter font-['Epilogue']">
                  $124,300
                </h3>
              </div>
            </div>
          </section>

          {/* Growth Analytics & Impact Breakdown */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Growth Chart Placeholder */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-bold tracking-tight font-['Epilogue']">
                    New vs. Active Subscribers
                  </h3>
                  <p className="text-sm text-slate-500">
                    User retention and acquisition trend
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-orange-600"></span>
                    <span className="text-xs font-bold">New</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                    <span className="text-xs font-bold">Active</span>
                  </div>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between gap-2 px-2">
                {/* Simulated Bar Chart */}
                <div className="flex-1 flex flex-col justify-end gap-1 group">
                  <div className="w-full bg-slate-100 rounded-t-lg h-24 transition-all group-hover:bg-slate-200"></div>
                  <div className="w-full bg-orange-600 rounded-t-lg h-32"></div>
                  <span className="text-[10px] text-center font-bold text-slate-400 mt-2">
                    JAN
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group">
                  <div className="w-full bg-slate-100 rounded-t-lg h-28 transition-all group-hover:bg-slate-200"></div>
                  <div className="w-full bg-orange-600 rounded-t-lg h-36"></div>
                  <span className="text-[10px] text-center font-bold text-slate-400 mt-2">
                    FEB
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group">
                  <div className="w-full bg-slate-100 rounded-t-lg h-32 transition-all group-hover:bg-slate-200"></div>
                  <div className="w-full bg-orange-600 rounded-t-lg h-44"></div>
                  <span className="text-[10px] text-center font-bold text-slate-400 mt-2">
                    MAR
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group">
                  <div className="w-full bg-slate-100 rounded-t-lg h-30 transition-all group-hover:bg-slate-200"></div>
                  <div className="w-full bg-orange-600 rounded-t-lg h-40"></div>
                  <span className="text-[10px] text-center font-bold text-slate-400 mt-2">
                    APR
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group">
                  <div className="w-full bg-slate-100 rounded-t-lg h-40 transition-all group-hover:bg-slate-200"></div>
                  <div className="w-full bg-orange-600 rounded-t-lg h-52"></div>
                  <span className="text-[10px] text-center font-bold text-slate-400 mt-2">
                    MAY
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1 group">
                  <div className="w-full bg-slate-100 rounded-t-lg h-48 transition-all group-hover:bg-slate-200"></div>
                  <div className="w-full bg-orange-600 rounded-t-lg h-56"></div>
                  <span className="text-[10px] text-center font-bold text-slate-400 mt-2">
                    JUN
                  </span>
                </div>
              </div>
            </div>

            {/* Charitable Impact Breakdown */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight mb-6 font-['Epilogue']">
                Impact Breakdown
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                      Youth Sports
                    </span>
                    <span className="text-sm font-bold">42%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-orange-600 h-full w-[42%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                      Environment
                    </span>
                    <span className="text-sm font-bold">28%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full w-[28%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                      Public Health
                    </span>
                    <span className="text-sm font-bold">18%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-slate-500 h-full w-[18%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                      Other
                    </span>
                    <span className="text-sm font-bold">12%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-slate-300 h-full w-[12%]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Total allocations are calculated based on monthly draw entry
                  distribution and user-selected primary causes.
                </p>
              </div>
            </div>
          </section>

          {/* Draw Statistics */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl flex items-center gap-5 shadow-sm border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Avg. Participants
                </p>
                <h4 className="text-2xl font-black text-slate-900 font-['Epilogue']">
                  14,280{' '}
                  <span className="text-sm text-orange-600 font-bold">/draw</span>
                </h4>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl flex items-center gap-5 shadow-sm border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600">
                <span className="material-symbols-outlined text-3xl">cached</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Rollover Frequency
                </p>
                <h4 className="text-2xl font-black text-slate-900 font-['Epilogue']">
                  2.4{' '}
                  <span className="text-sm text-yellow-600 font-bold">months</span>
                </h4>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl flex items-center gap-5 shadow-sm border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600">
                <span className="material-symbols-outlined text-3xl">
                  pie_chart
                </span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Winner Distribution
                </p>
                <h4 className="text-2xl font-black text-slate-900 font-['Epilogue']">
                  84.2%{' '}
                  <span className="text-sm text-slate-500 font-bold">global</span>
                </h4>
              </div>
            </div>
          </section>

          {/* Recent Activity Log */}
          <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-bold tracking-tight font-['Epilogue']">
                Recent Activity Log
              </h3>
              <button className="text-orange-600 text-sm font-bold flex items-center gap-1 hover:underline">
                View All Activity{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Transaction ID
                    </th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Type
                    </th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Entity
                    </th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Amount
                    </th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Status
                    </th>
                    <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Timestamp
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 font-mono text-xs font-bold text-slate-600">
                      #TXN-884291
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>{' '}
                        Charity Grant
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-slate-900">
                      GreenFairways Foundation
                    </td>
                    <td className="px-8 py-5 text-sm font-black text-slate-900 font-['Epilogue']">
                      $12,400.00
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-xs font-bold flex items-center gap-1 text-emerald-600">
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>{' '}
                        Completed
                      </span>
                    </td>
                    <td className="px-8 py-5 text-xs font-medium text-slate-500">
                      Today, 02:45 PM
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 font-mono text-xs font-bold text-slate-600">
                      #TXN-884290
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-orange-50 text-orange-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>{' '}
                        Draw Payout
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-slate-900">
                      Marcus Thorne (Winner)
                    </td>
                    <td className="px-8 py-5 text-sm font-black text-slate-900 font-['Epilogue']">
                      $45,000.00
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-xs font-bold flex items-center gap-1 text-emerald-600">
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>{' '}
                        Completed
                      </span>
                    </td>
                    <td className="px-8 py-5 text-xs font-medium text-slate-500">
                      Today, 11:12 AM
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 font-mono text-xs font-bold text-slate-600">
                      #TXN-884289
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>{' '}
                        Admin Fee
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-slate-900">
                      Platform Operations
                    </td>
                    <td className="px-8 py-5 text-sm font-black text-slate-900 font-['Epilogue']">
                      $1,250.00
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-xs font-bold flex items-center gap-1 text-amber-600">
                        <span className="material-symbols-outlined text-sm">
                          schedule
                        </span>{' '}
                        Pending
                      </span>
                    </td>
                    <td className="px-8 py-5 text-xs font-medium text-slate-500">
                      Yesterday, 04:30 PM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
