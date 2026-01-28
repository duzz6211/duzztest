import { useLanguage } from '../App'

function FloatingActions() {
  const { t } = useLanguage()

  return (
    <div className="floating-actions">
      <a
        href="tel:02-508-0828"
        className="floating-actions__btn floating-actions__btn--phone"
        aria-label={t.floating.phone}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className="floating-actions__label">{t.floating.phone}</span>
      </a>

      <a
        href="https://pf.kakao.com/_XXXX/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-actions__btn floating-actions__btn--kakao"
        aria-label={t.floating.kakao}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.47 1.607 4.647 4.035 5.906l-.792 2.934a.3.3 0 0 0 .462.334l3.516-2.334c.913.15 1.853.23 2.779.23 5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
        </svg>
        <span className="floating-actions__label">{t.floating.kakao}</span>
      </a>
      
      {/* 채널톡 상담 버튼 (채널톡 연동 위치) */}
    </div>
  )
}

export default FloatingActions

