import './App.css'

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="logo-section">
          <div className="logo">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" />
              <path d="M20 30L27 37L40 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <h1 className="title">We're Preparing Something Special</h1>
        <p className="subtitle">Our new platform is coming soon. Stay tuned for updates.</p>
        
        <div className="contact-section">
          <p className="contact-text">For inquiries, please contact us at</p>
          <a href="mailto:support@teamduzz.com" className="email">
            support@teamduzz.com
          </a>
        </div>
        
        <div className="footer">
          <p>© 2026 DUZZ. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App

