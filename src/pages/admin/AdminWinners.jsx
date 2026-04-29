
import { Link } from 'react-router-dom';

export default function AdminWinners() {
  return (
    <div className="bg-slate-50 text-slate-900 flex min-h-screen font-['Manrope']">
      {/* SideNavBar Shell */}
      <aside className="h-screen w-72 fixed left-0 top-0 flex flex-col py-8 px-4 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 z-50 overflow-y-auto">
        <div className="flex flex-col gap-1 mb-10 px-4">
          <span className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter font-['Epilogue']">
            TeeUp Charity
          </span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Admin Console
          </span>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
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
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/draws"
          >
            <span className="material-symbols-outlined">
              confirmation_number
            </span>
            <span className="font-medium">Draw Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin/charities"
          >
            <span className="material-symbols-outlined">
              volunteer_activism
            </span>
            <span className="font-medium">Charity Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded-lg font-bold transition-all duration-200 ease-in-out"
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
        <div className="mt-auto flex flex-col gap-1 pt-6 border-t border-slate-200 dark:border-slate-800">
          <button className="mb-4 mx-4 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-bold text-sm transition-all shadow-lg shadow-orange-600/20 active:scale-95">
            Quick Report
          </button>
          <Link
            className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
            to="#"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="text-sm">Settings</span>
          </Link>
          <Link
            className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
            to="#"
          >
            <span className="material-symbols-outlined text-xl">
              help_outline
            </span>
            <span className="text-sm">Support</span>
          </Link>
          <Link
            className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
            to="/admin-signin"
          >
            <span className="material-symbols-outlined text-xl">logout</span>
            <span className="text-sm">Log Out</span>
          </Link>
        </div>
      </aside>

      {/* TopAppBar Shell */}
      <header className="fixed top-0 right-0 left-72 h-16 flex justify-between items-center px-6 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-lg w-96">
          <span className="material-symbols-outlined text-slate-500 text-xl">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500 outline-none"
            placeholder="Search winners or draws..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all scale-95 active:scale-90 relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-600 rounded-full"></span>
            </button>
            <button className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="flex items-center gap-3 pl-4 ml-2 border-l border-slate-200 dark:border-slate-800">
            <div className="text-right">
              <p className="text-sm font-bold leading-tight">Admin User</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase">
                Super Admin
              </p>
            </div>
            <img
              alt="Admin Profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-orange-600/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_LsVPijBpdr6vG6LUXJ3Uz6gRE8SWOgqH-tOExmQdJjfjXmWJjltmP_5QekFkf9KLEGN_SJ6G-s2qSm34eLK42YWnNReFzdPxUUCSJ-AAnECYbhbldvu2jBcnvBw1LvBXww_Ncp69pZ-FVB-b8vabc0GEuILqNzv79b0FE9KunlZkQtQTbUgzXzd4-bq5GBZSPtYQp73qvnH4t3nfvWNsWfxRWdzXsLKoqDgkUWZCag8PGK3sGSEr4z5jWsF0UvPisOaaLamHErQ"
            />
          </div>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="ml-72 pt-24 pb-12 px-8 w-full bg-slate-50">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-2 font-['Epilogue']">
              Winner Verification
            </h1>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Review incoming score submissions, verify handicap integrity, and
              authorize payouts for the TeeUp Charity Series.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">download</span>{' '}
              Export Batch
            </button>
          </div>
        </div>

        {/* Filters & Impact Chips */}
        <section className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mr-2">
            Match Type
          </span>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md shadow-orange-600/20">
            All Matches
          </button>
          <button className="bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold hover:bg-orange-200 transition-colors">
            5 Numbers
          </button>
          <button className="bg-white border border-slate-200 text-slate-600 px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors">
            4 Numbers
          </button>
          <button className="bg-white border border-slate-200 text-slate-600 px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors">
            3 Numbers
          </button>
          <div className="ml-auto flex gap-2">
            <select className="bg-white border border-slate-200 rounded-full text-sm font-bold px-6 py-2 focus:ring-orange-600/20 focus:border-orange-600 outline-none">
              <option>Status: All</option>
              <option>Status: Pending</option>
              <option>Status: Verified</option>
            </select>
          </div>
        </section>

        {/* Winners Grid (Bento Style) */}
        <div className="grid grid-cols-12 gap-6">
          {/* Winner Card 1 (Large - High Priority) */}
          <div className="col-span-12 lg:col-span-8 bg-white rounded-xl p-8 border border-slate-200 transition-transform hover:scale-[1.005] group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-bl-full -mr-8 -mt-8"></div>
            <div className="flex items-start justify-between relative z-10 mb-8">
              <div className="flex gap-6">
                <img
                  alt="Winner Avatar"
                  className="w-20 h-20 rounded-xl object-cover shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHiifkIeXP9bzcCqADzNbY0XvjxcCvEeVDhoROk-z9D1Di-qpKRzxnYfrT41Qyd3cJD97IkbHE-LvZYSBbbIhSYci3tQJtyybuIoKVehl0D-IZVcpRl1Esjwm1BqL_sc1jKG0f4fS7TgPzLIEQlBGvTG9K9jukYKIkNKwPjJMAtDQ1c9crQiKEtt3AgyiaHFK3r_GqZdJqygYdB8xE4GzKngoJEGLuRB2hI2DHQjvbOlsLyBDFYdI6rsoVDSEemUvhYA8qTxuCe5E"
                />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight font-['Epilogue']">
                      Marcus Thompson
                    </h3>
                    <span className="bg-red-50 text-red-600 text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-widest border border-red-100">
                      High Stakes
                    </span>
                  </div>
                  <p className="text-slate-500 font-medium">
                    St. Andrews Open • Draw #8821
                  </p>
                  <div className="flex gap-4 mt-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">
                        Verified Handicap
                      </span>
                      <span className="text-lg font-bold text-orange-600">
                        4.2
                      </span>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">
                        Reported Score
                      </span>
                      <span className="text-lg font-bold text-slate-900">
                        68
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-400 uppercase mb-1">
                  Estimated Payout
                </p>
                <p className="text-4xl font-black text-slate-900 tracking-tighter font-['Epilogue']">
                  $12,450.00
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 rounded-xl p-4 flex flex-col gap-3">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    attachment
                  </span>{' '}
                  Scorecard Proof
                </span>
                <div className="relative rounded-lg overflow-hidden h-40 group/img">
                  <img
                    className="w-full h-full object-cover filter blur-[1px] hover:blur-0 transition-all"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOwE0KHLZjLJ9MB4nApm8Uvce8PgjhPFAVg_moksrjh1rx3Ig4pggkvrExdEyfZdUUnz9eM1q5pubNqQ-_cGIGHqS8L2dlzurgMwUTfeUXa_nEwYF-3DoCdFt16_BvjQBxEq2d2ahxINmAnUBXL5DlbedLYIOA4JeqnjndwePAEwO3vR8n-qoWs1afR93euiZQso9KGSG5jJxd658SVfQJCmwCWgjuNk4rCFnElxleFsSXOKp_hPuWgKAWO4oXElPj9WbjKeeE2Gg"
                    alt="Scorecard Proof"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-100 group-hover/img:opacity-0 transition-opacity cursor-pointer">
                    <span className="text-white font-bold text-sm bg-slate-900/60 px-4 py-2 rounded-full backdrop-blur-md">
                      View Original
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-slate-500 mb-2">
                    Admin Notes
                  </p>
                  <p className="text-sm text-slate-700 leading-snug italic">
                    "Score matched GHIN database precisely. Payout info confirmed
                    via Stripe Connect."
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-orange-600 text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-orange-700 active:scale-95 transition-all">
                    Approve Winner
                  </button>
                  <button className="px-6 border-2 border-red-100 text-red-600 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-red-50 transition-all">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats / Right Column Section */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between h-48 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest">
                  Pending Payouts
                </h4>
                <p className="text-4xl font-black mt-2 text-slate-900 font-['Epilogue']">
                  $42,900
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-bold text-orange-600 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>{' '}
                  +12% from yesterday
                </span>
                <span className="text-xs font-black bg-slate-100 px-3 py-1 rounded-full uppercase text-slate-600">
                  14 Claims
                </span>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-[0.03]">
                <span
                  className="material-symbols-outlined text-[120px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  payments
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h4 className="text-sm font-black text-slate-900 mb-6 uppercase tracking-wider">
                Match Type Distribution
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center font-bold text-orange-700">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-bold text-slate-600">
                        5 Numbers Matched
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        2 Winners
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500"
                        style={{ width: '15%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-bold text-slate-600">
                        4 Numbers Matched
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        8 Winners
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-600"
                        style={{ width: '55%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-bold text-slate-600">
                        3 Numbers Matched
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        24 Winners
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-400"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Winner Cards Row */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Winner 2 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8a1P9EGgmGSe4OI539AZnxTIpgfOVOog0_h1o01vjArnohuGzd2dKuQXZgMD0zHGZt45Aut0TZccpNVQ0pqh4g9yg7-_DEqFInwnBj7Lf3uVPnjxB026nLrdsZIfnMz6zn4Evln2I55jR3T_kC7R-LD_YsSsLIIUweC5QNBC6xC3Y_fdxagNVb_GddVwbHWx3kTBQvE7Ahv1aFNuIXVV1p_hSklXIEt_NtUVMSJuMInerHGJf6ggI_oA3-TujtbSWqm7IyScYeFI"
                    alt="Sarah Jenkins"
                  />
                  <div>
                    <p className="font-bold text-slate-900 leading-tight">
                      Sarah Jenkins
                    </p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">
                      4 Numbers Matched
                    </p>
                  </div>
                </div>
                <span className="bg-orange-50 text-orange-700 text-[10px] font-black px-2 py-1 rounded border border-orange-100 uppercase">
                  Pending
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-black tracking-tight text-slate-900 font-['Epilogue']">
                    $2,800
                  </p>
                  <p className="text-xs text-slate-400">Draw #8819</p>
                </div>
                <button className="bg-slate-50 p-2 rounded-lg hover:bg-orange-600 hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Winner 3 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnONen-T7CpDG-8O1hN9rhjJP-QhRNzwVwj0B6aiq6semDgsEbo3N4WdRd0hpd2viNsg5Upx7E6GBn0rm_RJv8sV9dJ0Hq9vZger_BR3dhNN5n_ie3eXIfiDF7_c0d0BOPwuaPHb6nbpr1Mj5lhRk-UklXn7q5lOVbkYoDvv2w_z4_Jm_rDR96Efys_Tgccqsq6p6DRXhuPJZXqy503P2_huMPxpMEY6S8nZoE62XhXlL5cBCEsp52iyvrpcwTarw2cqiNC-iz_k0"
                    alt="Liam O'Conner"
                  />
                  <div>
                    <p className="font-bold text-slate-900 leading-tight">
                      Liam O'Conner
                    </p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">
                      3 Numbers Matched
                    </p>
                  </div>
                </div>
                <span className="bg-green-50 text-green-700 text-[10px] font-black px-2 py-1 rounded border border-green-100 uppercase">
                  Paid
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-black tracking-tight text-slate-900 font-['Epilogue']">
                    $450
                  </p>
                  <p className="text-xs text-slate-400">Draw #8819</p>
                </div>
                <button className="bg-slate-50 p-2 rounded-lg hover:bg-orange-600 hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Winner 4 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                    DA
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-tight">
                      David Akers
                    </p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">
                      5 Numbers Matched
                    </p>
                  </div>
                </div>
                <span className="bg-red-50 text-red-600 text-[10px] font-black px-2 py-1 rounded border border-red-100 uppercase">
                  Rejected
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-black tracking-tight text-slate-300 line-through font-['Epilogue']">
                    $8,200
                  </p>
                  <p className="text-xs text-slate-400">Draw #8818</p>
                </div>
                <button className="bg-slate-50 p-2 rounded-lg hover:bg-orange-600 hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button - Contextually Active for Quick Triage */}
      <button className="fixed bottom-8 right-8 bg-slate-900 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-3xl">verified</span>
      </button>
    </div>
  );
}
