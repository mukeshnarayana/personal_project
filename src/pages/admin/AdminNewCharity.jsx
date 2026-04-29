
import { Link } from 'react-router-dom';

export default function AdminNewCharity() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-['Manrope']">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col py-8 px-4 z-50">
        <div className="px-4 mb-10">
          <h1 className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter font-['Epilogue']">
            TeeUp Charity
          </h1>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">
            Admin Console
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 ease-in-out"
            to="/admin/dashboard"
          >
            <span className="material-symbols-outlined" data-icon="dashboard">
              dashboard
            </span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 ease-in-out"
            to="/admin/users"
          >
            <span className="material-symbols-outlined" data-icon="group">
              group
            </span>
            <span className="text-sm font-medium">User Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 ease-in-out"
            to="/admin/draws"
          >
            <span
              className="material-symbols-outlined"
              data-icon="Confirmation_Number"
            >
              confirmation_number
            </span>
            <span className="text-sm font-medium">Draw Management</span>
          </Link>
          {/* ACTIVE TAB: Charity Management */}
          <Link
            className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded-lg font-bold transition-all duration-200 ease-in-out"
            to="/admin/charities"
          >
            <span
              className="material-symbols-outlined"
              data-icon="volunteer_activism"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              volunteer_activism
            </span>
            <span className="text-sm">Charity Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 ease-in-out"
            to="/admin/winners"
          >
            <span className="material-symbols-outlined" data-icon="emoji_events">
              emoji_events
            </span>
            <span className="text-sm font-medium">Winners Management</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 ease-in-out"
            to="/admin/analytics"
          >
            <span className="material-symbols-outlined" data-icon="leaderboard">
              leaderboard
            </span>
            <span className="text-sm font-medium">Analytics</span>
          </Link>
        </nav>
        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 mb-4 shadow-sm">
            <span className="material-symbols-outlined text-sm" data-icon="add">
              add
            </span>
            <span>New Draw</span>
          </button>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 rounded-lg transition-all"
            to="#"
          >
            <span className="material-symbols-outlined" data-icon="help">
              help
            </span>
            <span className="text-sm font-medium">Support</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 rounded-lg transition-all"
            to="/admin-signin"
          >
            <span className="material-symbols-outlined" data-icon="logout">
              logout
            </span>
            <span className="text-sm font-medium">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-72 h-16 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl z-40 flex items-center justify-between px-6 sticky">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl"
              data-icon="search"
            >
              search
            </span>
            <input
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
              placeholder="Search charities, donors, or draws..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all scale-95 active:scale-90 relative">
            <span
              className="material-symbols-outlined text-slate-600 dark:text-slate-400"
              data-icon="notifications"
            >
              notifications
            </span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full"></span>
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all scale-95 active:scale-90">
            <span
              className="material-symbols-outlined text-slate-600 dark:text-slate-400"
              data-icon="settings"
            >
              settings
            </span>
          </button>
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-none">
                Alex Rivera
              </p>
              <p className="text-xs text-slate-500 mt-1">Admin Manager</p>
            </div>
            <img
              alt="Admin profile photo"
              className="w-10 h-10 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzQkBKAjU-kBngrLvoHEivvqv6bvBiWEgRyOgTjwkWJ3ewLdZvSyrq7sRXkCAsw7h2RfTxcM3HoGL-6c-W8Ky-21Y_-CkCpmKgVIPgc3ZMtDllPKoES5NHMGUjOfd6qGLMX0IqCGnY-Qh6hcAag7gRWeyxtsAwQjqpxRvafccbcWjrYs0oEs9tXmrjRb97iJ6winBgQWv27VvMaYquXV_wu1P2URh_zDH8jq603P29bYsc9qwBpeJ1WQ2Sqv1YRxUnSt9GOMtZ43Y"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-72 pt-16 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="flex items-end justify-between mb-10 gap-8">
            <div className="max-w-2xl">
              <nav className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                <Link to="/admin/charities" className="hover:underline text-slate-600">Charity Management</Link>
                <span className="material-symbols-outlined text-xs" data-icon="chevron_right">
                  chevron_right
                </span>
                <span className="text-orange-600 font-bold">
                  Add New Charity
                </span>
              </nav>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight italic font-['Epilogue']">
                KINETIC <span className="text-orange-600 not-italic">IMPACT</span>
              </h2>
              <p className="text-lg text-slate-600 mt-2 font-medium opacity-80">
                Define the next chapter of corporate philanthropy. Launch a new
                charitable partnership.
              </p>
            </div>
            <div className="flex gap-4 mb-2">
              <Link
                className="px-8 py-3 rounded-full font-bold text-slate-600 bg-slate-200 hover:bg-slate-300 transition-colors inline-block"
                to="/admin/charities"
              >
                Cancel
              </Link>
              <button className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-orange-600 to-orange-500 shadow-xl shadow-orange-600/20 hover:scale-105 transition-transform">
                Save Charity
              </button>
            </div>
          </div>

          {/* Bento Grid Content */}
          <div className="grid grid-cols-12 gap-6">
            {/* Basic Information Card */}
            <section className="col-span-12 lg:col-span-8 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-50 rounded-xl">
                  <span
                    className="material-symbols-outlined text-orange-600"
                    data-icon="description"
                  >
                    description
                  </span>
                </div>
                <h3 className="text-xl font-bold font-['Epilogue']">Core Identity</h3>
              </div>
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-bold text-slate-600 mb-2 ml-1">
                    Charity Name
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:opacity-30 outline-none"
                    placeholder="e.g. Green Links Initiative"
                    type="text"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-slate-600 mb-2 ml-1">
                    Mission Statement
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:opacity-30 outline-none"
                    placeholder="One powerful sentence that defines your purpose..."
                    type="text"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-slate-600 mb-2 ml-1">
                    Detailed Description
                  </label>
                  <textarea
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:opacity-30 outline-none"
                    placeholder="Tell the full story of your impact, your history, and your goals..."
                    rows="6"
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Sidebar Info: Impact Categories */}
            <section className="col-span-12 lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-50 rounded-xl">
                    <span
                      className="material-symbols-outlined text-yellow-600"
                      data-icon="category"
                    >
                      category
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-['Epilogue']">Impact Focus</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-bold text-xs hover:bg-yellow-200 transition-colors">
                    Environment
                  </button>
                  <button className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-xs hover:bg-yellow-100/50 transition-colors">
                    Youth Sports
                  </button>
                  <button className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-xs hover:bg-yellow-100/50 transition-colors">
                    Medical Research
                  </button>
                  <button className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-xs hover:bg-yellow-100/50 transition-colors">
                    Education
                  </button>
                  <button className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-xs hover:bg-yellow-100/50 transition-colors">
                    Animal Welfare
                  </button>
                  <button className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-xs hover:bg-yellow-100/50 transition-colors">
                    Human Rights
                  </button>
                  <button className="px-4 py-2 rounded-full bg-slate-50 text-slate-500 border border-dashed border-slate-300 font-bold text-xs flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="add"
                    >
                      add
                    </span>
                    Add Custom
                  </button>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-100 rounded-3xl p-8 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-orange-700 mb-2 font-['Epilogue']">
                    Need Help?
                  </h3>
                  <p className="text-sm text-orange-900 opacity-80 leading-relaxed mb-4">
                    Our partnership managers are available to help you craft the
                    perfect profile.
                  </p>
                  <Link
                    className="text-orange-700 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                    to="#"
                  >
                    Consult the Guide
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
                <span
                  className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl text-orange-600/5 rotate-12"
                  data-icon="volunteer_activism"
                >
                  volunteer_activism
                </span>
              </div>
            </section>

            {/* Media Uploads Section */}
            <section className="col-span-12 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-xl">
                    <span
                      className="material-symbols-outlined text-orange-600"
                      data-icon="photo_library"
                    >
                      photo_library
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-['Epilogue']">Media Assets</h3>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Hi-Res Assets Recommended
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {/* Logo Upload */}
                <div className="md:col-span-1 lg:col-span-1 aspect-square bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 hover:border-orange-500/40 hover:bg-orange-50 transition-all cursor-pointer group">
                  <span
                    className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-orange-600 mb-2"
                    data-icon="add_a_photo"
                  >
                    add_a_photo
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter opacity-60">
                    Brand Logo
                  </span>
                </div>
                {/* Hero Image Upload */}
                <div className="md:col-span-3 lg:col-span-3 relative rounded-3xl overflow-hidden bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center min-h-[180px] hover:border-orange-500/40 transition-all cursor-pointer group">
                  <div className="text-center">
                    <span
                      className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-orange-600 mb-2"
                      data-icon="landscape"
                    >
                      landscape
                    </span>
                    <p className="text-sm font-bold">Hero Banner Image</p>
                    <p className="text-[10px] opacity-40 uppercase font-black mt-1">
                      Recommended: 1920 x 1080px
                    </p>
                  </div>
                </div>
                {/* Gallery Images Placeholder */}
                <div className="md:col-span-2 lg:col-span-2 bg-slate-100 rounded-3xl p-6 flex flex-col justify-center">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-3 opacity-60">
                    Gallery Images
                  </h4>
                  <div className="flex -space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-white border-4 border-slate-100 flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-slate-300"
                        data-icon="image"
                      >
                        image
                      </span>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-white border-4 border-slate-100 flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-slate-300"
                        data-icon="image"
                      >
                        image
                      </span>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-white border-4 border-slate-100 flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-slate-300"
                        data-icon="image"
                      >
                        image
                      </span>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-orange-100 border-4 border-slate-100 flex items-center justify-center cursor-pointer hover:bg-orange-200 transition-colors">
                      <span
                        className="material-symbols-outlined text-orange-600 text-xl"
                        data-icon="add"
                      >
                        add
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information Card */}
            <section className="col-span-12 lg:col-span-12 bg-white rounded-3xl p-8 mb-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-orange-50 rounded-xl">
                  <span
                    className="material-symbols-outlined text-orange-600"
                    data-icon="contact_mail"
                  >
                    contact_mail
                  </span>
                </div>
                <h3 className="text-xl font-bold font-['Epilogue']">
                  Representative Contact
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group">
                  <label className="block text-sm font-bold text-slate-600 mb-2 ml-1">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:opacity-30 outline-none"
                    placeholder="e.g. Sarah Jenkins"
                    type="text"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-slate-600 mb-2 ml-1">
                    Work Email
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:opacity-30 outline-none"
                    placeholder="sarah@charitylink.org"
                    type="email"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-slate-600 mb-2 ml-1">
                    Official Website
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-900 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:opacity-30 outline-none"
                    placeholder="https://www.charitylink.org"
                    type="url"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Mobile-only footer actions */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 flex gap-3 shadow-2xl z-50">
            <Link
              className="flex-1 py-4 rounded-2xl font-bold text-slate-600 bg-slate-100 text-center"
              to="/admin/charities"
            >
              Cancel
            </Link>
            <button className="flex-2 px-8 py-4 rounded-2xl font-bold text-white bg-orange-600">
              Save Charity
            </button>
          </div>
        </div>
      </main>

      {/* Visual Polish: Decorative Elements */}
      <div className="fixed top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-orange-500/5 to-transparent -z-10 blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 left-1/4 w-1/4 h-1/4 bg-gradient-to-tr from-yellow-500/5 to-transparent -z-10 blur-3xl pointer-events-none"></div>
    </div>
  );
}
