
import { Link } from 'react-router-dom';

export default function AdminNewDraw() {
  return (
    <div className="bg-surface text-on-surface font-['Manrope']">
      {/* TopNavBar (Standardized to COMPONENTS_39) */}
      <header className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl flex justify-between items-center w-full px-6 h-16 sticky top-0 z-40">
        <div className="flex items-center gap-8">
          <div className="hidden lg:block text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter font-['Epilogue']">
            TeeUp Charity
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded-lg"
              to="/admin/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-orange-700 dark:text-orange-400 font-bold border-b-2 border-orange-600 px-3 py-1"
              to="/admin/draws"
            >
              Draws
            </Link>
            <Link
              className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded-lg"
              to="#"
            >
              Reports
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all scale-95 active:scale-90">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
              notifications
            </span>
          </button>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all scale-95 active:scale-90">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
              settings
            </span>
          </button>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all scale-95 active:scale-90 flex items-center">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyHQP2DH--GrWJTjN4-mKgKuKAQ321djbVkohK33a3N9s7R4jxWskbSu-PZ4V-ADqucL5Z_bjZF9h9dW8VSOO1n_nTgZPLIObGLZcuJ5XnaTAaW0Zu88x_ivXKngRD8vs50I-jRf1RngGS8OyACVzPE-hrRvuwZICCfNpDSGOcM6TZc-nxWvmqU4D4cIgRYWadWoeJufHQj_Hxrpe-a8FQhHpg37I3xUSlJ-f0Mrt6KqkWviPo2CtVagkEYMGvHkMvWJYn2Ymjw1o"
                alt="Admin Profile"
              />
            </div>
          </button>
        </div>
      </header>

      {/* SideNavBar (Standardized to COMPONENTS_39) */}
      <aside className="bg-slate-50 dark:bg-slate-950 h-screen w-72 fixed left-0 top-0 flex flex-col py-8 px-4 border-r border-slate-200 dark:border-slate-800 z-50 hidden lg:flex">
        <div className="px-2 mb-10">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter font-['Epilogue']">
              TeeUp Charity
            </h2>
            <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
              Admin Console
            </p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
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
            className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded-lg font-bold transition-all duration-200 ease-in-out shadow-sm"
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
        <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-6 px-2 space-y-1">
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="#"
          >
            <span className="material-symbols-outlined">help</span>
            <span className="font-medium">Support</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error-container/10 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin-signin"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium">Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 pt-8 pb-12 px-8 min-h-screen">
        {/* Breadcrumbs & Header */}
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
            <Link className="hover:text-primary transition-colors" to="/admin/dashboard">
              Admin
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <Link className="hover:text-primary transition-colors" to="/admin/draws">
              Draw Management
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-on-surface font-semibold">
              Schedule New Draw
            </span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-2 font-['Epilogue']">
                Schedule New Draw
              </h1>
              <p className="text-lg text-on-surface-variant max-w-2xl">
                Configure parameters for the upcoming golf charity draw. All
                allocations must be verified before scheduling.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                className="px-8 py-3 rounded-full text-on-surface-variant font-bold hover:bg-surface-container transition-all"
                to="/admin/draws"
              >
                Cancel
              </Link>
              <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#9c3f00] to-[#ff7a2f] text-white font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                Schedule Draw
              </button>
            </div>
          </div>

          {/* Bento Layout Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Core Settings */}
            <div className="lg:col-span-7 space-y-8">
              {/* Basic Info Card */}
              <section className="bg-surface-container-low p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-['Epilogue']">
                  <span className="material-symbols-outlined text-primary">
                    info
                  </span>
                  Draw Identity
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2 px-1">
                      Draw Name
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface placeholder:text-outline outline-none"
                      placeholder="e.g., June Masters Open"
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-2 px-1">
                        Draw Month
                      </label>
                      <select className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none">
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-2 px-1">
                        Draw Year
                      </label>
                      <select className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none">
                        <option>2024</option>
                        <option>2025</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Execution Date & Algorithm */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-surface-container-low p-8 rounded-[2rem]">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-['Epilogue']">
                    <span className="material-symbols-outlined text-primary">
                      calendar_today
                    </span>
                    Execution
                  </h3>
                  <label className="block text-sm font-bold text-on-surface mb-2 px-1">
                    Draw Date
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      type="date"
                    />
                    <p className="text-xs text-on-surface-variant mt-2 px-1 italic">
                      Draws typically execute at 00:00 UTC
                    </p>
                  </div>
                </section>
                <section className="bg-surface-container-low p-8 rounded-[2rem]">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-['Epilogue']">
                    <span className="material-symbols-outlined text-primary">
                      settings_suggest
                    </span>
                    Algorithm
                  </h3>
                  <div className="flex flex-col gap-3">
                    <label className="group cursor-pointer flex items-center justify-between bg-surface-container-highest p-4 rounded-xl border-2 border-transparent hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">
                          shuffle
                        </span>
                        <div>
                          <span className="font-bold block">Random</span>
                          <span className="text-xs text-on-surface-variant">
                            Pure lottery style
                          </span>
                        </div>
                      </div>
                      <input
                        className="text-primary focus:ring-primary h-5 w-5"
                        name="algo"
                        type="radio"
                        defaultChecked
                      />
                    </label>
                    <label className="group cursor-pointer flex items-center justify-between bg-surface-container-highest p-4 rounded-xl border-2 border-transparent hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">
                          monitoring
                        </span>
                        <div>
                          <span className="font-bold block">Algorithmic</span>
                          <span className="text-xs text-on-surface-variant">
                            Weighted by score
                          </span>
                        </div>
                      </div>
                      <input
                        className="text-primary focus:ring-primary h-5 w-5"
                        name="algo"
                        type="radio"
                      />
                    </label>
                  </div>
                </section>
              </div>

              {/* Charity Section */}
              <section className="bg-surface-container-low p-8 rounded-[2rem]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 font-['Epilogue']">
                    <span className="material-symbols-outlined text-primary">
                      heart_plus
                    </span>
                    Charity Beneficiaries
                  </h3>
                  <button className="text-sm font-bold text-primary hover:underline">
                    Manage All
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-2xl">
                    <img
                      className="w-12 h-12 rounded-lg object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3M-p-eFORo8Xv0rNNESOtM0dsG5HOa0aOiGJHNAuuTQ1J7LwSYkNEcLIT9f-Hk5A5SKjnSi3LD7EhTouyxhnTJ91dsc8NbYtrOwXIuqQgntClDfHfFMdeRP02e27OYaamUQby6p7OoAMOBSimE3q6C6GJZY2wpAOsLthaOjNNyH4LItvKAI8aVmEtVGMezl5Th5W5Abq0X9OQYGQR0e24fvTs0ApeWT60aFWD8s2kD6njrm8U72AN6OSQQvSl97S70JqoIyoKHFk"
                      alt="Youth Golf Foundation"
                    />
                    <div>
                      <p className="font-bold text-sm">Youth Golf Foundation</p>
                      <p className="text-xs text-on-surface-variant">
                        Primary Recipient
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-2xl">
                    <img
                      className="w-12 h-12 rounded-lg object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3n1vW-zrqJZ8g9v3LtRe9uFt_dB4lIpZqQhyzD1FgO4yttrl3wA0hS5tdjkMbl64lG57YXWuvU4vi_qqwvQwhFXgCcJxncqkndS669XN7BDE9avMy3t4Bd2HLNKEkaFrw0rhXiRpfY3V0c1s809R023HaBg1QrTX3feBjDGGNQ7YZP-5r0Aksf069RGqsp07ySf9C2nm1zIwZztAwblInesGBM5hOeU3Bz_v8gnljIb_xNdWHutTBrJ8F7TR5F5Jp4Qd4mnCZ-0Q"
                      alt="Fairway For All"
                    />
                    <div>
                      <p className="font-bold text-sm">Fairway For All</p>
                      <p className="text-xs text-on-surface-variant">
                        Supporting Partner
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Financials & Prize Pool */}
            <div className="lg:col-span-5 space-y-8">
              <section className="bg-primary text-white p-8 rounded-[2rem] relative overflow-hidden">
                {/* Decorative background texture */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad1)"></path>
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        x2="100%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: 'white', stopOpacity: 1 }}
                        ></stop>
                        <stop
                          offset="100%"
                          style={{ stopColor: 'black', stopOpacity: 1 }}
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10 font-['Epilogue']">
                  <span className="material-symbols-outlined">payments</span>
                  Prize Pool Summary
                </h3>
                <div className="mb-8 relative z-10">
                  <label className="block text-xs font-bold uppercase tracking-widest opacity-80 mb-2">
                    Estimated Total Pool
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-black tracking-tighter">$</span>
                    <input
                      className="bg-transparent border-none p-0 text-5xl font-black tracking-tighter w-full focus:ring-0 outline-none"
                      type="number"
                      defaultValue="125000"
                    />
                  </div>
                </div>
                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">5-Match Winners (40%)</span>
                      <span className="font-bold">$50,000</span>
                    </div>
                    <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: '40%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">4-Match Winners (35%)</span>
                      <span className="font-bold">$43,750</span>
                    </div>
                    <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white/70 rounded-full"
                        style={{ width: '35%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">3-Match Winners (25%)</span>
                      <span className="font-bold">$31,250</span>
                    </div>
                    <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white/40 rounded-full"
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Detailed Config */}
              <section className="bg-surface-container-low p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-['Epilogue']">
                  <span className="material-symbols-outlined text-primary">
                    tune
                  </span>
                  Allocation Tuning
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-surface-container-highest rounded-xl">
                    <div>
                      <span className="block text-sm font-bold">
                        5-Match Share
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        Default 40%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="w-16 bg-surface-container-lowest border-none rounded-lg p-2 text-center font-bold text-primary outline-none"
                        type="number"
                        defaultValue="40"
                      />
                      <span className="font-bold text-on-surface-variant">%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-surface-container-highest rounded-xl">
                    <div>
                      <span className="block text-sm font-bold">
                        4-Match Share
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        Default 35%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="w-16 bg-surface-container-lowest border-none rounded-lg p-2 text-center font-bold text-primary outline-none"
                        type="number"
                        defaultValue="35"
                      />
                      <span className="font-bold text-on-surface-variant">%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-surface-container-highest rounded-xl">
                    <div>
                      <span className="block text-sm font-bold">
                        3-Match Share
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        Default 25%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="w-16 bg-surface-container-lowest border-none rounded-lg p-2 text-center font-bold text-primary outline-none"
                        type="number"
                        defaultValue="25"
                      />
                      <span className="font-bold text-on-surface-variant">%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 p-3 bg-tertiary-container/20 rounded-xl">
                  <span className="material-symbols-outlined text-tertiary">
                    verified
                  </span>
                  <span className="text-xs font-bold text-on-tertiary-fixed-variant">
                    Allocations sum to 100%
                  </span>
                </div>
              </section>

              {/* Preview Card */}
              <div
                className="p-6 rounded-[2rem] border border-white/40 shadow-2xl shadow-primary/5"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(24px)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      visibility
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Impact Preview</h4>
                    <p className="text-sm text-on-surface-variant">
                      Based on these settings, this draw will contribute
                      approximately <strong>$15,000</strong> directly to partner
                      charities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
