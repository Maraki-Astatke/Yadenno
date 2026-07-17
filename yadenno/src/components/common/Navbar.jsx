import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/* ─── Sun icon ───────────────────────────────────────────────────── */
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

/* ─── Moon icon ──────────────────────────────────────────────────── */
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/* ─── Theme toggle pill ──────────────────────────────────────────── */
const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary-navy dark:hover:text-primary-green transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <MoonIcon />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <SunIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

/* ─── Language toggle pill ───────────────────────────────────────── */
const LangToggle = ({ lang, onToggle, className = '' }) => (
  <button
    onClick={onToggle}
    aria-label="Switch language"
    className={`relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary-navy dark:hover:text-primary-green transition-all duration-300 shadow-sm hover:shadow-md font-bold text-sm ${className}`}
  >
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={lang}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute uppercase tracking-wider"
      >
        {lang === 'en' ? 'EN' : 'አማ'}
      </motion.span>
    </AnimatePresence>
  </button>
);

/* ═══════════════════════════════════════════════════════════════════
   Navbar
═══════════════════════════════════════════════════════════════════ */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  /* ── Theme ── */
  const [theme, setTheme] = useState(() => localStorage.getItem('yadenno-theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('yadenno-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  /* ── Language ── */
  const [lang, setLang] = useState(() => localStorage.getItem('yadenno-lang') || 'en');

  const toggleLang = () => {
    const next = lang === 'en' ? 'am' : 'en';
    setLang(next);
    i18n.changeLanguage(next);
    localStorage.setItem('yadenno-lang', next);
  };

  /* ── Scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const navLinks = [
    { path: '/',         label: t('nav.home')     },
    { path: '/products', label: t('nav.products') },
    { path: '/about',    label: t('nav.about')    },
    { path: '/contact',  label: t('nav.contact')  },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl py-3'
          : 'bg-white/85 dark:bg-gray-900/85 backdrop-blur-sm shadow-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="4,34 15,6 20,6 9,34"  fill="#79B62F"/>
              <polygon points="16,34 27,6 34,6 23,34" fill={theme === 'dark' ? '#ffffff' : '#16225C'}/>
            </svg>
          </div>
          <div>
            <span className="font-inter font-extrabold text-xl tracking-wider text-primary-navy dark:text-white transition-colors">
              YADENNO
            </span>
            <span className="block text-[10px] font-medium text-gray-500 dark:text-gray-400 -mt-1 tracking-widest transition-colors">
              PLASTICS PLC
            </span>
          </div>
        </Link>

        {/* ── Desktop nav links ── */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base lg:text-lg font-semibold transition-colors hover:text-primary-green relative ${
                  isActive ? 'text-primary-green' : 'text-gray-700 dark:text-gray-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-green rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ── Desktop right actions ── */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <LangToggle lang={lang} onToggle={toggleLang} />
        </div>

        {/* ── Mobile: theme + lang + hamburger ── */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme icon only on mobile */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'text-yellow-400 bg-gray-800 hover:bg-gray-700'
                : 'text-primary-navy bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span key="sun-mob"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,  opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="block"
                >
                  <SunIcon />
                </motion.span>
              ) : (
                <motion.span key="moon-mob"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0,  opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="block"
                >
                  <MoonIcon />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Lang pill on mobile */}
          <LangToggle lang={lang} onToggle={toggleLang} />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-primary-navy dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-primary-navy dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-primary-navy dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-lg border-t border-gray-100 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-semibold py-3 px-4 rounded-xl transition-all ${
                      isActive
                        ? 'text-primary-green bg-primary-green/10'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;