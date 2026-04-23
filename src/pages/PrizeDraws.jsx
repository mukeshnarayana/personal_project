export default function PrizeDraws() {
  return (
    <>
      <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-8 relative">
        {/* Hero Section: Kinetic Impact */}
        <section className="relative overflow-hidden rounded-[2rem] mb-12 ambient-shadow">
          <div className="grid md:grid-cols-2 min-h-[500px]">
            <div className="hero-gradient p-12 flex flex-col justify-center text-on-primary">
              <span className="text-tertiary-fixed font-bold tracking-widest text-sm mb-4 font-label">LIVE JACKPOT</span>
              <h1 className="font-headline text-6xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-none">
                $24,500
              </h1>
              <p className="text-lg opacity-90 max-w-md mb-10 font-medium font-body">
                Every entry fuels youth golf programs across the country. Play for the prize, stay for the impact.
              </p>
              {/* Timer Component */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 inline-flex gap-8">
                <div>
                  <div className="text-3xl font-black font-headline">04</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60 font-label">Days</div>
                </div>
                <div>
                  <div className="text-3xl font-black font-headline">12</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60 font-label">Hours</div>
                </div>
                <div>
                  <div className="text-3xl font-black font-headline">48</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60 font-label">Mins</div>
                </div>
              </div>
            </div>
            <div className="relative bg-surface-container-highest min-h-[300px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="dramatic wide angle shot of a golfer hitting a ball into the sunrise"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCL4dORCm0dnWN_Dfu96v3O72GKhtFVo6OQX2TllgD9vKEBPv2ETsGj8AzvKXFgUSlD2YbvsuziUZRNCsyVFJ7zTHiXEYR2ItYcJ-2vVjexKWFXXAmx9UsZ8xICNecX_jvtZ7Gp7S_IdV87k4biyL2wPADRFb-jdfAZiwP90j4QcyoAngb9Dlg9IcRNdLDW88rnXHcs-C_zI3KQFDWDHqccGK0FIpNCxLQe_3A0GJr0XqINYLH012lyKwn_qmMpbjrUWhoIFfclyA"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#9c3f00]/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Title Section */}
        <header className="mb-16">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-2">Monthly Prize Draws</h2>
          <div className="h-1.5 w-24 bg-primary-container rounded-full"></div>
        </header>

        {/* How It Works: Asymmetric Bento Grid */}
        <section className="mb-24">
          <h3 className="text-sm font-bold tracking-[0.2em] text-secondary mb-8 uppercase font-label">The Winning Mechanics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 5 Numbers */}
            <div className="md:col-span-2 bg-surface-container-low p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined">stars</span>
                </div>
                <h4 className="font-headline text-3xl font-bold mb-4">5 Matches</h4>
                <p className="text-on-surface-variant max-w-sm font-body">The Grand Slam. Match all 5 numbers to secure 100% of the Monthly Jackpot and a lifetime membership.</p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined !text-[180px]">military_tech</span>
              </div>
              <div className="mt-8 relative z-10">
                <span className="text-primary font-black text-xl font-headline">100% Jackpot Share</span>
              </div>
            </div>

            {/* 4 Numbers */}
            <div className="bg-tertiary-container p-8 rounded-[2rem] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-on-tertiary-container/10 rounded-lg flex items-center justify-center text-on-tertiary-container mb-6">
                  <span className="material-symbols-outlined">looks_4</span>
                </div>
                <h4 className="font-headline text-2xl font-bold text-on-tertiary-container">4 Matches</h4>
              </div>
              <div>
                <p className="text-on-tertiary-container/80 mb-6 font-body">Secure a significant portion of the secondary prize pool plus exclusive merchandise.</p>
                <span className="text-on-tertiary-container font-bold text-lg font-headline">$2,500 Estimated</span>
              </div>
            </div>

            {/* 3 Numbers */}
            <div className="bg-surface-container-highest p-8 rounded-[2rem] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-on-surface/10 rounded-lg flex items-center justify-center text-on-surface mb-6">
                  <span className="material-symbols-outlined">looks_3</span>
                </div>
                <h4 className="font-headline text-2xl font-bold">3 Matches</h4>
              </div>
              <div>
                <p className="text-on-surface-variant mb-6 font-body">Win back your entry fee plus a bonus contribution to your chosen charity.</p>
                <span className="text-on-surface font-bold text-lg font-headline">Entry Refund + Bonus</span>
              </div>
            </div>

            {/* Static Impact Callout */}
            <div className="md:col-span-2 bg-on-surface p-10 rounded-[2rem] text-surface flex items-center justify-between">
              <div className="max-w-md">
                <h4 className="font-headline text-2xl font-bold mb-2">Your swing makes a difference.</h4>
                <p className="opacity-70 font-body">15% of every entry is directly distributed to grassroots golf initiatives and youth scholarships.</p>
              </div>
              <span className="material-symbols-outlined !text-5xl text-primary-fixed">golf_course</span>
            </div>
          </div>
        </section>

        {/* Past Draw Results: Editorial List */}
        <section className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] text-secondary mb-2 uppercase font-label">History of Impact</h3>
              <h2 className="font-headline text-3xl font-extrabold">Past Draw Results</h2>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all font-label">
              View Archive <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* Result Row 1 */}
            <div className="group bg-surface-container-low hover:bg-surface-container-lowest transition-all p-6 rounded-2xl flex flex-wrap md:flex-nowrap items-center justify-between gap-6 ambient-shadow">
              <div className="w-full md:w-48">
                <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 font-label">Oct 31, 2023</div>
                <div className="text-on-surface font-bold font-headline">Halloween Open</div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">12</div>
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">24</div>
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">31</div>
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">07</div>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-headline">18</div>
              </div>
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest font-label">Winners</div>
                  <div className="text-on-surface font-bold font-headline">1,402</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest font-label">Total Payout</div>
                  <div className="text-primary font-black font-headline">$31,200</div>
                </div>
              </div>
            </div>

            {/* Result Row 2 */}
            <div className="group bg-surface-container-low hover:bg-surface-container-lowest transition-all p-6 rounded-2xl flex flex-wrap md:flex-nowrap items-center justify-between gap-6 ambient-shadow">
              <div className="w-full md:w-48">
                <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 font-label">Sep 30, 2023</div>
                <div className="text-on-surface font-bold font-headline">Autumn Classic</div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">05</div>
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">19</div>
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">22</div>
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">45</div>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-headline">03</div>
              </div>
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest font-label">Winners</div>
                  <div className="text-on-surface font-bold font-headline">894</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest font-label">Total Payout</div>
                  <div className="text-primary font-black font-headline">$28,500</div>
                </div>
              </div>
            </div>

            {/* Result Row 3 */}
            <div className="group bg-surface-container-low hover:bg-surface-container-lowest transition-all p-6 rounded-2xl flex flex-wrap md:flex-nowrap items-center justify-between gap-6 ambient-shadow">
              <div className="w-full md:w-48">
                <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 font-label">Aug 31, 2023</div>
                <div className="text-on-surface font-bold font-headline">Summer Finale</div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">11</div>
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">14</div>
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">28</div>
                <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center font-bold text-on-surface font-headline">33</div>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-headline">42</div>
              </div>
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest font-label">Winners</div>
                  <div className="text-on-surface font-bold font-headline">2,105</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest font-label">Total Payout</div>
                  <div className="text-primary font-black font-headline">$42,000</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FAB for focused action */}
      <button className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dim text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group z-50">
        <span className="material-symbols-outlined !text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
        <span className="absolute right-20 bg-on-surface text-surface py-2 px-4 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-label">Enter New Draw</span>
      </button>
    </>
  );
}
