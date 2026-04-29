
import { Link, useNavigate } from 'react-router-dom';

export default function AdminSignIn() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      <main className="flex-grow relative flex items-center justify-center p-6 lg:p-12 overflow-hidden">
        {/* Subtle Background Texture/Image */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <img
            alt="Blurred artistic shot of a morning golf course fairway with morning dew and soft golden sunlight"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgw-xqUwSXZwQt4RV7XXG7odiVQrNUutSG4CYYJT7UxFemG3jud7L-fBvtI2Btu3x_FjnHrrx9yQag5BK6cn3_FKG0ss5Y5bnTYLXe-z2zwUQlOzzFd4bM5t8odlt_yo_W9jiYgKfo0uZBGt3HlUxsmtkvsqEyJjp1lR5FsB45_UmNSwivRBPSLIl5eJdvdstvdDsT5pOn3bj__xB4fO3KswZWeYqL-H6fCnk3HcD-pJFrux0iN3ZOPrppXFBvHAEbnAFXZ79pl-Y"
          />
        </div>

        {/* Floating Kinetic Element (Asymmetry) */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary to-orange-400 rounded-full opacity-5 blur-[80px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary-container rounded-full opacity-10 blur-[80px]"></div>

        {/* Login Container */}
        <div className="relative z-10 w-full max-w-[480px]">
          <div className="bg-white/70 backdrop-blur-3xl border border-white/20 rounded-xl p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(44,47,48,0.06)]">
            {/* Brand Anchor */}
            <div className="mb-10 text-center md:text-left">
              <h1 className="font-headline font-black text-primary text-4xl tracking-tighter mb-2">
                TeeUp Charity
              </h1>
              <p className="font-body text-on-surface-variant font-medium tracking-tight">
                Admin Console Access
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSignIn}>
              <div className="space-y-2">
                <label
                  className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1"
                  htmlFor="email"
                >
                  Admin Email
                </label>
                <div className="relative group">
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-lg py-4 px-5 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none"
                    id="email"
                    placeholder="name@teeup.org"
                    required
                    type="email"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-40 group-focus-within:text-primary group-focus-within:opacity-100 transition-all">
                    mail
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label
                    className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-xs font-bold text-primary hover:text-primary-dim transition-colors"
                    to="#"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative group">
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-lg py-4 px-5 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none"
                    id="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-40 group-focus-within:text-primary group-focus-within:opacity-100 transition-all">
                    lock
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  className="bg-gradient-to-br from-primary to-orange-400 w-full py-4 px-8 rounded-lg text-white font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
                  type="submit"
                >
                  Sign In to Console
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>

            {/* Help Link */}
            <div className="mt-12 text-center border-t border-outline-variant/10 pt-8">
              <p className="text-on-surface-variant text-sm">
                Having trouble accessing your account?
                <br className="hidden md:block" />
                <Link
                  className="inline-flex items-center gap-1 font-bold text-on-surface hover:text-primary transition-colors mt-2"
                  to="#"
                >
                  Contact System Admin
                  <span className="material-symbols-outlined text-[18px]">
                    support_agent
                  </span>
                </Link>
              </p>
            </div>
          </div>

          {/* Contextual Information (Bento-style snippet) */}
          <div className="mt-6 bg-surface-container-low p-4 rounded-lg flex items-center gap-4 border border-outline-variant/5">
            <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">
                Secure Environment
              </h4>
              <p className="text-xs text-on-surface-variant">
                Authorized administrative access only. IP logging active.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Shared Component: Footer */}
      <footer className="bg-surface-bright dark:bg-[#2c2f30] w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto font-['Manrope'] text-sm tracking-tight border-t border-outline-variant/10">
        <div className="flex flex-col items-center md:items-start gap-2 mb-8 md:mb-0">
          <span className="font-['Epilogue'] font-black text-orange-700 dark:text-orange-500 text-xl">
            TeeUp Charity
          </span>
          <p className="text-[#2c2f30] dark:text-[#dadddf] opacity-70">
            © 2024 TeeUp Charity. Impacting the game.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <Link
            className="text-[#2c2f30] dark:text-[#dadddf] opacity-70 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
            to="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-[#2c2f30] dark:text-[#dadddf] opacity-70 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
            to="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-[#2c2f30] dark:text-[#dadddf] opacity-70 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
            to="#"
          >
            Security Standards
          </Link>
        </div>
      </footer>
    </div>
  );
}
