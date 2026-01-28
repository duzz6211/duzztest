import { useState, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { translations } from './i18n/translations'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import Placeholder from './routes/Placeholder'

// Language Context
export const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

function App() {
  const [lang, setLang] = useState('ko')
  
  const toggleLang = () => {
    setLang(prev => prev === 'ko' ? 'en' : 'ko')
  }
  
  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/office" element={<Placeholder />} />
            <Route path="/cancellation" element={<Placeholder />} />
            <Route path="/insurance" element={<Placeholder />} />
            <Route path="/complaint" element={<Placeholder />} />
            <Route path="/litigation" element={<Placeholder />} />
            <Route path="/community" element={<Placeholder />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
        {/* 채널톡 연동 위치 - 실제 스크립트 삽입 금지 */}
      </div>
    </LanguageContext.Provider>
  )
}

export default App

