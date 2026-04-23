import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const navClass = isHome
    ? "fixed top-0 left-0 right-0 z-50 bg-[#f5f6f7] dark:bg-[#2c2f30] transition-colors duration-300"
    : "fixed top-0 left-0 right-0 z-50 glass-nav";

  return (
    <header className={navClass}>
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-[#2c2f30] dark:text-[#f5f6f7] font-headline">
          TeeUp Charity
        </div>
        <div className="hidden md:flex items-center gap-8 font-label text-sm font-semibold tracking-wide uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#9c3f00] dark:text-[#f66700] font-bold border-b-2 border-[#9c3f00] pb-1 font-body"
                : "text-[#2c2f30] dark:text-[#dadddf] hover:text-[#f66700] transition-colors font-body"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/charities"
            className={({ isActive }) =>
              isActive
                ? "text-[#9c3f00] dark:text-[#f66700] font-bold border-b-2 border-[#9c3f00] pb-1 font-body"
                : "text-[#2c2f30] dark:text-[#dadddf] hover:text-[#f66700] transition-colors font-body"
            }
          >
            Charities
          </NavLink>
          <NavLink
            to="/draws"
            className={({ isActive }) =>
              isActive
                ? "text-[#9c3f00] dark:text-[#f66700] font-bold border-b-2 border-[#9c3f00] pb-1 font-body"
                : "text-[#2c2f30] dark:text-[#dadddf] hover:text-[#f66700] transition-colors font-body"
            }
          >
            Draws
          </NavLink>
          <a
            href="#"
            className="text-[#2c2f30] dark:text-[#dadddf] hover:text-[#f66700] transition-colors font-body"
          >
            Profile
          </a>
        </div>
        <button
          onClick={() => navigate('/join')}
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full px-6 py-2 title-sm transition-transform hover:scale-100 active:scale-95 duration-200 editorial-shadow">
          Join Now
        </button>
      </nav>
    </header>
  );
}
