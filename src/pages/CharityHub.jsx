export default function CharityHub() {
  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-[#f5f6f7] dark:bg-[#2c2f30] flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-black tracking-tighter text-[#2c2f30] dark:text-[#f5f6f7]">TeeUp Charity</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
            <input className="bg-surface-container-highest/50 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 w-64" placeholder="Search charities..." type="text"/>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:opacity-80 transition-opacity text-[#2c2f30] dark:text-[#f5f6f7]">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 hover:opacity-80 transition-opacity text-[#2c2f30] dark:text-[#f5f6f7]">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden ml-2 bg-surface-container-highest">
              <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIvfg9OJY7111Tq4gJYRJEru-7kpyygjsTpJEwi9W0JR0mmbp7VSd1_ooIlNz5dkCMa6ohRQb7jOzh__WvCA9rig3N3OYaony8bUnbgBbIxAfYb0D3wnJYulQ-9Gn8Mqo0D3b4guDDDteoIi42v6tq_sv-dLUtee69WA50alB00opHEt434XmTTl0rN65YQxvbBXZYuolHurjcq8H5eE82fhzCtm0C-eb48YxN_npMxjo2_KhKsktR1X3s4mWLAKyRwixJnsuG8eY"/>
            </div>
          </div>
        </div>
      </header>

      <div className="px-12 py-10 max-w-7xl mx-auto">
        {/* Hero Impact Section */}
        <section className="mb-16 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <span className="text-primary-fixed-dim font-bold tracking-widest text-xs uppercase mb-4 block">Our Shared Legacy</span>
            <h2 className="text-6xl font-black tracking-tighter leading-none mb-6">Changing the <br/><span className="text-primary">world,</span> one drive at a time.</h2>
            <p className="text-lg text-on-surface-variant max-w-lg">Your subscription doesn't just fund the game; it fuels movements. Select a partner below to direct your Kinetic Philanthropy.</p>
          </div>
          <div className="col-span-12 md:col-span-5 bg-surface-container-low p-8 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm font-bold text-on-surface-variant mb-1">Total Community Impact</p>
              <h3 className="text-4xl font-black text-primary">$1,284,950</h3>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-on-tertiary-container bg-tertiary-container px-3 py-1 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +12.5% this month
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Active Charity & Contribution Control */}
        <section className="mb-16 bg-surface-container-lowest p-8 rounded-[2rem] shadow-2xl shadow-on-surface/5 border-outline-variant/10 border-t border-l">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-surface-container rounded-2xl overflow-hidden flex-shrink-0">
                <img alt="Active Charity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn9paNpsApbKvX7qFzb6VuzSj92wZqHh3dVxj1XE8oKD7O3KweAWac-rugO0zVTyGF2VWvMdolNkyJsrndPRXwf-slaZOlJI-E1Hhe2CgeaJFxI5nnqxx24XOCpM_5chVosr4y5HG0eGZ5glQVjaCHkAYTjrmAct9lOC0HALkHrAgTWhpcz3aH1cvWf9eidh8PLUyg4xpI3orpKEpX9lF1dvEhfIkbPRYrQqumdBnD8VC3UgwaRH-wyVoM5iWOI1kYwZ9D_fNDm1w"/>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Currently Supporting</p>
                <h4 className="text-2xl font-black">Green Fairways Initiative</h4>
                <p className="text-sm text-on-surface-variant">Reforesting urban landscapes through sport.</p>
              </div>
            </div>
            <div className="flex-1 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold">Contribution Level</label>
                <span className="text-2xl font-black text-primary">25%</span>
              </div>
              <div className="relative h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary-fixed w-[25%] rounded-full"></div>
                <input className="absolute inset-0 opacity-0 cursor-pointer" max="100" min="10" type="range" defaultValue="25"/>
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-bold text-outline uppercase tracking-wider">
                <span>10% (Min)</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
            <button className="bg-on-surface text-surface px-8 py-4 rounded-full font-bold text-sm hover:scale-95 transition-transform duration-200">
              Update Plan
            </button>
          </div>
        </section>

        {/* Charity Directory Grid (Bento Style) */}
        <div className="mb-10 flex items-center justify-between">
          <h3 className="text-3xl font-black tracking-tight">Charity Directory</h3>
          <div className="flex gap-2">
            <span className="bg-surface-container-highest px-4 py-2 rounded-full text-xs font-bold cursor-pointer">All</span>
            <span className="hover:bg-surface-container-highest px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-colors">Education</span>
            <span className="hover:bg-surface-container-highest px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-colors">Nature</span>
            <span className="hover:bg-surface-container-highest px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-colors">Health</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Charity Card 1 */}
          <article className="group bg-surface-container-low rounded-[1.5rem] overflow-hidden flex flex-col hover:bg-surface-container transition-colors duration-300">
            <div className="h-56 overflow-hidden">
              <img alt="Global Kids" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFP61o2-Nwf_8Jzcg54oJ_zVBL_9HnWT0SPQku606KJL27h0hNVvC6ofnCYkh7clCVTVIQ0ndm3y41ljLHWwt6BZfQ7TjGkYacbEbiFrZqXi7fGlJIzrLtOUK0-oA4JKYFH3gWDXp8m5g4YNl5LukYmqdo-lPxuADyBEWgvoGOfAwdIsUvGpLKkQVCjN7MCoXFXAhZ6XXF4lrrUPSeF0u2IwTDxiE-XYCod590wT22dLAXGwnqhW8po-BQs5LjAj1wLsE7fOrt3tU"/>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Education</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">verified</span>
              </div>
              <h5 className="text-xl font-bold mb-3">Global Fairways Kids</h5>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Providing high-end education and athletic equipment to underprivileged communities worldwide.</p>
              <div className="mt-auto">
                <button className="w-full py-4 rounded-xl border border-outline-variant/30 text-on-surface font-bold text-sm group-hover:bg-primary group-hover:text-on-primary group-hover:border-transparent transition-all">
                  Select Charity
                </button>
              </div>
            </div>
          </article>

          {/* Charity Card 2 */}
          <article className="group bg-surface-container-low rounded-[1.5rem] overflow-hidden flex flex-col hover:bg-surface-container transition-colors duration-300">
            <div className="h-56 overflow-hidden">
              <img alt="Ocean Clean" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_jo3khOAJIUp2b7jMpjStZNYoGNRnrQFjUBS3UBQWae0sRGKQReDMr1cIBUZF4XN70qnRgUNUiHx025ha6DoUI04idMK27xZ7xIItlY9-g3nIB2q-DHGpTcEWweeojaOHpMH3OhOdnRVg9HlKN40foUtKpZczQo708fUnV1O9pxyV_NDjSx3NnbTxWZ8vdh-IBG8DSRtdvUtCsA8lOckmhN0GvynyjqixdOHfEON9H6jG7JPEpalmCrX4sIkoJHLi9EbNYOPzEcI"/>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Ocean Health</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">verified</span>
              </div>
              <h5 className="text-xl font-bold mb-3">The Blue Tee Project</h5>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Removing plastic from the world's oceans through innovative filtration systems and beach cleanups.</p>
              <div className="mt-auto">
                <button className="w-full py-4 rounded-xl border border-outline-variant/30 text-on-surface font-bold text-sm group-hover:bg-primary group-hover:text-on-primary group-hover:border-transparent transition-all">
                  Select Charity
                </button>
              </div>
            </div>
          </article>

          {/* Charity Card 3 */}
          <article className="group bg-surface-container-low rounded-[1.5rem] overflow-hidden flex flex-col hover:bg-surface-container transition-colors duration-300">
            <div className="h-56 overflow-hidden">
              <img alt="Medical Outreach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjRa0GMpiEHOAGCzG3ewZnTVoOeVRw-vzKMUf13wzlCxHsJ5RiirSp65UmXWqweAiq8YhUrUTo6loMKrPJy7wXn14Ij8JEsMtVbrul6EX06huGuk7YXf_QbLbTPxFtKoWN6SE4_X1X4bmv17-du_XD3BcXxfQf_KgQH2QL5yydVOULYo-RBCZ6n-OUlcMn0QhrkAWbU8jBU_eH5KMoe7JFal2UbjiBxbl8AX3BTQQz4CS7RXjJ9Zccb82m7-XK-LrQR7mPc8lVjaw"/>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Health</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">verified</span>
              </div>
              <h5 className="text-xl font-bold mb-3">Athletes for Research</h5>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Funding groundbreaking medical research for performance-related injuries and recovery.</p>
              <div className="mt-auto">
                <button className="w-full py-4 rounded-xl border border-outline-variant/30 text-on-surface font-bold text-sm group-hover:bg-primary group-hover:text-on-primary group-hover:border-transparent transition-all">
                  Select Charity
                </button>
              </div>
            </div>
          </article>

          {/* Charity Card 4 */}
          <article className="md:col-span-2 group bg-surface-container-low rounded-[1.5rem] overflow-hidden flex flex-col md:flex-row hover:bg-surface-container transition-colors duration-300">
            <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
              <img alt="Forestry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhMH50hCShFybrheghFKmJtX-yHe9EMQc5eFzf3m14nLRqaCTgxZtEcMEbu_wHM2eeMsuzqD5xykFQvdbQ0thkHy2d85ijnzprVifoGLsBDbtCOCRPgyvZSbeoOFhm8BAQu93wnQtZPUTO5s90TFBebGG7zJ8hlXwn0gipMaeygtGQCx6rgjOWZ-yW0dyhw4PTZ3yAI-_uhz9KtZSCvfPY528GUzjoUJGhslGy2nHvDDcujFTCH_Na0O62M-Cj_GxPQSS8vkehBy4"/>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Conservation</span>
              </div>
              <h5 className="text-2xl font-bold mb-3">One Tree, One Round</h5>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">For every round of golf tracked on TeeUp, we plant a tree in endangered habitats. Join our mission to reforest the planet through play.</p>
              <div className="mt-auto">
                <button className="w-full py-4 rounded-xl border border-outline-variant/30 text-on-surface font-bold text-sm group-hover:bg-primary group-hover:text-on-primary group-hover:border-transparent transition-all">
                  Select Charity
                </button>
              </div>
            </div>
          </article>

          {/* Featured Impact Stat */}
          <article className="bg-primary text-on-primary rounded-[1.5rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <span className="material-symbols-outlined text-5xl mb-4 opacity-50">auto_awesome</span>
            <h5 className="text-lg font-bold mb-2">New Milestone</h5>
            <p className="text-3xl font-black">12k Trees</p>
            <p className="text-xs opacity-70 mt-2 uppercase tracking-widest font-bold">Planted this year</p>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </article>
        </div>
      </div>
    </>
  );
}
