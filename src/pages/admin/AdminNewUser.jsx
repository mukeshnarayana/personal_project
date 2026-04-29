
import { Link } from 'react-router-dom';

export default function AdminNewUser() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      {/* Shell Container */}
      <div className="flex flex-1">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col h-screen w-72 fixed left-0 top-0 z-50 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 py-8 px-4">
          <div className="px-4 mb-10">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter font-['Epilogue']">
                TeeUp Charity
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">
              Admin Console
            </p>
          </div>
          <nav className="space-y-1 flex-1">
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
              to="/admin/dashboard"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded-lg font-bold transition-all duration-200 ease-in-out"
              to="/admin/users"
            >
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-medium">User Management</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
              to="/admin/draws"
            >
              <span className="material-symbols-outlined">
                confirmation_number
              </span>
              <span className="text-sm font-medium">Draw Management</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
              to="/admin/charities"
            >
              <span className="material-symbols-outlined">
                volunteer_activism
              </span>
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
          <div className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-800">
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all rounded-lg"
              to="#"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="text-sm font-medium">Help Center</span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all rounded-lg"
              to="/admin-signin"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Logout</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <div className="flex-1 md:ml-72 flex flex-col min-h-screen">
          {/* TopNavBar */}
          <header className="flex justify-between items-center px-6 w-full h-16 sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center flex-1 max-w-xl">
              <div className="relative w-full group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                  search
                </span>
                <input
                  className="w-full bg-slate-100/50 dark:bg-slate-800/50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                  placeholder="Search..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all scale-95 active:scale-90">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all scale-95 active:scale-90">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all scale-95 active:scale-90">
                <span className="material-symbols-outlined">person</span>
              </button>
            </div>
          </header>

          <main className="p-4 md:p-10 lg:p-12 max-w-7xl mx-auto w-full flex-1">
            {/* Header Section */}
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <nav className="flex items-center gap-2 text-sm font-medium text-secondary mb-4">
                  <Link to="/admin/users" className="hover:underline text-slate-600">User Management</Link>
                  <span className="material-symbols-outlined text-xs">
                    chevron_right
                  </span>
                  <span className="text-on-surface">Add New Entry</span>
                </nav>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface font-['Epilogue']">
                  New Subscriber
                </h1>
                <p className="text-secondary max-w-md">
                  Onboard a new philanthropist to the TeeUp network. All fields
                  marked with * are required.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  className="px-8 py-3 rounded-full font-bold text-on-surface bg-surface-container-highest hover:bg-surface-container-high transition-colors inline-block text-center"
                  to="/admin/users"
                >
                  Cancel
                </Link>
                <button className="px-10 py-3 rounded-full font-bold text-white bg-gradient-to-r from-primary to-orange-400 shadow-xl shadow-primary/20 hover:scale-[0.98] transition-all">
                  Add Subscriber
                </button>
              </div>
            </header>

            {/* Form Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Section 1: Personal Info */}
              <section className="lg:col-span-8 space-y-8">
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-8 border-b border-surface-container pb-4">
                    <span className="material-symbols-outlined text-primary">
                      person
                    </span>
                    <h2 className="text-xl font-bold tracking-tight font-['Epilogue']">
                      Personal Information
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                        Full Name *
                      </label>
                      <input
                        className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                        placeholder="e.g. Cameron Smith"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                        Email Address *
                      </label>
                      <input
                        className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                        placeholder="cameron@example.com"
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                        Golf Handicap (1-45)
                      </label>
                      <input
                        className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                        max="45"
                        min="1"
                        placeholder="12"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                        Home Club
                      </label>
                      <input
                        className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                        placeholder="St Andrews Links"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Initial Scores */}
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-8 border-b border-surface-container pb-4">
                    <span className="material-symbols-outlined text-primary">
                      scorecard
                    </span>
                    <h2 className="text-xl font-bold tracking-tight font-['Epilogue']">
                      Initial Stableford Scores{" "}
                      <span className="text-sm font-normal text-secondary ml-2">
                        (Optional)
                      </span>
                    </h2>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-tighter text-secondary block text-center">
                        Score 1
                      </label>
                      <input
                        className="w-full text-center bg-surface-container-highest border-none rounded-xl py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                        placeholder="0"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-tighter text-secondary block text-center">
                        Score 2
                      </label>
                      <input
                        className="w-full text-center bg-surface-container-highest border-none rounded-xl py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                        placeholder="0"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-tighter text-secondary block text-center">
                        Score 3
                      </label>
                      <input
                        className="w-full text-center bg-surface-container-highest border-none rounded-xl py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                        placeholder="0"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-tighter text-secondary block text-center">
                        Score 4
                      </label>
                      <input
                        className="w-full text-center bg-surface-container-highest border-none rounded-xl py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                        placeholder="0"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-tighter text-secondary block text-center">
                        Score 5
                      </label>
                      <input
                        className="w-full text-center bg-surface-container-highest border-none rounded-xl py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                        placeholder="0"
                        type="number"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-secondary italic">
                    These scores will be used to establish the user's starting
                    impact velocity.
                  </p>
                </div>
              </section>

              {/* Sidebar Sections */}
              <aside className="lg:col-span-4 space-y-8">
                {/* Subscription Details */}
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">
                      card_membership
                    </span>
                    <h2 className="text-lg font-bold tracking-tight font-['Epilogue']">
                      Tier Selection
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <label className="relative block cursor-pointer group">
                      <input
                        className="peer absolute opacity-0"
                        name="plan"
                        type="radio"
                        defaultChecked
                      />
                      <div className="p-4 rounded-xl border-2 border-transparent bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-on-surface">
                              Monthly Pro
                            </p>
                            <p className="text-2xl font-black text-primary">
                              $29
                              <span className="text-sm font-normal text-secondary">
                                /mo
                              </span>
                            </p>
                          </div>
                          <span
                            className="material-symbols-outlined text-primary opacity-0 peer-checked:opacity-100"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check_circle
                          </span>
                        </div>
                      </div>
                    </label>
                    <label className="relative block cursor-pointer group">
                      <input
                        className="peer absolute opacity-0"
                        name="plan"
                        type="radio"
                      />
                      <div className="p-4 rounded-xl border-2 border-transparent bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-on-surface">
                              Annual Legend
                            </p>
                            <p className="text-2xl font-black text-primary">
                              $279
                              <span className="text-sm font-normal text-secondary">
                                /yr
                              </span>
                            </p>
                          </div>
                          <span
                            className="material-symbols-outlined text-primary opacity-0 peer-checked:opacity-100"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check_circle
                          </span>
                        </div>
                        <div className="mt-2 text-[10px] font-bold text-tertiary uppercase tracking-widest bg-tertiary-container/30 inline-block px-2 py-0.5 rounded">
                          Best Value
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Charity Assignment */}
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">
                      volunteer_activism
                    </span>
                    <h2 className="text-lg font-bold tracking-tight font-['Epilogue']">
                      Primary Charity
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors">
                        search
                      </span>
                      <input
                        className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="Search charities..."
                        type="text"
                      />
                    </div>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-left border border-transparent hover:border-outline-variant/20">
                        <div className="w-10 h-10 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                          <span className="material-symbols-outlined">eco</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">Green Tee Initiative</p>
                          <p className="text-[10px] text-secondary">
                            Environmental Conservation
                          </p>
                        </div>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-left border border-transparent hover:border-outline-variant/20">
                        <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">
                            school
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">Scholars of the Green</p>
                          <p className="text-[10px] text-secondary">
                            Youth Education
                          </p>
                        </div>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors text-left border border-transparent hover:border-outline-variant/20">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">
                            medication
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">Fairway Health</p>
                          <p className="text-[10px] text-secondary">
                            Community Wellness
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Profile Image (Decorative Anchor) */}
                <div className="relative group h-64 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    alt="Golf course at sunset"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrOVUQow25HtovTeqvxLxk86PwoQ-f0FSH3XfBKnkhXj3-eWDfKWheP36CL5gAoZkBnqEBL2U8SVyooNteIbYI7ei6hCY8b44JMekou8EhuAuRS9lmbogYh46xsK1BxjFAHqLjNagNQ1HWo68pvE3NvuMQ2rX2IK7k71xIUE6lKRLgDXq-sdwzJU1ut0eBkmShKJoApSbJTersmM2E_X4-2vJ4PCMG0VAFZWfn6t9P3L4O4yuEAKLcfM3hg61_65GZPf9gq8BEGKs"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-headline text-xl font-black leading-tight tracking-tight">
                      "The impact of a single swing reaches far beyond the green."
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            {/* Footer Action Bar (Mobile only) */}
            <div className="md:hidden mt-8 space-y-4">
              <button className="w-full px-10 py-5 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-orange-400 shadow-xl shadow-primary/20">
                Add Subscriber
              </button>
              <Link
                className="w-full px-8 py-5 rounded-xl font-bold text-on-surface bg-surface-container-highest inline-block text-center"
                to="/admin/users"
              >
                Cancel
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
