import { useState, useEffect } from 'react'
import { useLanguage } from '../App'

function Footer() {
  const { t } = useLanguage()
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__logo">
              <span>법률사무소</span> <strong>T&K</strong>
            </p>
          </div>
          <div className="footer__contact">
            <a href="tel:02-508-0828" className="footer__phone-btn">
              02-508-0828
            </a>
          </div>
        </div>

        <div className="footer__info">
          <div className="footer__info-row">
            <p>{t.footer.address}</p>
          </div>
          <div className="footer__info-row">
            <p>{t.footer.phone}</p>
            <span className="footer__divider">|</span>
            <p>{t.footer.fax}</p>
          </div>
          <div className="footer__info-row">
            <p>{t.footer.bizNum}</p>
            <span className="footer__divider">|</span>
            <p>{t.footer.email}</p>
          </div>
          <div className="footer__info-row">
            <p>{t.footer.privacyManager}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{t.footer.copyright}</p>
          <a href="#" className="footer__privacy">{t.footer.privacy}</a>
        </div>
      </div>

      <button
        className={`footer__top-btn ${showTopBtn ? 'footer__top-btn--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        TOP
      </button>
    </footer>
  )
}

export default Footer
