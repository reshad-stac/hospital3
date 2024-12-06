import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUserMd, FaHospital, FaInfoCircle } from 'react-icons/fa';
import '../../styles/FloatingNav.css';

function FloatingNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/doctors', icon: <FaUserMd />, label: 'Doctors' },
    { path: '/departments', icon: <FaHospital />, label: 'Departments' },
    { path: '/about', icon: <FaInfoCircle />, label: 'About' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="floating-nav"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="floating-nav-container">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`floating-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="floating-nav-icon">{item.icon}</span>
                <span className="floating-nav-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default FloatingNav;