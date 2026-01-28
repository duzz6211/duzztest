import { Link } from 'react-router-dom'
import { useLanguage } from '../App'

function Placeholder() {
  const { t } = useLanguage()

  return (
    <div className="placeholder">
      <div className="placeholder__container">
        <div className="placeholder__icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h1 className="placeholder__title">{t.placeholder.title}</h1>
        <p className="placeholder__desc">{t.placeholder.desc}</p>
        <Link to="/" className="placeholder__btn">
          {t.placeholder.back}
        </Link>
      </div>
    </div>
  )
}

export default Placeholder

