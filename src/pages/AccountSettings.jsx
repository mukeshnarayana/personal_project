export default function AccountSettings() {
  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-[#f5f6f7] dark:bg-[#2c2f30] flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-black tracking-tighter text-[#2c2f30] dark:text-[#f5f6f7]">Account Settings</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="material-symbols-outlined text-[#2c2f30] opacity-70 cursor-pointer hover:opacity-100">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
          </div>
          <span className="material-symbols-outlined text-[#2c2f30] opacity-70 cursor-pointer hover:opacity-100">help_outline</span>
          <div className="flex items-center gap-3 bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/10">
            <img alt="User profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIq_S67lDUCZnGYi2BavSYPdmcDx56K7avFbqnnB6BZlBmWUHOTB_iSIHyfY9tVvRNZhEXY3PI_Q-L7llN8YtJ3cK-Bkx3W9Mcx3D3-A472IltgZQxqHMz_bBKe-SAXiid7Stbgi14qBoi287BF1Ymcu51dd4TUs5PeRQg6j7rMTEYujD-d7Y_oFkD2OF-okUKaUUP3wWn8gaz4Eji1vpNV-CkfGwyoDMeMFmiI3ErQEv350eg58hYe0zKGm-sGsXfctD_nIESQTE"/>
            <span className="text-sm font-bold text-on-surface">Marcus K.</span>
          </div>
        </div>
      </header>

      <div className="px-12 py-10 max-w-6xl mx-auto space-y-12 pb-32">
        {/* Section: Personal Details */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-3xl font-black tracking-tight text-on-surface">Personal Identity</h3>
              <p className="text-on-surface-variant font-medium mt-1">Manage how you appear across the platform.</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* Name & Email Card */}
            <div className="col-span-8 bg-surface-container-lowest p-8 rounded-[1.5rem] shadow-sm flex flex-col justify-between border border-outline-variant/5">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 font-semibold focus:ring-2 focus:ring-primary/20 transition-all" type="text" defaultValue="Marcus Kensington"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 font-semibold focus:ring-2 focus:ring-primary/20 transition-all" type="email" defaultValue="marcus.k@kineticphilanthropy.com"/>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10 flex justify-end">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">Update Profile</button>
              </div>
            </div>

            {/* Handicap Card */}
            <div className="col-span-4 bg-gradient-to-br from-on-surface to-black p-8 rounded-[1.5rem] text-white flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Verified Handicap</label>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-6xl font-black italic">8.4</span>
                  <span className="text-primary-fixed text-lg font-bold">HCPI</span>
                </div>
              </div>
              <div className="relative z-10 mt-8">
                <button className="w-full bg-surface/10 backdrop-blur-md border border-surface/20 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-surface/20 transition-all">Sync GHIN</button>
              </div>
              <span className="material-symbols-outlined absolute -right-10 -bottom-10 text-[200px] opacity-10 pointer-events-none">sports_golf</span>
            </div>
          </div>
        </section>

        {/* Section: Subscription & Payment */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-3xl font-black tracking-tight text-on-surface">Membership &amp; Billing</h3>
              <p className="text-on-surface-variant font-medium mt-1">Tier: Pro Philanthropist (Annual)</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* Subscription Tier */}
            <div className="col-span-5 bg-tertiary-container p-8 rounded-[1.5rem] border border-outline-variant/5">
              <div className="flex justify-between items-start">
                <div className="bg-on-tertiary-container/10 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-on-tertiary-container" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                </div>
                <span className="bg-white/40 px-3 py-1 rounded-full text-[10px] font-black uppercase">Active</span>
              </div>
              <div className="mt-6">
                <h4 className="text-2xl font-black text-on-tertiary-container">Pro Philanthropist</h4>
                <p className="text-on-tertiary-container/70 font-bold text-sm mt-1">$299 / Year billed annually</p>
              </div>
              <div className="mt-8 flex gap-3">
                <button className="flex-1 bg-on-tertiary-container text-white py-3 rounded-xl font-bold text-xs">Manage Plan</button>
                <button className="px-4 bg-white/20 rounded-xl"><span className="material-symbols-outlined text-on-tertiary-container">info</span></button>
              </div>
            </div>

            {/* Payment Method */}
            <div className="col-span-7 bg-surface-container-low p-8 rounded-[1.5rem] flex flex-col justify-between border border-outline-variant/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-10 bg-on-surface rounded-md flex items-center justify-center">
                    <span className="text-white font-black italic text-xs tracking-tighter">VISA</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Visa ending in •••• 8842</p>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">Expires 08/26</p>
                  </div>
                </div>
                <button className="text-primary font-bold text-sm hover:underline">Update</button>
              </div>
              <div className="mt-8 bg-surface-container-highest/50 p-4 rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">history</span>
                <span className="text-xs font-bold text-on-surface-variant">Last payment of $299.00 processed on Sept 12, 2023</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Notification & Preferences */}
        <section className="space-y-6">
          <div>
            <h3 className="text-3xl font-black tracking-tight text-on-surface">Communication</h3>
            <p className="text-on-surface-variant font-medium mt-1">Control how we keep you kinetic.</p>
          </div>
          <div className="bg-surface-container-low rounded-[1.5rem] overflow-hidden border border-outline-variant/5">
            <div className="divide-y divide-outline-variant/10">
              {/* Item 1 */}
              <div className="p-6 flex items-center justify-between hover:bg-white/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-primary">notifications_active</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Daily Impact Digest</p>
                    <p className="text-xs text-on-surface-variant font-medium">A summary of your charity contributions and score updates.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox"/>
                  <div className="w-12 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Item 2 */}
              <div className="p-6 flex items-center justify-between hover:bg-white/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-secondary">emoji_events</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Tournament Alerts</p>
                    <p className="text-xs text-on-surface-variant font-medium">Get notified when new charity tournaments are announced.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox"/>
                  <div className="w-12 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Item 3 */}
              <div className="p-6 flex items-center justify-between hover:bg-white/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-tertiary/10 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-tertiary">alternate_email</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Marketing &amp; Partnerships</p>
                    <p className="text-xs text-on-surface-variant font-medium">Occasional offers from our luxury golf equipment partners.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox"/>
                  <div className="w-12 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="pt-10 border-t border-outline-variant/10">
          <div className="bg-error-container/10 p-8 rounded-[1.5rem] flex items-center justify-between">
            <div>
              <h4 className="text-xl font-black text-error">Deactivate Account</h4>
              <p className="text-sm font-medium text-on-surface-variant">Temporarily disable your profile or permanently delete your kinetic history.</p>
            </div>
            <button className="bg-error/10 border border-error/20 text-error px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-error hover:text-white transition-all">Proceed to Deactivation</button>
          </div>
        </section>
      </div>
    </>
  );
}
