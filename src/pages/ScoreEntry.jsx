export default function ScoreEntry() {
  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-[#f5f6f7] dark:bg-[#2c2f30] flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-black tracking-tighter text-[#2c2f30] dark:text-[#f5f6f7]">Score Entry</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-surface-container-highest px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm" placeholder="Search activities..." type="text"/>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#2c2f30] opacity-70 cursor-pointer hover:opacity-100">notifications</span>
            <span className="material-symbols-outlined text-[#2c2f30] opacity-70 cursor-pointer hover:opacity-100">help_outline</span>
            <div className="h-10 w-10 rounded-full bg-surface-container-high overflow-hidden">
              <img alt="User profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu5T1aAO5qACfrOHLGzDYTgRcBOVFSvb-ws21ZFTV9jS7UHeVVzH0VV0nTSgNNLbH_Dd1BcDqwqB8OPHvBgO-yF5UO-WEJulQIqXQy25ChIN6OvEELSFAM6cjEOLVPIpBqLqjwFhHCkpV180ndLqrnUjO7pmx2yzAJijU_BPMSF97cICWR9D9wTBiXroABNBWMqfdli8OhmH6LAtBJrHiuLcJX_Is6O4ZlwqU_E_lo8bcPkPmn0TYrCeemQtIBoFBZLslHDPSQvmM"/>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <section className="bg-surface-container-low rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-5 rounded-full -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black tracking-tighter mb-2">New Stableford Entry</h3>
                <p className="text-on-surface-variant mb-8 max-w-md">Your new score will displace your oldest entry (Oct 12) from the rolling leaderboard.</p>
                <div className="flex flex-col md:flex-row items-end gap-6">
                  <div className="flex-1 w-full">
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Select Score (1-45)</label>
                    <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl">
                      <span className="material-symbols-outlined text-primary-fixed-dim">scoreboard</span>
                      <input className="w-full text-3xl font-black bg-transparent border-none focus:ring-0" max="45" min="1" type="number" defaultValue="36"/>
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Round Date</label>
                    <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl">
                      <span className="material-symbols-outlined text-primary-fixed-dim">calendar_today</span>
                      <input className="w-full text-lg font-bold bg-transparent border-none focus:ring-0" type="date" defaultValue="2023-10-27"/>
                    </div>
                  </div>
                </div>
                <button className="mt-8 w-full py-5 bg-gradient-to-r from-primary to-primary-container text-white font-black text-lg rounded-full shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">add_circle</span>
                  SUBMIT SCORE TO IMPACT
                </button>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xl font-black uppercase tracking-tight">Rolling 5-Score History</h3>
                <span className="text-xs font-bold text-primary-fixed-dim">LAST UPDATED: 2 MINS AGO</span>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between group hover:bg-white transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-surface-container-high rounded-full flex items-center justify-center text-2xl font-black text-primary">
                      42
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Royal St. George's</h4>
                      <p className="text-sm text-on-surface-variant">Oct 24, 2023 • Par 70</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-tertiary uppercase mb-1">Impact Created</div>
                    <div className="font-black text-xl">$12.40</div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-surface-container-high rounded-full flex items-center justify-center text-2xl font-black text-on-surface-variant opacity-70">
                      38
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Wentworth Club</h4>
                      <p className="text-sm text-on-surface-variant">Oct 20, 2023 • Par 72</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-tertiary uppercase mb-1">Impact Created</div>
                    <div className="font-black text-xl">$8.20</div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-surface-container-high rounded-full flex items-center justify-center text-2xl font-black text-on-surface-variant opacity-70">
                      35
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Sunningdale Golf Club</h4>
                      <p className="text-sm text-on-surface-variant">Oct 18, 2023 • Par 72</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-tertiary uppercase mb-1">Impact Created</div>
                    <div className="font-black text-xl">$5.50</div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-surface-container-high rounded-full flex items-center justify-center text-2xl font-black text-on-surface-variant opacity-70">
                      40
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">St Andrews Links</h4>
                      <p className="text-sm text-on-surface-variant">Oct 15, 2023 • Par 72</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-tertiary uppercase mb-1">Impact Created</div>
                    <div className="font-black text-xl">$10.00</div>
                  </div>
                </div>

                <div className="bg-surface-container-highest/40 p-6 rounded-xl flex items-center justify-between border-2 border-dashed border-outline-variant/20 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-error text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Next Score Displaces This</div>
                  <div className="flex items-center gap-6 opacity-40">
                    <div className="h-16 w-16 bg-surface-container-high rounded-full flex items-center justify-center text-2xl font-black">
                      32
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Old Course</h4>
                      <p className="text-sm text-on-surface-variant">Oct 12, 2023 • Par 72</p>
                    </div>
                  </div>
                  <div className="text-right opacity-40">
                    <div className="text-xs font-bold uppercase mb-1">Impact Created</div>
                    <div className="font-black text-xl">$2.10</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-8">
            <div className="bg-on-surface text-surface p-8 rounded-xl relative overflow-hidden h-80 flex flex-col justify-end">
              <div className="absolute inset-0">
                <img alt="Cinematic golf green" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_v9rcy8kGmA-rNI5SoQ-uJWSTByxsBh87PsJ0hqIOzjD2bN2X9ULkYJw1L_Juo2UhOxxsZcbiWE2nIEMjonAsV8k_Sp2jcYR2l6_Ul20vXZLWGQzDm3CJeaAg5kMnYDqFbmUPp8jiPaDTmTdGnkUtaXwWmPKOOnpyBVQaTtSNFl3ALYMcSIClrx__6kAZAB7v-MtjH1vu2ouwtdqCW_BO_8WOdFxZb4vxCOhv7s8_iJemFInHXV00Wjk7LAHhdgAJQEy1aslOmmw"/>
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent"></div>
              </div>
              <div className="relative z-10">
                <span className="inline-block bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[10px] font-black uppercase mb-4">Live Momentum</span>
                <h4 className="text-5xl font-black leading-none mb-4">YOU'RE DRIVING CHANGE.</h4>
                <p className="text-surface-variant/80 max-w-xs font-medium">Every point entered directly funds clean water initiatives in active developing zones.</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 space-y-6">
              <h4 className="text-lg font-black uppercase tracking-tight">Monthly Impact Summary</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-tertiary-container text-on-tertiary-container p-2 rounded-lg">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>water_drop</span>
                    </div>
                    <span className="font-bold">Clean Water</span>
                  </div>
                  <span className="font-black text-primary">1,240L</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-container text-on-primary-container p-2 rounded-lg">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>school</span>
                    </div>
                    <span className="font-bold">Education Kits</span>
                  </div>
                  <span className="font-black text-primary">42 Kits</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary-container text-on-secondary-container p-2 rounded-lg">
                      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
                    </div>
                    <span className="font-bold">Trees Planted</span>
                  </div>
                  <span className="font-black text-primary">18 Trees</span>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/10">
                <a className="text-sm font-bold text-primary flex items-center justify-center gap-2 hover:underline" href="#">
                  VIEW DETAILED CHARITY LEDGER
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="bg-primary-container/10 p-8 rounded-xl border border-primary-container/20">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">tips_and_updates</span>
                <div>
                  <h5 className="font-black text-sm uppercase mb-1">Entry Tip</h5>
                  <p className="text-sm text-on-surface-variant font-medium leading-relaxed">Stableford scores are verified against course difficulty (Slope Rating). Make sure to select the correct course on the next step for accurate impact calculation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
