export default function CharityDirectory() {
  return (
    <main className="pt-24 pb-20 max-w-7xl mx-auto px-8">
      {/* Hero / Title Section */}
      <section className="mb-12">
        <h1 className="text-6xl font-black tracking-tight text-on-surface mb-4 font-headline">Charity Directory</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
          Connect your passion for the game with a purpose that moves the world. Explore our vetted partners and choose where your kinetic impact goes.
        </p>
      </section>

      {/* Search & Filter Bar */}
      <section className="mb-12 flex flex-col md:flex-row gap-6 items-end md:items-center">
        <div className="flex-grow w-full relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input
            className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all font-body"
            placeholder="Search by name, cause or location..."
            type="text"
          />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          <button className="whitespace-nowrap px-6 py-3 bg-primary text-white rounded-full font-bold text-sm shadow-lg shadow-primary/20 font-label">All Impacts</button>
          <button className="whitespace-nowrap px-6 py-3 bg-surface-container-high text-on-surface rounded-full font-semibold text-sm hover:bg-surface-container-highest transition-colors font-label">Environment</button>
          <button className="whitespace-nowrap px-6 py-3 bg-surface-container-high text-on-surface rounded-full font-semibold text-sm hover:bg-surface-container-highest transition-colors font-label">Youth</button>
          <button className="whitespace-nowrap px-6 py-3 bg-surface-container-high text-on-surface rounded-full font-semibold text-sm hover:bg-surface-container-highest transition-colors font-label">Health</button>
        </div>
      </section>

      {/* Spotlight Bento Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="material-symbols-outlined text-tertiary-fixed" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
          <h2 className="text-3xl font-bold tracking-tight font-headline">Today's Spotlight</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Spotlight Card */}
          <div className="md:col-span-8 relative overflow-hidden rounded-xl h-[400px] group">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="expansive lush green forest canopy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEhmIbIdzoAPzc5EQQ3zoTf1uFvzkQ0F0qc_UBfMxmrjVVFgWThL08t8xUMIF1gWz5lXQq4Gyhn0aeK3IFFcLO58A2U_n-QbF96ywN2I1fG_nSGNZTC9dNBsgw5t1PX9fsYK0wmAjx2JqyUZDoLMxHWPmI1DH1j6Udr8O2tEcn4fSTHA3eK5g-nAbMOqY_yFcHlGnCjy7KBsKhKdZtQ8GVUE6IMJMwIK5d6L4VwK6ly8rrrk-KaexgkFBjzAkk9zxNSAFjnsF3kAA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full md:w-3/4">
              <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-bold mb-4 uppercase tracking-wider font-label">Environmental Protection</span>
              <h3 className="text-4xl font-bold text-white mb-4 font-headline">The Canopy Initiative</h3>
              <p className="text-white/80 font-body mb-6 line-clamp-2">Protecting ancient woodland habitats and restoring local biodiversity through community-led conservation efforts.</p>
              <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform font-label">Select to Support</button>
            </div>
          </div>
          {/* Secondary Spotlight Card */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">sports_golf</span>
                </div>
                <h4 className="text-xl font-bold mb-2 font-headline">Fairway Futures</h4>
                <p className="text-on-surface-variant text-sm font-body">Providing mentorship and scholarship opportunities for underprivileged youth through sport.</p>
              </div>
              <button className="mt-4 text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform font-label">
                View Mission <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex-1 flex flex-col justify-between border-l-4 border-tertiary">
              <div>
                <span className="text-tertiary font-bold text-xs uppercase tracking-widest font-label">Impact Milestone</span>
                <p className="text-2xl font-black text-on-surface mt-2 font-headline">$2.4M Raised</p>
                <p className="text-on-surface-variant text-sm font-body mt-1">Total contribution to global healthcare research by the TeeUp community this year.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight font-headline">Browse All Charities</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-outline-variant/30 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined">grid_view</span>
            </button>
            <button className="p-2 rounded-full border border-outline-variant/30 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-outline">list</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Charity Card 1 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="volunteer teaching young children"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbdj2LSqPO70iQTULCeilbcbiD1z-ZYtXUTTeCT4o9ZIHD33JH7ldvXSTSAqDf_oJdtwbbJMd69mWBIT7eBWt8GrFzAaDOaHOXW547jxmVt5ZQ1P1idPbfoAC_9M3Nc5GebPJFKdIvL6J28-TQoK4IElEpO5U9-EVp1qQS8b-mGcVeG7EbKz6_HKCaimiTQEKJQMPk_Wl7e1KBRH_PdwZEhTZn3y9arJ1PT8Bt_TPim2YY3XKjbu1aCv_ZnxFhaOCV0l2IfN0uv48"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                <span className="text-[10px] font-bold text-on-surface font-label">98% Impact</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">diversity_1</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter font-label">Youth & Education</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-headline">Scholars of the Green</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-2">Creating equitable access to higher education through performance-based athletic scholarships.</p>
              <button className="w-full bg-surface-container-highest text-on-surface py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all font-label">Select to Support</button>
            </div>
          </div>

          {/* Charity Card 2 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="professional medical researcher"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDZ4YH42ypny6O_DHVSi_XD0XIUoh6IHkIPw6Dzkk7LYuHCgVPXPw3bTr82uqrUOVeBIEYCA6waHB3L7XnDBCOs63uKZEXD1EHZPPQRWSmboZFh8GMa3X7o9UROXqdKYLc75_PBQ7KhboX9Je9EAB9BDqlMkrkI1QCWf4fqZcwTRc4tEPrHL4-EQG0X17n1MXkIwgXp7jjefjHHGXrPeCSWqIvFkgjpW7Ip0QEc5qH1eDYhiUrtCrZ-XwDrGmX8kFBgxzKCWHgDes"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                <span className="text-[10px] font-bold text-on-surface font-label">Vetted</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">health_and_safety</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter font-label">Global Health</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-headline">Vital Pulse Network</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-2">Distributing life-saving medical supplies to remote regions across the globe with zero waste.</p>
              <button className="w-full bg-surface-container-highest text-on-surface py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all font-label">Select to Support</button>
            </div>
          </div>

          {/* Charity Card 3 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="rolling green hills landscape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ_Hq9rSw5pA1QXLf4gR8YEnR-eQ2pPJ4klsU0SOVz1HMfcQpKAUrJLuxNn6nTHqqeg1eSWMyle6fcJ_iYrwNClFNyJMx4GOGsLGRR2M5de7bMtqiMICMngbVeijhbJuloD-GVgoJ8ZFhE9YVFcmoXhZhll1qZl5DOSL8kbqWmz-wBPtG-_onF9CftH6yeMmvjyLc5IyBae-8AkbgYoCjWDXcrLQqARpxx5dvKL0xMlpuBrbQzaT-Kz5Jhm0X51mwL6HF0QaApOI"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">eco</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter font-label">Environment</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-headline">Pure Planet Trust</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-2">Advocating for clean energy legislation and implementing local rewilding projects.</p>
              <button className="w-full bg-surface-container-highest text-on-surface py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all font-label">Select to Support</button>
            </div>
          </div>

          {/* Charity Card 4 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="diverse hands stacked together"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpZdSMu3XRqS8hOOiGX3Cje8ea7oLWXd7rlzYKQr-GqnEBZM5fF-Wuxn6OKpoZySZT-cHFwSZlJkgeaIdt8cgNtGCWMRwDjFrXKtE_GiCclcNMFHc8v5YyVb0ZmCJETMENPy1UwzNkFxJHXAtOCAqlp7YpiezXZO45QBHCxq7EGVKJNp9OHRgUKw7kQhEw-go56ukcDEj68rtfY3Hn2D28kbXrwawTD7ckRuGPTPRgtQ3AD7OqptQdLxLW5qDx-nWdKsi6Vbp7LvI"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">groups</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter font-label">Community</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-headline">Urban Bridge Hub</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-2">Building sustainable social infrastructure in neglected urban zones through collaborative art.</p>
              <button className="w-full bg-surface-container-highest text-on-surface py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all font-label">Select to Support</button>
            </div>
          </div>

          {/* Charity Card 5 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="clean ocean water"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-oI-98Wcoi08z6Nni-I95AoXFJOhiJV_KgE7WK8KcWyO5zcvcd_1k-j5g81SYC56qsHC_8zSowXxN7tOr6wycVwSUIYl0MrbrNKZwI7tvxlh5kTa-6S316gyK6Pkwb0zoN1fvoG180ptoLfEP4phkVtA3at6jKfzYx0w_EhSH5CzrFLnm02W2RKcLIVMj87uaJvyfSez8-n9ywOhL_wJLcGbVBd-fWeuymNoRBPOWAhFhKBEYdu_9xQmBk8-bk0Q4XEvfs9LAXoM"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">water_drop</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter font-label">Conservation</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-headline">Blue Horizon Fund</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-2">Removing plastic waste from coastal ecosystems and protecting endangered marine life.</p>
              <button className="w-full bg-surface-container-highest text-on-surface py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all font-label">Select to Support</button>
            </div>
          </div>

          {/* Charity Card 6 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="group of elders engaging in a joyful creative workshop"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_9NwWz5gIl657dnetyYZcNgOMdY2CeZFLtSXZxf8KzO6VBrRHOBsHhvP662WWt0Htxd1nFGmN6c-M-Q6FBSindnaPC8GjBhfB8cPPx3nUawcZHRt0bJ-aVRyWs6xmqB9ri-8ZUB_NUmHKdWN3Euddx4NedunYi4cmMcNtYCM3NFKg4Zwciws6cDSzI2hr-U2er_-a2ZkEZNweRhxSn5O_itAgsPlqTNeHzD8zIOJ5Zrf1atnSkcR59no5rJw1VCNljoDLwgNxsRE"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">elderly</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter font-label">Social Care</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-headline">Golden Years Collective</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 line-clamp-2">Combatting loneliness in aging populations through intergenerational community programs.</p>
              <button className="w-full bg-surface-container-highest text-on-surface py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all font-label">Select to Support</button>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center gap-4">
          <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors disabled:opacity-30" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full bg-primary text-white font-bold font-label">1</button>
            <button className="w-12 h-12 rounded-full hover:bg-surface-container transition-colors font-bold font-label">2</button>
            <button className="w-12 h-12 rounded-full hover:bg-surface-container transition-colors font-bold font-label">3</button>
            <span className="flex items-center px-2 font-label">...</span>
            <button className="w-12 h-12 rounded-full hover:bg-surface-container transition-colors font-bold font-label">12</button>
          </div>
          <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </main>
  );
}
