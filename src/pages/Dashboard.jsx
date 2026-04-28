import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-end mb-10 p-10 pb-0">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Impact Dashboard</h1>
          <p className="text-on-surface-variant font-medium">Welcome back, Alex. Your swings are driving real change.</p>
        </div>
        <button
          onClick={() => navigate('/score-entry')}
          className="bg-gradient-to-br from-[#9c3f00] to-[#ff7a2f] text-on-primary px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined">add</span>
          Enter New Score
        </button>
      </header>

      <main className="p-10 pt-0">
        <div className="grid grid-cols-12 gap-8 mt-10">
          {/* Quick Stats Bento Section */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Status Card */}
            <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[120px]">verified</span>
              </div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Subscription Status</p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#f66700] rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold">Active Premium</h3>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Next Renewal</span>
                <span className="font-bold">Oct 12, 2024</span>
              </div>
            </div>

            {/* Charity Contribution Card */}
            <div className="bg-tertiary-container p-8 rounded-xl relative overflow-hidden">
              <p className="text-xs font-bold text-on-tertiary-container uppercase tracking-widest mb-4">Total Impact</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black text-on-tertiary-container">$1,240</span>
                <span className="text-on-tertiary-container font-medium">.00</span>
              </div>
              <p className="text-sm text-on-tertiary-container/80 font-medium leading-tight">Your contributions have supported 14 children's education funds.</p>
            </div>
          </div>

          {/* Next Draw Prominent Card */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-on-background p-12 rounded-xl h-full flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center opacity-20 grayscale mix-blend-overlay" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBG_A6ryra0bX3AXasRJq-FSEx0lyOWmiApvpUT8MbeoYjbsqofpCTyWlJORcckRfrTxbSSDCYZM1VXv-UJkMncGs7nZDiU-BHJtEJngkUm5Agm-vS8yvPjvH7BMzdca-Lf9z8fv8EIuCvWZOrF9Qw48cM3tLh_V79g6LDTgnEVQjlNs2Xz8pRE3-OihkRt_E1RAy6bUKZ1YKluafHfjgNpzbojWg0PgGnPLFsvObJvishObudVHjpEsqwWdwgxXCvoBdJyWdUxsHw')"}}></div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="inline-block px-4 py-1 bg-primary rounded-full text-white text-[10px] font-black tracking-widest uppercase mb-6">Monthly Major Draw</span>
                  <h2 className="text-5xl font-black text-surface tracking-tighter mb-2">The Golden Ticket</h2>
                  <p className="text-surface-container-high text-lg">Guaranteed jackpot for the highest points score of the month.</p>
                </div>
                <div className="text-right">
                  <p className="text-on-surface-variant text-xs font-bold uppercase mb-2">Current Jackpot</p>
                  <p className="text-5xl font-black text-[#f66700] tracking-tighter">$25,000</p>
                </div>
              </div>
              <div className="relative z-10 flex gap-12 mt-12">
                <div className="text-center">
                  <p className="text-4xl font-black text-white">08</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Days</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-white">14</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Hours</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-white">32</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Mins</p>
                </div>
                <div className="ml-auto">
                  <button className="bg-surface text-on-background px-8 py-4 rounded-xl font-black hover:bg-primary-container hover:text-white transition-all">Check Eligibility</button>
                </div>
              </div>
            </div>
          </div>

          {/* Score Entry (Rolling 5) */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-surface-container-lowest p-10 rounded-xl">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black tracking-tight">Rolling 5 Performance</h3>
                <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  Avg 38.2
                </div>
              </div>
              {/* Entry Grid */}
              <div className="grid grid-cols-5 gap-4 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant ml-1">Today</label>
                  <input className="w-full h-16 bg-surface-container-highest border-0 rounded-xl text-center text-xl font-bold focus:ring-2 focus:ring-primary/20 transition-all" placeholder="--" type="number"/>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant ml-1">Sept 28</label>
                  <div className="w-full h-16 bg-surface-container-low rounded-xl flex items-center justify-center text-xl font-black text-on-surface">42</div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant ml-1">Sept 21</label>
                  <div className="w-full h-16 bg-surface-container-low rounded-xl flex items-center justify-center text-xl font-black text-on-surface">36</div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant ml-1">Sept 15</label>
                  <div className="w-full h-16 bg-surface-container-low rounded-xl flex items-center justify-center text-xl font-black text-on-surface">38</div>
                </div>
                <div className="space-y-3 opacity-50">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant ml-1">Sept 02</label>
                  <div className="w-full h-16 bg-surface-container-low rounded-xl flex items-center justify-center text-xl font-black text-on-surface">37</div>
                </div>
              </div>
              <button className="w-full py-4 bg-surface text-on-surface font-bold rounded-xl border border-outline-variant/10 hover:border-primary transition-all">Submit Rolling Average Update</button>
            </div>
          </div>

          {/* Charity Settings Card */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-surface-container-low p-10 rounded-xl flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-xs font-black text-on-surface-variant uppercase tracking-widest mb-2">My Active Cause</p>
                  <h3 className="text-2xl font-black tracking-tight">Fairway Foundations</h3>
                </div>
                <a className="text-[#9c3f00] text-sm font-bold flex items-center gap-1 group" href="#">
                  Change Charity
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl mb-10 flex items-center gap-6">
                <img className="w-16 h-16 rounded-lg object-cover" alt="Charity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8L2VvTec41nvMvtoCLDNGdNgg95IMRmqCxoacDdDdnhMD9pc3p1OP_m5KgoIXpjRMDJZqr16IzwwmMOdAW1LqXZeFy8ckT_iV9VcyPlXBp27tBwDgqpJ73nevsBoI9_7i8ihcicPhZJL4y3kTsbZt0smJ9acaFvs5E8JcJb_ybwhjGRsQ9V6cAyE3zhJnBfCRzJzUuh7UJhY8-TZE_ZIoSqf40BfSi8ekZWWWiQssw747D9fdVuX9k0ly5zQzsDeRohbqQvmnwR0"/>
                <div>
                  <p className="text-sm font-bold mb-1">Building schools for youth athletes</p>
                  <p className="text-xs text-on-surface-variant">Selected since June 2024</p>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between mb-4">
                  <span className="text-sm font-bold">Contribution Level</span>
                  <span className="text-sm font-black text-primary">25%</span>
                </div>
                <input className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary" max="100" min="10" type="range" defaultValue="25"/>
                <p className="mt-4 text-[10px] text-on-surface-variant italic">25% of your winnings and monthly fees go directly to Fairway Foundations.</p>
              </div>
            </div>
          </div>

          {/* Winnings Overview */}
          <div className="col-span-12">
            <div className="bg-surface-container-lowest p-10 rounded-xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black tracking-tight">Past Draw Results</h3>
                <a className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors" href="#">View All History</a>
              </div>
              <div className="space-y-4">
                {/* Result Item */}
                <div className="flex items-center justify-between p-6 rounded-xl hover:bg-surface transition-colors cursor-pointer group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">trophy</span>
                    </div>
                    <div>
                      <p className="font-bold">Monthly Birdie Match</p>
                      <p className="text-xs text-on-surface-variant">August 30, 2024 • ID: #DRW-2408</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-16">
                    <div className="text-right">
                      <p className="text-sm font-bold">3 Number Match</p>
                      <p className="text-xs text-on-surface-variant">Points: 34</p>
                    </div>
                    <div className="w-32 text-right">
                      <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black tracking-widest uppercase">Paid</span>
                      <p className="text-sm font-black mt-1">$45.00</p>
                    </div>
                  </div>
                </div>

                {/* Result Item */}
                <div className="flex items-center justify-between p-6 rounded-xl hover:bg-surface transition-colors cursor-pointer group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">history</span>
                    </div>
                    <div>
                      <p className="font-bold">July Open Draw</p>
                      <p className="text-xs text-on-surface-variant">July 31, 2024 • ID: #DRW-2407</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-16">
                    <div className="text-right">
                      <p className="text-sm font-bold">No Match</p>
                      <p className="text-xs text-on-surface-variant">Points: 29</p>
                    </div>
                    <div className="w-32 text-right">
                      <span className="inline-block px-4 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-[10px] font-black tracking-widest uppercase">Completed</span>
                      <p className="text-sm font-black mt-1">$0.00</p>
                    </div>
                  </div>
                </div>

                {/* Result Item */}
                <div className="flex items-center justify-between p-6 rounded-xl hover:bg-surface transition-colors cursor-pointer group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">stars</span>
                    </div>
                    <div>
                      <p className="font-bold">Eagle Sweepstakes</p>
                      <p className="text-xs text-on-surface-variant">June 30, 2024 • ID: #DRW-2406</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-16">
                    <div className="text-right">
                      <p className="text-sm font-bold">4 Number Match</p>
                      <p className="text-xs text-on-surface-variant">Points: 41</p>
                    </div>
                    <div className="w-32 text-right">
                      <span className="inline-block px-4 py-1 bg-primary-container/20 text-primary rounded-full text-[10px] font-black tracking-widest uppercase">Pending</span>
                      <p className="text-sm font-black mt-1">$210.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
