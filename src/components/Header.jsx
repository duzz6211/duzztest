import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../App'

function Header() {
  const { lang, toggleLang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()

  // Scroll detection for header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navItems = [
    { path: '/office', label: t.nav.office },
    { path: '/cancellation', label: t.nav.cancellation },
    { path: '/insurance', label: t.nav.insurance },
    { path: '/complaint', label: t.nav.complaint },
    { path: '/litigation', label: t.nav.litigation },
    { path: '/community', label: t.nav.community },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <span className="header__logo-text">법률사무소</span>
          <span className="header__logo-brand">T&K</span>
        </NavLink>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} ref={menuRef}>
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="header__nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            className="header__lang-toggle"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>

          <button
            className={`header__menu-toggle ${menuOpen ? 'header__menu-toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="header__menu-bar"></span>
            <span className="header__menu-bar"></span>
            <span className="header__menu-bar"></span>
          </button>
        </div>
      </div>

      {menuOpen && <div className="header__overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  )
}

export default Header

