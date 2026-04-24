export default function MyWinnings() {
  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-[#f5f6f7] dark:bg-[#2c2f30] flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-black tracking-tighter text-[#2c2f30] dark:text-[#f5f6f7]">My Winnings</h2>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-surface-container rounded-full px-4 py-2">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search draws..." type="text"/>
          </div>
          <div className="flex items-center space-x-4">
            <span className="material-symbols-outlined text-[#2c2f30] opacity-70 cursor-pointer hover:opacity-80 transition-opacity">notifications</span>
            <span className="material-symbols-outlined text-[#2c2f30] opacity-70 cursor-pointer hover:opacity-80 transition-opacity">help_outline</span>
            <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border-2 border-white shadow-sm">
              <img className="w-full h-full object-cover" alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe7N8-ZksQL580Jf-38DSzQEEkYs6ekpdUV14IOwb0PgbgqQpNsRZE7UjTfmTWOwUDq9HS2Xb6SCgRkn-1QpfKaOdop_Bt2CfCDoaROmt8VZgWzJwG6nqxSSn7BKS7DnEdBYBVsdD9VnrAM_LzEogaTuujicByunBzwgLtdynRZo98Pjy8dYOyjs7trTBnehKK80ujFOt5NgORY9ws_cHYIr591NkyT0vky_3H5rxsYL1U0AQkPc2H23F4_J-5Thbm3IDBvFSLR0U"/>
            </div>
          </div>
        </div>
      </header>

      <main className="p-8 min-h-screen">
        {/* Hero Section: Total Won & Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Impact Card: Total Winnings */}
          <div className="col-span-2 relative overflow-hidden bg-gradient-to-br from-primary to-primary-container rounded-2xl p-10 text-white shadow-2xl flex flex-col justify-between">
            <div className="absolute -right-12 -top-12 opacity-10">
              <span className="material-symbols-outlined text-[20rem]" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Accumulated Impact Rewards</span>
              <h3 className="text-7xl font-black mt-2 leading-none">$12,450.00</h3>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold opacity-70">Charity Contribution</span>
                <span className="text-xl font-bold">$3,112.50</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold opacity-70">Net Personal Win</span>
                <span className="text-xl font-bold">$9,337.50</span>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between border border-outline-variant/10">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Payment Status</span>
                <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-black uppercase">Pending</span>
              </div>
              <p className="text-3xl font-bold mt-4">$2,100.00</p>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Processing from the 'Fairway Philanthropy' draw on Oct 24th.</p>
            </div>
            <button className="w-full py-4 bg-on-surface text-surface rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center space-x-2">
              <span>Withdraw Funds</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h4 className="text-3xl font-black tracking-tight">Draw History</h4>
            <p className="text-on-surface-variant text-sm font-medium">Your participation and performance results.</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-surface-container text-on-surface text-xs font-bold rounded-lg">Last 30 Days</button>
            <button className="px-4 py-2 text-on-surface-variant text-xs font-bold rounded-lg hover:bg-surface-container/50 transition-colors">Export CSV</button>
          </div>
        </div>

        {/* Draw History Bento Grid / List */}
        <div className="space-y-4">
          {/* History Item 1 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 flex items-center justify-between transition-all hover:scale-[1.01] hover:shadow-xl group">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-primary overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Golf ball" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7kB-irgSr9gpd5egfXXBltQgN487F1RWEwHJUsxfVUQBx9bI7D0MaiPZFJfs6XqTnVhw_7GK7zvm5MZEYtPpJ6ZszlzPOjEoxh9DNnr43wg5zCWsOz4Fq0NYvmKL0bV2ycHD2tVg_n3IJa5gMldYMI1bKoH6M_ssLkMRli1NC8EXU5yDGofs8XMLIdnWxIHjkO99Scu0u5qs3nwHIIRvDVgljdQ71UDZlGBtGXrT4u-WM4kykX1HGo07P9dzyg6DAMUXLRAgk9KY"/>
              </div>
              <div>
                <h5 className="font-bold text-lg">Autumn Masters Charity Draw</h5>
                <p className="text-xs text-on-surface-variant font-medium">October 15, 2023 • Entry #TX-99812</p>
              </div>
            </div>
            <div className="flex items-center space-x-12">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase mb-2">Match Result</span>
                <div className="flex space-x-1">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">12</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">24</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">33</span>
                  <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center text-[10px] font-bold">45</span>
                  <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center text-[10px] font-bold">50</span>
                </div>
                <span className="text-[10px] font-bold text-primary mt-1">3-Number Match</span>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-on-surface-variant uppercase">Prize Amount</p>
                <p className="text-xl font-black text-on-surface">$450.00</p>
                <span className="text-[10px] font-bold text-green-600 flex items-center justify-end">
                  <span className="material-symbols-outlined text-xs mr-1">check_circle</span> Paid
                </span>
              </div>
            </div>
          </div>

          {/* History Item 2 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 flex items-center justify-between transition-all hover:scale-[1.01] hover:shadow-xl group">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-primary overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Golf course" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGLBbofE9nws9H6A6s7bYNdM3mc2GSe0yE7uDGW7N0Wgw1R9EnAPMsb1wAdtJUivj7SKMm3FH_2fQqJ5VYlZlwUl80PKKHWZbJlIx4nYeDN7u5sJjhDEcdI7vQeYEUARHcLp3q94lHHCoFxN1JZaTFcWmPhzXfX1kJ4pS95pi3eS5cPjU96m4HTgBWwqgc1kkLpseXEGYoHI8Cl08Mub9uKY-QwFCA6sYokhOy8VwoKblOzAPigOtkkwD3BGes1dzB7jDG4oVeEnQ"/>
              </div>
              <div>
                <h5 className="font-bold text-lg">Pine Valley Invitational</h5>
                <p className="text-xs text-on-surface-variant font-medium">October 02, 2023 • Entry #TX-99745</p>
              </div>
            </div>
            <div className="flex items-center space-x-12">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase mb-2">Match Result</span>
                <div className="flex space-x-1">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">08</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">19</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">22</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">39</span>
                  <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center text-[10px] font-bold">48</span>
                </div>
                <span className="text-[10px] font-bold text-primary mt-1">4-Number Match</span>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-on-surface-variant uppercase">Prize Amount</p>
                <p className="text-xl font-black text-on-surface">$2,800.00</p>
                <span className="text-[10px] font-bold text-green-600 flex items-center justify-end">
                  <span className="material-symbols-outlined text-xs mr-1">check_circle</span> Paid
                </span>
              </div>
            </div>
          </div>

          {/* History Item 3 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 flex items-center justify-between transition-all hover:scale-[1.01] hover:shadow-xl group">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-primary overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Golf clubs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXjheFCdsgt45offObg1fpVZ453GjqjkQU19bUetsGhcBtz2w8QO_47Ob2NmC2-4eGBq_3Qbbb9eYHJQh-dxDaT3FnD3hI5g_4Yyyj-8gJ8BiXMrcVW5i12CSl2PdIga8g6pbKCxR7t4-uVL1pkDzXHX4RIYTDnkT1_JNUgbBMNSp-_rgdtYl3ctOHvn-7eTGxu2EA0qIAXiBeVPA6Kpb-enJbmOm5dQfdzxAJcUSjsQJWrkovauRpRdizQsTYs_VwbMJA5KewUZA"/>
              </div>
              <div>
                <h5 className="font-bold text-lg">Emerald Green Classic</h5>
                <p className="text-xs text-on-surface-variant font-medium">September 24, 2023 • Entry #TX-99102</p>
              </div>
            </div>
            <div className="flex items-center space-x-12">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase mb-2">Match Result</span>
                <div className="flex space-x-1">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">11</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">15</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">29</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">34</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">42</span>
                </div>
                <span className="text-[10px] font-bold text-primary mt-1">5-Number Match</span>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-on-surface-variant uppercase">Prize Amount</p>
                <p className="text-xl font-black text-on-surface">$7,100.00</p>
                <span className="text-[10px] font-bold text-green-600 flex items-center justify-end">
                  <span className="material-symbols-outlined text-xs mr-1">check_circle</span> Paid
                </span>
              </div>
            </div>
          </div>

          {/* Empty State / No More Draws CTA */}
          <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/40 mb-4">history</span>
            <h6 className="font-bold text-on-surface-variant">View Older History</h6>
            <p className="text-xs text-on-surface-variant/70 mt-1">Load more results from your 2023 season.</p>
            <button className="mt-4 px-6 py-2 bg-surface-container-highest rounded-full text-xs font-bold hover:bg-surface-container transition-colors">Load More</button>
          </div>
        </div>
      </main>

      {/* Footer-esque Bottom Notification for Winnings */}
      <div className="fixed bottom-8 right-8 max-w-sm bg-surface-container-lowest shadow-2xl rounded-2xl p-6 border border-primary/10 z-50 animate-bounce">
        <div className="flex space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>celebration</span>
          </div>
          <div>
            <p className="text-sm font-black">Next Draw in 2 Days!</p>
            <p className="text-xs text-on-surface-variant mt-1 leading-tight">Estimated Jackpot: <span className="font-bold text-primary">$25,000</span>. Join now to boost charity impact.</p>
            <button className="mt-3 text-xs font-black text-primary uppercase tracking-widest hover:underline">Buy Entry</button>
          </div>
        </div>
      </div>
    </>
  );
}
