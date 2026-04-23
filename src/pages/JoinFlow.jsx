import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 'monthly-pro',
    name: 'Monthly Pro',
    price: '$29',
    period: '/mo',
    features: [
      'Unlimited score tracking',
      'Monthly giveaway entries',
      'Access to local impact leaderboards',
      'Basic charity impact reporting',
    ],
  },
  {
    id: 'annual-legend',
    name: 'Annual Legend',
    price: '$279',
    period: '/yr',
    features: [
      'Everything in Monthly Pro',
      'Double giveaway entries',
      'Exclusive \'Legend\' gear pack',
      'Early access to charity tournaments',
      'Verified philanthropist badge',
    ],
  },
];

const causes = [
  {
    id: 'green-canopy',
    name: 'Green Canopy',
    category: 'Environmental',
    icon: 'eco',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIbfFllpnix0b-v4WKvQVeFOwBWxkr8vNpvnKF2laAG5HujCwugf_dQ_akLhuyowk0xfpbljHRH2cRScXTQ1Q-I0YFhqia2ZENW1jhqnT0HkP4h2MNaQN9Sv3reAoH0C7SJCKuKFWyKBJ3gHMgFxcCHw-JZmCT48IqhmFrl-tvSvpzHBvLMFA4GDwWoglZQooMS-ekEeK5XRglmiSG1-3EcSlhWsaeQuCX5dnMekfG1oZAxx-AJcCv54cn-bVvkhiq4fQQ4qD-tFA',
    desc: 'Restoring global ecosystems through aggressive reforestation and local community protection programs.',
    impactLabel: '150k Trees Planted',
    impactSub: 'Planting 50 Trees monthly',
    colorText: 'text-primary',
  },
  {
    id: 'future-minds',
    name: 'Future Minds',
    category: 'Education',
    icon: 'school',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfEUOh32TYv5OV7dxK3uBUdgEuHUxj4fIzRxvde1zXQyWNqZIFZi61aEsv9PwP77CiRmlOJbLUsyG2pOHAB1FhH7ysSUjqeQeC3NPbwEkDq1SqZ4XYPsCqRdHRWNKQ9BeGIcnmSPeRLk483a0oImB-oytjfBdRKYaIJJNV44nE8LxT480z0NzJgh9sYb0wVeHLOH4MCLv9nHmicmpkxraeNdgwvG2MsEi4nAPuv-pwYfptZCiKl_MJ8n6nLIioq442zjl6NHDTL1I',
    desc: 'Bridging the digital divide for students in underprivileged communities through tech and mentorship.',
    impactLabel: '12k Laptops Gifted',
    impactSub: 'Funding 1 Laptop monthly',
    colorText: 'text-tertiary',
  },
  {
    id: 'pulse-project',
    name: 'Pulse Project',
    category: 'Healthcare',
    icon: 'health_and_safety',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCU0xJby_PAk_W3mIyzRbUxamUzekQqpaUo3qL85CQL9CJk8ins3fHPMfGH-R2MN0Nim5p-lgwIpAHQUdLuQYG7wVzXekH68qvUhmuxm4Ty_EvgHtQie1FcOhZp8X_x6S1uOU_0xNJOwnK07jSyH6x1hKSSrHLbdy8Z70g3mrtWus1yOF6PYMbsYRSOwcj81NpUmWO8NbeyzF9JCyMU1n4l81iiRDObTpazmVoKH4WJqSVaZcPRU-TTrhmwtCYf0Lm5EPpTQSEt10',
    desc: 'Providing essential medical supplies and clean water initiatives to remote regions globally.',
    impactLabel: '50m Gallons Cleaned',
    impactSub: 'Providing 10k Gallons monthly',
    colorText: 'text-error',
  },
];

