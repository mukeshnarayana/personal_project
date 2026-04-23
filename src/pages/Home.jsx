export default function Home() {
  return (
    <main className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center px-8 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full mb-6 uppercase tracking-widest font-label">
              The Future of Fairway Giving
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-on-surface font-headline">
              Play Golf,<br />
              <span className="text-primary italic">Win Big,</span><br />
              Give Back.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-10 font-body leading-relaxed">
              Join the kinetic golf community where your monthly subscription funds meaningful impact and gives you access to high-stakes prize draws.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-full text-lg font-extrabold shadow-2xl transition-transform hover:-translate-y-1 active:translate-y-0 font-headline">
                Start My Subscription
              </button>
              <button className="flex items-center justify-center gap-3 bg-surface-container-highest text-on-surface px-10 py-5 rounded-full text-lg font-bold hover:bg-surface-container-high transition-colors font-headline">
                <span className="material-symbols-outlined">play_circle</span>
                How It Works
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden editorial-shadow -rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                alt="Professional golfer in dynamic mid-swing"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGnM9hWX6HhMtWG5uktiLSlTpHqfMfOpu9dDre9vvp5J4D__sJSHb8m_JQycSWXtlAaQUZq4kuSCD-InzLA67wmRxnLOM0_daqvZnGz8W3G9cZHBdKimyAyRu1E-vL1CkEcbe_qZGenlLluN52B0kZ5HRbNzj_LRQI2Q5UEPdl_dSluQQp9misY4JH-vOWBpJdjWO_i67JfWR7TZPGEqg11uwqIKH8BcGVm4aGcBXJGodxc9I9njxkIEU-ykots0jk5Azh4-_R2I0"
              />
            </div>
            {/* Decorative Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 rounded-3xl editorial-shadow max-w-[200px] hidden md:block">
              <div className="text-primary font-black text-4xl mb-1 tracking-tighter font-headline">$12.4M</div>
              <div className="text-on-surface-variant text-sm font-bold leading-tight font-body">Total Impact Generated Since Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Draw Section (Sticky-style Impact Card) */}
      <section className="bg-on-surface py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary font-black uppercase tracking-tighter mb-4 font-headline">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>notifications_active</span>
                Live Prize Pool
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter font-headline">
                $25,000.00
              </h2>
              <p className="text-on-surface-variant text-xl mt-4 max-w-md font-body">
                The next draw is approaching. Entry is included with all active monthly subscriptions.
              </p>
            </div>
            <div className="relative z-10 bg-surface-container-low p-8 rounded-[2rem] min-w-[300px] border border-outline-variant/10">
              <div className="text-center">
                <p className="text-xs font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6 font-label">Draw Commencing In</p>
                <div className="flex gap-6 justify-center">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-on-surface font-headline">14</span>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase font-label">Days</span>
                  </div>
                  <div className="text-4xl font-black text-primary-container font-headline">:</div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-on-surface font-headline">08</span>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase font-label">Hrs</span>
                  </div>
                  <div className="text-4xl font-black text-primary-container font-headline">:</div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-on-surface font-headline">42</span>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase font-label">Min</span>
                  </div>
                </div>
                <button className="w-full mt-8 bg-on-surface text-surface py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary transition-colors font-label">
                  Secure Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section (Bento Grid) */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl font-black text-on-surface tracking-tighter mb-6 font-headline">How The Magic Happens.</h2>
          <p className="text-on-surface-variant text-xl max-w-2xl font-body">Simple steps to change your game and the world.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col items-start group hover:bg-surface-container-lowest transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">subscriptions</span>
            </div>
            <div className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4 font-label">Step One</div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight font-headline">Subscribe</h3>
            <p className="text-on-surface-variant leading-relaxed font-body">Choose a flexible monthly or yearly plan. Every dollar contributed directly supports our featured charities.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col items-start group hover:bg-surface-container-lowest transition-all duration-300">
            <div className="w-16 h-16 bg-tertiary-container/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-tertiary text-3xl">golf_course</span>
            </div>
            <div className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4 font-label">Step Two</div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight font-headline">Enter Scores</h3>
            <p className="text-on-surface-variant leading-relaxed font-body">Submit your last 5 Stableford scores. We use these to normalize the playing field and verify your active participation.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col items-start group hover:bg-surface-container-lowest transition-all duration-300">
            <div className="w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary-container text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
            </div>
            <div className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4 font-label">Step Three</div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight font-headline">Support Charity</h3>
            <p className="text-on-surface-variant leading-relaxed font-body">Select your preferred cause. Your membership empowers global foundations with every swing.</p>
          </div>
        </div>
      </section>

      {/* Charity Spotlight (Overlapping Editorial Layout) */}
      <section className="py-32 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden editorial-shadow">
                  <img
                    alt="Children smiling at a community center"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5YcncAs-mm0bdfO6_57_e20_yiqIUy3Mwq66LBQoDq26kBjp0R7-USOxMlkiJl-O72tX2qZR2iM51btYpdJLrdUmAElrCdiPQxOjtWS8b0-2o3qJIN0l_pJ-LVDUkyVovb9WZsDkGS-iLETwdj3ib3kTiC8e4HxzduPT-Ca3O-19AQvyAPqG9z-eT0iOjYZ43wr0mhdiPqqYDn4UUXmyFhiL2fD8aGUtAZsqrqYyKUqzlH1N2pE3wb42veZ57PldjvPolwI2KNM0"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl text-on-primary editorial-shadow max-w-xs">
                  <p className="text-lg font-bold leading-tight font-headline">Featured: The Youth Open Initiative</p>
                  <p className="text-sm opacity-80 mt-2 font-body">Providing golf equipment and education to underserved communities nationwide.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight font-headline">
                Your Game, Their <span className="text-primary">Greatness.</span>
              </h2>
              <p className="text-xl text-on-surface-variant mb-12 leading-relaxed font-body">
                We partner with high-impact charities across environmental, educational, and medical sectors. You choose where your kinetic impact goes.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-surface-container-lowest rounded-2xl transition-transform hover:translate-x-2">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">eco</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-headline">Green Fairways Trust</h4>
                    <p className="text-sm text-on-surface-variant font-body">Reforestation and biodiversity protection.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-surface-container-lowest rounded-2xl transition-transform hover:translate-x-2">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">medical_services</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-headline">Eagle Research Fund</h4>
                    <p className="text-sm text-on-surface-variant font-body">Advancing innovative sports medicine.</p>
                  </div>
                </div>
              </div>
              <button className="mt-12 text-primary font-black uppercase tracking-widest flex items-center gap-3 group font-label">
                Explore All Partners
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
