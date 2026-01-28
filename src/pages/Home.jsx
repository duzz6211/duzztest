import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../App'
import '../styles/home.css'

function Home() {
  const { t } = useLanguage()
  const [heroTextIndex, setHeroTextIndex] = useState(0)
  const [activeProcess, setActiveProcess] = useState(0)

  const heroTexts = [
    '법률사무소 T&K는 항상\n의뢰인의 마음을 먼저 생각합니다.',
    '무너진 보험 정의를\n바로 세우는 길을 걷겠습니다.'
  ]

  const processSteps = [
    {
      num: '01',
      title: '사안 접수',
      desc: '전화 또는 카카오톡으로\n간략한 사안 설명',
      image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=80'
    },
    {
      num: '02',
      title: '자료 검토',
      desc: '보험 약관 및\n관련 서류 분석',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80'
    },
    {
      num: '03',
      title: '전략 상담',
      desc: '대응 방향 및\n예상 결과 안내',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80'
    },
    {
      num: '04',
      title: '업무 수행',
      desc: '민원/소송 등\n선택 방법으로 진행',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80'
    }
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroTexts.length)
    }, 4000)
    return () => clearInterval(heroInterval)
  }, [])

  useEffect(() => {
    const processInterval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % processSteps.length)
    }, 3000)
    return () => clearInterval(processInterval)
  }, [])

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg"></div>
        <div className="hero__inner">
          <p className="hero__label">Insurance Law Specialist</p>
          <h1 className="hero__title" key={heroTextIndex}>
            {heroTexts[heroTextIndex].split('\n').map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h1>
          <div className="hero__buttons">
            <a href="tel:02-508-0828" className="btn btn--primary">
              전화 상담 02-508-0828
            </a>
            <a href="https://pf.kakao.com/_XXXX/chat" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* 대표 인사 */}
      <section className="intro">
        <div className="intro__container">
          <div className="intro__image">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&h=600&fit=crop&crop=faces" 
              alt="대표변호사"
            />
          </div>
          <div className="intro__content">
            <p className="intro__label">Representative Attorney</p>
            <h2 className="intro__title">
              보험 분쟁,<br/>
              전문가의 시선이 다릅니다
            </h2>
            <p className="intro__text">
              안녕하세요. 법률사무소 T&K 대표변호사입니다.<br/><br/>
              보험 분쟁은 단순한 법률 문제가 아닙니다. 
              약관의 해석, 의료 기록의 분석, 보험사의 대응 패턴까지 
              종합적인 이해가 필요합니다.<br/><br/>
              T&K는 오랜 경험을 바탕으로 의뢰인의 사안을 면밀히 검토하고, 
              최선의 결과를 위해 함께 노력하겠습니다.
            </p>
            <ul className="intro__credentials">
              <li>서울대학교 법학전문대학원 졸업</li>
              <li>前 대형 로펌 보험팀 근무</li>
              <li>보험 분쟁 다수 수행 경험</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 승소사례 */}
      <section className="cases">
        <div className="cases__container">
          <div className="cases__header">
            <p className="cases__label">Successful Cases</p>
            <h2 className="cases__title">
              왜곡되고 지연된 정의를<br/>
              빠르게 제자리로<br/>
              돌려드리겠습니다
            </h2>
          </div>
          <div className="cases__grid">
            <div className="cases__item">
              <span className="cases__tag">보험금 청구</span>
              <h3>암 진단금 부지급 사건</h3>
              <p>고지의무 위반 주장에 대한 반박으로 보험금 전액 수령</p>
              <span className="cases__result">승소</span>
            </div>
            <div className="cases__item">
              <span className="cases__tag">해지환급금</span>
              <h3>변액보험 불완전판매</h3>
              <p>설명의무 위반 입증으로 계약 취소 및 환급금 수령</p>
              <span className="cases__result">조정 성립</span>
            </div>
            <div className="cases__item">
              <span className="cases__tag">보험민원</span>
              <h3>후유장해 등급 분쟁</h3>
              <p>의료 감정 결과를 토대로 등급 상향 조정</p>
              <span className="cases__result">민원 인용</span>
            </div>
          </div>
          <div className="cases__more">
            <Link to="/community" className="btn btn--text-light">승소 사례 더 보기 →</Link>
          </div>
        </div>
      </section>

      {/* 업무 분야 */}
      <section className="practice">
        <div className="practice__container">
          <div className="practice__header">
            <p className="practice__label">Practice Areas</p>
            <h2 className="practice__title">보험 전문 업무 분야</h2>
          </div>
          <div className="practice__grid">
            <Link to="/cancellation" className="practice__item">
              <span className="practice__num">01</span>
              <h3>해지환급금</h3>
              <p>불완전판매, 약관 미설명 등<br/>계약 무효·취소 사유 검토</p>
            </Link>
            <Link to="/insurance" className="practice__item">
              <span className="practice__num">02</span>
              <h3>보험금 청구</h3>
              <p>보험금 부지급·삭감 사유<br/>분석 및 대응 전략 수립</p>
            </Link>
            <Link to="/complaint" className="practice__item">
              <span className="practice__num">03</span>
              <h3>보험민원</h3>
              <p>금융감독원 민원 절차<br/>전문 대리 및 자문</p>
            </Link>
            <Link to="/litigation" className="practice__item">
              <span className="practice__num">04</span>
              <h3>보험소송</h3>
              <p>소송 전 과정 대리<br/>체계적 전략 수립</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 뉴스 */}
      <section className="news">
        <div className="news__container">
          <div className="news__header">
            <p className="news__label">T&K News</p>
            <h2 className="news__title">
              어렵고 복잡한 피해 사건 회복<br/>
              T&K가 쉽고 간단하게<br/>
              알려드리겠습니다
            </h2>
          </div>
          <div className="news__grid">
            <Link to="/community" className="news__item">
              <span className="news__date">2024.01.15</span>
              <h3>보험금 청구 시 꼭 확인해야 할 약관 조항</h3>
              <p>보험금 청구 전 반드시 체크해야 할 핵심 사항을 정리했습니다.</p>
            </Link>
            <Link to="/community" className="news__item">
              <span className="news__date">2024.01.10</span>
              <h3>금융감독원 민원, 언제 효과적인가?</h3>
              <p>민원과 소송의 차이점, 어떤 경우에 민원이 유리한지 알아봅니다.</p>
            </Link>
            <Link to="/community" className="news__item">
              <span className="news__date">2024.01.05</span>
              <h3>변액보험 불완전판매, 환급받을 수 있을까?</h3>
              <p>불완전판매 입증 방법과 실제 사례를 소개합니다.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 상담 절차 - 인터랙티브 */}
      <section className="process">
        <div className="process__container">
          <div className="process__header">
            <p className="process__label">Consultation Process</p>
            <h2 className="process__title">상담 진행 절차</h2>
          </div>
          <div className="process__content">
            <div className="process__image">
              {processSteps.map((step, idx) => (
                <img
                  key={idx}
                  src={step.image}
                  alt={step.title}
                  className={`process__image-item ${activeProcess === idx ? 'active' : ''}`}
                />
              ))}
            </div>
            <div className="process__steps">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`process__step ${activeProcess === idx ? 'active' : ''}`}
                  onClick={() => setActiveProcess(idx)}
                >
                  <span className="process__step-num">{step.num}</span>
                  <div className="process__step-info">
                    <h3>{step.title}</h3>
                    <p>{step.desc.split('\n').map((line, i) => (
                      <span key={i}>{line}<br/></span>
                    ))}</p>
                  </div>
                  <div className="process__step-progress">
                    <div className={`process__step-bar ${activeProcess === idx ? 'animating' : ''}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 오시는길 */}
      <section className="location">
        <div className="location__container">
          <div className="location__info">
            <p className="location__label">Location</p>
            <h2 className="location__title">오시는 길</h2>
            
            <div className="location__card">
              <div className="location__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="location__card-content">
                <h3>대표전화</h3>
                <p className="location__card-highlight">02-508-0828</p>
                <p className="location__card-sub">평일 오전 09:00 - 오후 06:00 (주말휴무)</p>
              </div>
            </div>

            <div className="location__card">
              <div className="location__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="location__card-content">
                <h3>오시는 길</h3>
                <p className="location__card-highlight">서울 강남구 선릉로 514 (삼성동, 성원타워) 904호</p>
                <p className="location__card-sub">선릉역 8번 출구, 도보 2분거리</p>
              </div>
            </div>

            <div className="location__card">
              <div className="location__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <div className="location__card-content">
                <h3>주차 안내</h3>
                <p className="location__card-highlight">지하 주차장 이용 (자주식)</p>
                <p className="location__card-sub">모든 차량 주차 가능</p>
              </div>
            </div>
          </div>
          <div className="location__map">
            <iframe 
              src="https://www.google.com/maps?q=서울특별시+강남구+삼성동+141+성원타워&z=17&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="법률사무소 T&K 위치"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact">
        <div className="contact__container">
          <h2 className="contact__title">지금 바로 상담받으세요</h2>
          <p className="contact__desc">
            보험 분쟁으로 어려움을 겪고 계신가요?<br/>
            T&K가 함께 해결 방법을 찾아드리겠습니다.
          </p>
          <div className="contact__buttons">
            <a href="tel:02-508-0828" className="btn btn--large btn--primary">
              전화 상담
            </a>
            <a href="https://pf.kakao.com/_XXXX/chat" target="_blank" rel="noopener noreferrer" className="btn btn--large btn--kakao">
              카카오톡 상담
            </a>
          </div>
          <p className="contact__info">
            평일 09:00 - 18:00 | 점심시간 12:00 - 13:00
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
