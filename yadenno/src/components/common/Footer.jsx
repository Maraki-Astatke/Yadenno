import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-navy dark:bg-gray-950 text-white transition-colors duration-300 font-inter">
      <div className="container mx-auto px-4 py-14 md:py-20">

        {/* Three-column grid — equal width columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 flex-shrink-0">
                <polygon points="4,34 15,6 20,6 9,34" fill="#79B62F"/>
                <polygon points="16,34 27,6 34,6 23,34" fill="#ffffff"/>
              </svg>
              <div>
                <span className="font-inter font-extrabold text-xl tracking-wider block">
                  YADENNO
                </span>
                <span className="text-[10px] font-medium text-gray-400 -mt-0.5 block tracking-widest uppercase">
                  PLASTICS PLC
                </span>
              </div>
            </div>
            <p className="text-base text-gray-300 leading-relaxed max-w-sm">
              Yadenno Plastics PLC manufactures UPVC pipe systems from our factory in Sheger City,
              Ethiopia, for water supply and drainage projects nationwide.
            </p>
          </div>

          {/* ── Col 2: Quick Links — centred ── */}
          <div className="flex flex-col items-center text-center">
            <h5 className="font-inter font-bold text-lg uppercase tracking-widest text-gray-300 mb-5">
              Quick Links
            </h5>
            <ul className="space-y-4 w-full flex flex-col items-center">
              {[
                { to: '/',         label: 'Home'     },
                { to: '/products', label: 'Products' },
                { to: '/about',    label: 'About Us' },
                { to: '/contact',  label: 'Contact'  },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-300 hover:text-primary-green transition-colors text-base font-semibold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h5 className="font-inter font-bold text-lg uppercase tracking-widest text-gray-300 mb-5">
              Contact
            </h5>
            <ul className="space-y-4 text-gray-300 w-full flex flex-col items-center md:items-start">
              <li>
                <a
                  href="tel:+251961363636"
                  className="hover:text-primary-green transition-colors flex items-center justify-center md:justify-start gap-2 text-base font-medium"
                >
                  <span>📞</span>
                  <span className="font-mono text-base font-semibold">+251 961 36 36 36</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:yadennoplc@gmail.com"
                  className="hover:text-primary-green transition-colors flex items-center justify-center md:justify-start gap-2 text-base font-medium break-all"
                >
                  <span>✉️</span>
                  <span className="font-mono text-base font-semibold">yadennoplc@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2 text-base font-medium">
                <span className="mt-0.5">📍</span>
                <span>Tatek Industry Zone, Sheger City</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-7 text-base text-gray-400 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <span>© {new Date().getFullYear()} Yadenno Plastics PLC. All rights reserved.</span>
          <span className="text-sm font-mono tracking-wide">Sheger City · Addis Ababa, Ethiopia</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;