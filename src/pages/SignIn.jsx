import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <main className="flex h-screen w-full">
      {/* Left Side: Visual/Impact Section */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover"
            alt="dynamic shot of a golfer's silhouette against a vibrant sunrise, representing hope and the kinetic impact of charity sports events"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4iu8VfT7YC_5IZxoUBJYTwr3ZQfbRn3obxgPyxJhPb51heolxLkC1pYG9EGQmr1BLhspIf4025BNyG51SshlpldCGHRFyBYiWxBObQfeEJEK6ofRmpkK05OAgUENXepdH-JrJFrQyTJvAInxWnPbzUaIeNvKiIDwIs6WRqbvc8pyL_llHYs9mh8S1jage4hNCBXZDtCSFHYmmsUi4AUztPum9vrfePcXlBj6Q-XGLukTKuZJPwx0Rm4RIZ_U5BO__ZEQFl6JByD4"
          />
          {/* Signature Texture Overlay */}
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
        </div>
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-between p-16 w-full">
          <div>
            <h1 className="font-headline text-2xl font-bold tracking-tighter text-surface">TeeUp Charity</h1>
          </div>
          <div className="max-w-md">
            <h2 className="font-headline text-5xl font-extrabold text-surface leading-[1.1] mb-6 tracking-tighter">
              Swing for <span className="text-primary-container">Change</span>.
            </h2>
            <p className="text-surface-container-high text-lg font-medium leading-relaxed">
              Join a community of golfers turning every birdie into a breakthrough for local charities. Your impact starts on the first tee.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                <span className="material-symbols-outlined" data-icon="volunteer_activism">volunteer_activism</span>
              </div>
              <div>
                <p className="text-surface font-bold text-xl">$1.2M+</p>
                <p className="text-surface/70 text-xs font-label uppercase tracking-widest">Raised Total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="w-full lg:w-1/2 bg-surface-container-lowest flex flex-col justify-center items-center px-8 sm:px-16 md:px-24">
        <div className="w-full max-w-md">
          {/* Mobile Branding */}
          <div className="lg:hidden mb-12 text-center">
            <h1 className="font-headline text-3xl font-black tracking-tighter text-primary">TeeUp Charity</h1>
          </div>
          <header className="mb-10">
            <h3 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">Welcome Back</h3>
            <p className="text-on-surface-variant font-medium">Enter your credentials to access your Impact Dashboard.</p>
          </header>
          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-on-surface-variant px-1" htmlFor="email">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg" data-icon="mail">mail</span>
                </div>
                <input className="block w-full pl-12 pr-4 py-4 bg-surface-container-low border-0 rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface font-medium placeholder:text-outline" id="email" name="email" placeholder="name@example.com" required type="email"/>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="block text-sm font-bold text-on-surface-variant" htmlFor="password">Password</label>
                <a className="text-sm font-bold text-primary hover:text-primary-container transition-colors" href="#">Forgot Password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg" data-icon="lock">lock</span>
                </div>
                <input className="block w-full pl-12 pr-4 py-4 bg-surface-container-low border-0 rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface font-medium placeholder:text-outline" id="password" name="password" placeholder="••••••••" required type="password"/>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 px-1">
              <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" id="remember" type="checkbox"/>
              <label className="text-sm font-medium text-on-surface-variant" htmlFor="remember">Keep me signed in</label>
            </div>

            {/* Primary CTA */}
            <button className="kinetic-gradient w-full py-4 px-6 rounded-full text-surface font-bold text-lg shadow-xl shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2" type="submit">
              Sign In
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-12 text-center">
            <p className="text-on-surface-variant font-medium">
              Don't have an account?
              <Link className="text-primary font-bold ml-1 hover:underline decoration-2 underline-offset-4 transition-all" to="/join">Sign Up</Link>
            </p>
          </div>

          {/* Secondary/Social Logic */}
          <div className="mt-10 relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-surface-container-highest"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-surface-container-lowest text-outline font-medium uppercase tracking-widest text-xs">Or continue with</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-surface border border-outline-variant/20 rounded-xl font-bold text-on-surface hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined" data-icon="google">google</span>
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-surface border border-outline-variant/20 rounded-xl font-bold text-on-surface hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined" data-icon="apple">ios</span>
              Apple
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
