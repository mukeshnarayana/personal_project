
import { Link } from 'react-router-dom';

export default function AdminCharities() {
  return (
    <div className="bg-surface text-on-surface antialiased font-['Manrope'] min-h-screen">
      {/* SideNavBar */}
      <aside className="h-screen w-72 fixed left-0 top-0 flex flex-col py-8 px-4 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 z-50">
        <div className="mb-10 px-4">
          <h1 className="text-2xl font-black text-orange-600 dark:text-orange-500 tracking-tighter font-['Epilogue']">
            TeeUp Charity
          </h1>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
            Admin Console
          </p>
        </div>
        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto no-scrollbar">
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
            className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 rounded-lg font-bold transition-all duration-200 ease-in-out"
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
        <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button className="mb-4 bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95">
            <span className="material-symbols-outlined text-sm">
              add_circle
            </span>
            Quick Report
          </button>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium text-sm">Settings</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="#"
          >
            <span className="material-symbols-outlined">help_outline</span>
            <span className="font-medium text-sm">Support</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 ease-in-out rounded-lg"
            to="/admin-signin"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium text-sm">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="flex justify-between items-center px-6 w-full sticky top-0 z-40 h-16 ml-72 w-[calc(100%-18rem)] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="relative group transition-all">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600">
              search
            </span>
            <input
              className="bg-slate-100 dark:bg-slate-800 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-orange-500/20 w-80 font-medium outline-none"
              placeholder="Search charity partners..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all scale-95 active:scale-90">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                Admin User
              </p>
              <p className="text-[10px] text-slate-500 font-medium">
                System Master
              </p>
            </div>
            <button className="flex items-center justify-center transition-all scale-95 active:scale-90">
              <img
                alt="Admin Profile"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcKVhu0m7Wh5j1HokVzU9-MtvBDBd6ihMqXaAPu8VAu0vb9xphwZu9Iw2rMfa2Z0kaoAP_L2EDoVJ8OrpExL_5K1nqVl_wGSMGXvIYB3EzZpRmaDlUlfxoabTc3bRt0YvZp-u4w8uqY_fbfaYAmcFuE6felSx9QgkHKqYjOSUSTtHJhnDlKW3Qj5GLJyvoNS2T__owXLR2hP3dHOig_lus8HxWh3BlVL0mIc9U4AcPPv1wyavL1nCRzpByQl_sEmjTKGQ2Gv2sivs"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-72 pt-8 pb-12 px-8">
        {/* Header Section */}
        <section className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-5xl font-black font-['Epilogue'] tracking-tighter text-on-surface mb-2">
              Charity Management
            </h2>
            <p className="text-on-surface-variant max-w-xl font-medium">
              Curate and oversee the non-profit partners that fuel the Kinetic
              Philanthropy ecosystem. Manage profiles, track impact, and scale
              your reach.
            </p>
          </div>
          <Link
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-transform active:scale-95 shadow-xl"
            to="/admin/charities/new"
          >
            <span className="material-symbols-outlined">add</span>
            Add New Charity
          </Link>
        </section>

        {/* Stats Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="col-span-1 md:col-span-2 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/15">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined p-3 bg-tertiary-container rounded-xl text-on-tertiary-container">
                volunteer_activism
              </span>
              <span className="text-xs font-bold text-on-surface-variant flex items-center gap-1">
                LIVE DATA{' '}
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
              </span>
            </div>
            <p className="text-on-surface-variant font-bold text-sm mb-1 uppercase tracking-widest">
              Total Contributions
            </p>
            <h3 className="text-6xl font-black font-['Epilogue'] text-on-surface tracking-tighter">
              $2.4M
            </h3>
            <div className="mt-4 flex items-center gap-2 text-orange-600 font-bold">
              <span className="material-symbols-outlined">trending_up</span>
              <span>14.2% growth this month</span>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 flex flex-col justify-between">
            <div>
              <p className="text-on-surface-variant font-bold text-sm mb-4 uppercase tracking-widest">
                Active Partners
              </p>
              <h3 className="text-4xl font-black font-['Epilogue'] text-on-surface">
                48
              </h3>
            </div>
            <div className="flex -space-x-3">
              <img
                alt="Partner"
                className="w-10 h-10 rounded-full border-4 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHP0WD3IpYzsDUTLDpAVcnuKHoPe6NuNFDTafeIJNjTxRnjV4GXg38cdqUDeLq-ZTHuWZCc7tVGIpH60dFnCaSFJWTmgqFI9nQ-sEOR-1-mvyOduD75xLdhQiZOnOYv-IUuLAIoNaFok-wE-mkgtaBuZ6Pc1k2yldOYu5Frk_rH8e3Cp9_zf6hSYK6hhh8r-7Tkulmgr2E05IVrYQmlYNNcpDNQiVBlQQpUCQsohRZtp_F42BCTRJo-91aYC2EYkzmv9KjVgU1ALY"
              />
              <img
                alt="Partner"
                className="w-10 h-10 rounded-full border-4 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy8rjrIEOaRxpmt6BtLt3azMps5XKUkOmygXipcnl0J1_a0tYTuQQOtLekDv5rIMvrBYrq3aYxVR3NYrnPLya1Ohi1TmNnjy1r4bK8dBNt-ZOn7dLJbayf7EDIZLANlAgV6qur-ZHQrOTCSAnjkEcLphVEjZuSN8AGkjMZbB7WyVWkpVIleGPosWHYYsZVWHPspbZIngJNiJj-1truSZu3wAEQx-CDTiYL_I19dPVLqbQqKTpVZeavYGWMrb5jNUDo68Rbffp8RFo"
              />
              <img
                alt="Partner"
                className="w-10 h-10 rounded-full border-4 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHLtDrShZGDvqfxvaxNPlnjtBQVZuKiy4Yae5V3GW2a-Bpmh9PIFX3UnWe2JTiVZHgIK78bDowAFuNT5hg9ZujK5aFKI6JyCJJ1tMM2ObfSPSJr4PjEjpeo0NETlxrmdi7YygbM75jI9Da-RGK5tji2BqtAwv95DBnaV5fphm8Nr84kWMpblmfi-YkhuyPfQppmbJf137SIkpxPZoVpvmdckzt10iMQZe2S66gEairqxZBhAwl338f-c21ykI6dfOWzr2KCwa4VyA"
              />
              <div className="w-10 h-10 rounded-full border-4 border-surface bg-surface-container-highest flex items-center justify-center text-xs font-bold">
                +45
              </div>
            </div>
          </div>
          <div className="bg-orange-600 text-white rounded-xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="font-bold text-sm mb-4 uppercase tracking-widest opacity-80">
                Impact Score
              </p>
              <h3 className="text-4xl font-black font-['Epilogue']">94.8</h3>
            </div>
            <div className="relative z-10 flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              <span className="font-bold">Top Performance Tier</span>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          </div>
        </section>

        {/* Search & Filter Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm">
              All Charities
            </button>
            <button className="bg-surface-container-highest text-on-surface px-6 py-2 rounded-full font-bold text-sm hover:bg-surface-container-high">
              Environment
            </button>
            <button className="bg-surface-container-highest text-on-surface px-6 py-2 rounded-full font-bold text-sm hover:bg-surface-container-high">
              Youth Sports
            </button>
            <button className="bg-surface-container-highest text-on-surface px-6 py-2 rounded-full font-bold text-sm hover:bg-surface-container-high">
              Medical Research
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-on-surface-variant font-bold text-sm uppercase tracking-tighter">
              Sort by:
            </span>
            <select className="bg-transparent border-none text-on-surface font-bold text-sm focus:ring-0 outline-none">
              <option>Highest Impact</option>
              <option>Recently Added</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Charity Cards List */}
        <div className="space-y-6">
          {/* Charity 01 */}
          <div className="group grid grid-cols-12 bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container transition-colors duration-300">
            <div className="col-span-3 h-64 relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNWzRCzvbVVvpo0dbiztEpxCdH7hRBm1U-xKho8dfNJ6jR0mPt8kNio1gRLBeY7m2ILyePuNyga2kHUNOSOMJEfxXAc8C91kDsDqY20I4QnlzSzDeiG6yfr5m359ahq_MvsfL8lkUPP80T7o5ssLfz1htKp3jXsBuCVaHyuf7Ujk7AE2yYeWe5-OeQvyqgKOv8sSiqT1Tmc7k9RUthqLsAsFc8zsHMP_sX_xDG5Ps3J5eOjSo1qw_IZxQcs8U__8jELfPQ0HwssUY"
                alt="Green Tee Initiative"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <span className="bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full w-fit mb-2">
                  Environment
                </span>
              </div>
            </div>
            <div className="col-span-6 p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-black font-['Epilogue'] text-on-surface mb-2">
                  Green Tee Initiative
                </h4>
                <p className="text-on-surface-variant font-medium text-sm line-clamp-3">
                  Pioneering sustainable golf course maintenance and carbon
                  offset programs across global tournament sites. Our mission is
                  to transform the game into a net-positive environmental force.
                </p>
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                    Total Raised
                  </p>
                  <p className="text-xl font-black font-['Epilogue'] text-on-surface">
                    $842,000
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                    Projects Completed
                  </p>
                  <p className="text-xl font-black font-['Epilogue'] text-on-surface">
                    12
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 p-8 border-l border-outline-variant/15 flex flex-col justify-center gap-3">
              <button className="w-full bg-surface-container-highest hover:bg-slate-200 text-on-surface py-3 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit Profile
              </button>
              <button className="w-full bg-surface-container-highest hover:bg-slate-200 text-on-surface py-3 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">image</span>
                Media Assets
              </button>
              <button className="w-full text-error hover:bg-error/5 py-3 rounded-full font-bold text-xs transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  delete
                </span>
                Archive Charity
              </button>
            </div>
          </div>

          {/* Charity 02 */}
          <div className="group grid grid-cols-12 bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container transition-colors duration-300">
            <div className="col-span-3 h-64 relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSzVExFY4w6ehlLLmXpZa7eSGSJVytWbt0vt5SDnWk9lagDA-ytRwOs-hxFRBbI3hP4bIIXuF7MB5tw96JdK3QPBeT0Aq4Foqq8mF7Y0CnRMkBqfJlTjHROHj7nKue8yb-6pSohTrjCeexpuBCRoJkChlYI8WxkqBv5qpFMt8jgiuObHSs8dZPL2oaI2D9_NDzf7Jh4cZa2AyyrrjDF0aK0AzP_pRgZEhRzo2ejQGePS0SgQxS98twxvIC1Abf19b5dXUW3iPq-uo"
                alt="Junior Fairways Foundation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <span className="bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full w-fit mb-2">
                  Youth Support
                </span>
              </div>
            </div>
            <div className="col-span-6 p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-black font-['Epilogue'] text-on-surface mb-2">
                  Junior Fairways Foundation
                </h4>
                <p className="text-on-surface-variant font-medium text-sm line-clamp-3">
                  Breaking financial barriers for underprivileged youth to access
                  the sport, fostering leadership, discipline, and community
                  through professional coaching and mentorship.
                </p>
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                    Total Raised
                  </p>
                  <p className="text-xl font-black font-['Epilogue'] text-on-surface">
                    $1,105,400
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                    Scholars Active
                  </p>
                  <p className="text-xl font-black font-['Epilogue'] text-on-surface">
                    320
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 p-8 border-l border-outline-variant/15 flex flex-col justify-center gap-3">
              <button className="w-full bg-surface-container-highest hover:bg-slate-200 text-on-surface py-3 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit Profile
              </button>
              <button className="w-full bg-surface-container-highest hover:bg-slate-200 text-on-surface py-3 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">image</span>
                Media Assets
              </button>
              <button className="w-full text-error hover:bg-error/5 py-3 rounded-full font-bold text-xs transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  delete
                </span>
                Archive Charity
              </button>
            </div>
          </div>

          {/* Charity 03 */}
          <div className="group grid grid-cols-12 bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container transition-colors duration-300">
            <div className="col-span-3 h-64 relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiYntt7TBBtHGeAqqbbv1QGTbeJu74oOJ_l289Zqkd2HsuoG_0-krY1imZ3D9cF194yvbKVyFrPV3yFxUHqFP70cWdRfbBP-Tqml-LJno0k5aQwATECBPZFhrNnr6F1yLpPhD1ZsQqUMIuJ_v-HWUo9znGqdy_ml0tXPU6RuKlyFP436oXlrhCcl1JH7AFBuxpflRSG-0hF5t7W9OeR9NI68YjM12wOxOsbP2P4hRBSVG9zsfJdkJMn3WEUteZoSZ_SZyOc-wjSok"
                alt="Eagle Eye Research"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <span className="bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full w-fit mb-2">
                  Medical
                </span>
              </div>
            </div>
            <div className="col-span-6 p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-black font-['Epilogue'] text-on-surface mb-2">
                  Eagle Eye Research
                </h4>
                <p className="text-on-surface-variant font-medium text-sm line-clamp-3">
                  Supporting groundbreaking oncology research through
                  high-profile golf tournaments. Connecting athletes with
                  world-class scientists to accelerate life-saving discoveries.
                </p>
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                    Total Raised
                  </p>
                  <p className="text-xl font-black font-['Epilogue'] text-on-surface">
                    $456,200
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                    Grants Issued
                  </p>
                  <p className="text-xl font-black font-['Epilogue'] text-on-surface">
                    5
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 p-8 border-l border-outline-variant/15 flex flex-col justify-center gap-3">
              <button className="w-full bg-surface-container-highest hover:bg-slate-200 text-on-surface py-3 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit Profile
              </button>
              <button className="w-full bg-surface-container-highest hover:bg-slate-200 text-on-surface py-3 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">image</span>
                Media Assets
              </button>
              <button className="w-full text-error hover:bg-error/5 py-3 rounded-full font-bold text-xs transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  delete
                </span>
                Archive Charity
              </button>
            </div>
          </div>
        </div>

        {/* Footer / Pagination */}
        <footer className="mt-12 flex items-center justify-between">
          <p className="text-sm font-bold text-on-surface-variant">
            Showing <span className="text-on-surface">3</span> of{' '}
            <span className="text-on-surface">48</span> Charities
          </p>
          <div className="flex gap-2">
            <button className="p-3 bg-surface-container-highest text-on-surface rounded-full hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center px-4 font-black text-sm">
              1 / 16
            </div>
            <button className="p-3 bg-surface-container-highest text-on-surface rounded-full hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