export default function JoinFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedCause, setSelectedCause] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  };

  const renderStep1 = () => (
    <div className="bg-surface text-on-surface selection:bg-primary-container/30 min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl flex justify-between items-center px-6 py-4 max-w-7xl mx-auto left-0 right-0">
        <div className="text-2xl font-black italic tracking-tighter text-zinc-900 cursor-pointer" onClick={() => navigate('/')}>
          The Kinetic Philanthropist
        </div>
        <div className="flex gap-6 items-center">
          <span className="text-zinc-600 font-medium font-['Epilogue'] tracking-tight cursor-pointer" onClick={() => navigate('/')}>Sign In</span>
        </div>
      </nav>
      <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase">Step 1 of 3</span>
              <h2 className="text-on-surface text-lg font-bold">Plan Selection</h2>
            </div>
            <span className="text-on-surface-variant text-sm font-medium">33% Complete</span>
          </div>
          <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-gradient-to-r from-primary to-primary-container rounded-full"></div>
          </div>
        </div>

        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter leading-tight mb-6">
            Choose Your <span className="text-primary italic">Impact</span> Level
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Select a membership plan that fits your game and fuels your favorite causes. Every swing counts toward a better world.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Monthly Pro Card */}
          <div className="relative group bg-surface-container-low p-10 rounded-xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-on-surface mb-2">Monthly Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-on-surface tracking-tighter">$29</span>
                <span className="text-on-surface-variant font-medium">/mo</span>
              </div>
            </div>
            <div className="space-y-4 mb-12 flex-grow">
              {plans[0].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <p className="text-on-surface font-medium">{feature}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => handlePlanSelect(plans[0])}
              className="w-full py-4 bg-surface-container-highest text-on-surface font-bold rounded-lg transition-colors hover:bg-surface-dim">
              Select Monthly Pro
            </button>
          </div>

          {/* Annual Legend Card */}
          <div className="relative group bg-surface-container-lowest p-10 rounded-xl transition-all duration-300 hover:scale-[1.02] flex flex-col overflow-hidden ring-4 ring-primary shadow-[0_32px_48px_-12px_rgba(44,47,48,0.06)]">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary-container px-6 py-2 rounded-bl-xl">
              <span className="text-on-primary text-xs font-bold uppercase tracking-widest">Best Value</span>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-on-surface">Annual Legend</h3>
                <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-on-surface tracking-tighter">$279</span>
                <span className="text-on-surface-variant font-medium">/yr</span>
              </div>
              <p className="text-primary font-bold text-sm mt-1">Save over $65 per year</p>
            </div>
            <div className="space-y-4 mb-12 flex-grow">
              {plans[1].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary-fixed-dim" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  <p className="text-on-surface font-medium">{idx === 0 ? <strong className="font-bold">{feature}</strong> : feature}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => handlePlanSelect(plans[1])}
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-xl shadow-primary/20 transition-all hover:brightness-110">
              Get Lifetime Access
            </button>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-12 p-12 bg-tertiary-container rounded-xl">
          <div className="flex-1">
            <h4 className="text-3xl font-black text-on-tertiary-container tracking-tighter mb-4 leading-none">Your impact is tangible.</h4>
            <p className="text-on-tertiary-container/80 font-medium">Every registration funds clean water initiatives and youth golf programs globally. Join the movement of golfers who play for more than just a lower handicap.</p>
          </div>
          <div className="flex -space-x-4">
            <img className="w-16 h-16 rounded-full border-4 border-tertiary-container object-cover" alt="golfer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDovJpCj21Nrh4vXstdlud8FUWdRLEsrkVlMO1Hybr5ZKfjmonH0G6PDYz6ABjkf4L7VHQ8JueHTezzJ8lyJj2k0mL8s0Lw_jjSXbyCp3Ol7Pnh7mAKy5X97OsIGwkI03k57lM9QUX3LFr5q611ewzP51ECYJXdWg8UzCr5vzbh0ivrOn4oEY_pOJm0ON6oBmRQuFK8NgtH-vLgv-NAjV9viiUYTKJdkQUbYU3jrTvlDL6szTgDZnxCskJFaxdcdTfzHvAjRPZJVyc" />
            <img className="w-16 h-16 rounded-full border-4 border-tertiary-container object-cover" alt="golfer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNrgTlAw9RA3yNPTYwrOS0FLhCNvQuCQAPSP4nswTQCZO8zhCqBMtKlPJw8WUezYSaijbXJTJUUbyVkCMI9MVMRGeFbsZNA2d8Sf9Xq_VEZVHIlVedZMwt4q2hkbNL908gPxsjdgltVaXATFxRj00YaBypZ3QLgzQ5ZEDjj4G61EdeXKpjZwICMCiE6pBKrCK-BSmFGQJCBbP_gVIR4qEMFAthv9M846XZFgyn5oiT2g2BajiWXgELpZNzk3naamlSCsrmGUdpRvA" />
            <img className="w-16 h-16 rounded-full border-4 border-tertiary-container object-cover" alt="golfer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkmuuvGn5wV-f5m1VSJrmhNZyl0T6QiI5APbSSYmU1JkmRk6thFNIf9sd-3pgGqOgryhlcTaan0n0oYmH16HXdkXf4Nvp8-MRdXOhR8hxatOKCkMQerlzhfrJsrd-kCd1Rqt9gVU6J8PF3NY5bKbd6U4p440tmVAgRwmi8-jRM88Y64jaldCpeNcLm5_a3DPiBhw_X5Wz74p-hzCqrRwZhBBxc4kgfVndRHre6gPtuuPmQDW-EyB8e_P7Hh9lyJVL-0pDIEaFMWoE" />
            <div className="w-16 h-16 rounded-full bg-on-tertiary-container flex items-center justify-center border-4 border-tertiary-container">
              <span className="text-tertiary-fixed text-xs font-bold">+12k</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-12 bg-zinc-100 dark:bg-zinc-900">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4 max-w-7xl mx-auto">
          <p className="font-['Manrope'] text-sm text-zinc-500 dark:text-zinc-400">© 2024 The Kinetic Philanthropist. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="font-['Manrope'] text-sm text-zinc-500 hover:text-zinc-900 transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-sm text-zinc-500 hover:text-zinc-900 transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-sm text-zinc-500 hover:text-zinc-900 transition-colors opacity-80 hover:opacity-100" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );

  const renderStep2 = () => (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col items-center">
      <main className="w-full flex flex-col">
        <header className="glass-header sticky top-0 z-30 w-full border-b border-outline-variant/10 bg-white/70 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center w-full font-['Epilogue'] tracking-tighter">
            <span className="text-2xl font-black italic text-[#9c3f00] cursor-pointer" onClick={() => navigate('/')}>Aura Link</span>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 mr-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                <span className="text-primary">Step 2</span>
                <span className="opacity-30">/</span>
                <span>3</span>
              </div>
              <button className="material-symbols-outlined text-on-surface hover:opacity-80 transition-opacity">help_outline</button>
            </div>
          </div>
        </header>

        <section className="p-6 md:p-12 max-w-6xl mx-auto w-full">
          <header className="mb-12">
            <h1 className="font-headline text-5xl font-black tracking-tight text-on-surface mb-4">
              Choose your <span className="text-primary italic">impact.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Every round you play contributes to a cause. Select the charity that resonates with your vision of change.
            </p>
          </header>

          <div className="mb-10 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full pl-12 pr-6 py-4 bg-surface-container-highest border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface transition-all" placeholder="Search by name or mission..." type="text" />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <span className="bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap">Environmental</span>
              <span className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap">Education</span>
              <span className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap">Healthcare</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.map((cause) => (
              <div
                key={cause.id}
                onClick={() => setSelectedCause(cause)}
                className={`group relative flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border cursor-pointer ${selectedCause?.id === cause.id ? 'border-primary shadow-xl' : 'border-transparent hover:border-primary/10'}`}>
                <div className="h-48 overflow-hidden relative">
                  <img alt={cause.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={cause.image} />
                  <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full ${cause.colorText}`}>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>{cause.icon}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-headline text-xl font-bold text-on-surface">{cause.name}</h3>
                    <span className={`material-symbols-outlined text-primary-fixed-dim transition-opacity ${selectedCause?.id === cause.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>check_circle</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-6 leading-snug">{cause.desc}</p>
                  <div className="mt-auto pt-4 flex items-center gap-4 border-t border-outline-variant/10">
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Key Impact</p>
                      <p className="text-lg font-black text-primary">{cause.impactLabel}</p>
                    </div>
                    <button className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">{selectedCause?.id === cause.id ? 'check' : 'add'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 flex flex-col md:flex-row items-center justify-between p-8 bg-on-surface rounded-[2rem] text-surface overflow-hidden relative transition-all duration-500 ${selectedCause ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
            <div className="relative z-10 mb-6 md:mb-0">
              <p className="text-sm font-bold text-primary mb-1 uppercase tracking-widest">Selected Cause</p>
              <h4 className="text-2xl font-black font-headline">{selectedCause?.name || 'Select a cause'}</h4>
            </div>
            <div className="flex gap-4 relative z-10">
              <button onClick={handleBack} className="px-8 py-4 rounded-full font-bold text-on-surface bg-surface hover:bg-surface-container-high transition-colors">
                Back
              </button>
              <button onClick={() => setStep(3)} className="px-10 py-4 rounded-full font-bold text-on-primary bg-gradient-to-r from-primary to-primary-container shadow-[0_8px_32px_rgba(156,63,0,0.3)] hover:scale-105 transition-transform">
                Select and Continue
              </button>
            </div>
          </div>

          {/* Always show back button if nothing selected */}
          {!selectedCause && (
            <div className="mt-16 flex justify-center">
              <button onClick={handleBack} className="px-8 py-4 rounded-full font-bold text-on-surface bg-surface-container-highest hover:bg-surface-container-high transition-colors">
                Back
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );

  const renderStep3 = () => (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex justify-center">
      <main className="flex-1 overflow-y-auto">
        <header className="flex justify-between items-center w-full px-6 py-6 bg-surface font-['Epilogue'] tracking-tighter">
          <span className="text-2xl font-black italic text-[#9c3f00] cursor-pointer" onClick={() => navigate('/')}>Aura Link</span>
          <button className="text-[#2c2f30] hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="mb-16 flex flex-col items-center text-center gap-8">
            <div>
              <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-on-surface mb-4">
                Complete Your <span className="text-primary italic">Account</span>
              </h1>
              <p className="font-body text-on-surface-variant text-lg max-w-xl mx-auto">
                Fuel your passion and your impact. We just need a few final details to set up your legendary status.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-12 rounded-full bg-primary cursor-pointer" onClick={() => setStep(1)}></div>
              <div className="h-1.5 w-12 rounded-full bg-primary cursor-pointer" onClick={() => setStep(2)}></div>
              <div className="h-1.5 w-16 rounded-full bg-primary shadow-[0_0_15px_rgba(156,63,0,0.4)]"></div>
              <div className="h-1.5 w-12 rounded-full bg-surface-container-highest"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Section */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined">badge</span>
                      </div>
                      <input className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 font-medium" placeholder="Johnathan Doe" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <input className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 font-medium" placeholder="j.doe@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Secure Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined">lock</span>
                      </div>
                      <input className="w-full pl-12 pr-12 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 font-medium" placeholder="••••••••••••" type="password" />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-on-surface-variant">
                        <span className="material-symbols-outlined">visibility</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-on-surface-variant px-1 font-medium italic">Use at least 8 characters with a mix of letters and numbers.</p>
                  </div>
                </div>
                <div className="pt-4 flex gap-4">
                  <button type="button" onClick={handleBack} className="group relative flex items-center justify-center py-5 px-8 bg-surface-container-highest text-on-surface font-headline font-bold text-lg rounded-full hover:bg-surface-dim transition-all duration-300">
                    Back
                  </button>
                  <button type="button" className="flex-1 group relative flex items-center justify-center gap-3 py-5 bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold text-lg rounded-full shadow-[0_20px_50px_rgba(156,63,0,0.25)] hover:shadow-[0_25px_60px_rgba(156,63,0,0.35)] hover:-translate-y-1 transition-all duration-300">
                    Complete Membership
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
                <p className="text-center text-xs text-on-surface-variant mt-6 px-8 leading-relaxed">
                  By clicking complete, you agree to Aura Link's <a className="underline font-bold text-on-surface" href="#">Terms of Service</a> and <a className="underline font-bold text-on-surface" href="#">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Sidebar Summary Card */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="bg-surface-container-low rounded-xl p-8 relative overflow-hidden group">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
                <h3 className="font-headline text-xl font-bold mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                  Membership Recap
                </h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant">military_tech</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Selected Plan</p>
                      <p className="font-bold text-lg">{selectedPlan?.name}</p>
                      <p className="text-sm text-on-surface-variant">{selectedPlan?.price} <span className="opacity-60">{selectedPlan?.period}</span></p>
                    </div>
                  </div>

                  {selectedCause && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center flex-shrink-0">
                        <span className={`material-symbols-outlined ${selectedCause.colorText}`}>{selectedCause.icon}</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Your Impact</p>
                        <p className="font-bold text-lg">{selectedCause.name}</p>
                        <p className="text-sm text-on-surface-variant" dangerouslySetInnerHTML={{__html: selectedCause.impactSub.replace(/(\d+[a-zA-Z]*)/, '<span class="text-tertiary font-bold">$1</span>')}}></p>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 rounded-xl overflow-hidden h-32 relative">
                    <img alt="Charity Impact" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={selectedCause?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuAlPu_oFNpFE-X5mqQwTV5OvIxNuZF8ecX5b9ReuVNFTPU7zozu6nGWX3oWUp9QbjvuqgTr7Uzj1FR6OKamRjT9ty9unB1fOT3TFGI84uuaw_yVNatkd5dcEC_GF87EVyLa_19P864TAkNA8owjLr6QKFl1wyiCexUsFJ5a0WtPY9QFLGbtBolILrFjrzHLnFb-CXtFCGPEsTMvQZDSWx24A70N_GBP5Or4nnVQvuSx8qfVsWJklZ1TGwoapXBdAnyVje5sppg7zeM"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white text-xs font-bold">Joining thousands of link-minded philanthropists.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-highest rounded-xl p-6 flex items-center gap-4 border-l-4 border-primary/20">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div className="text-xs font-medium text-on-surface-variant leading-relaxed">
                  Your payment information is encrypted and securely processed by Stripe. No data is stored on our servers.
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="fixed bottom-8 right-8 w-14 h-14 bg-on-surface text-surface rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
          <span className="material-symbols-outlined">help</span>
        </button>
      </main>
    </div>
  );

  switch (step) {
    case 1: return renderStep1();
    case 2: return renderStep2();
    case 3: return renderStep3();
    default: return renderStep1();
  }
}
