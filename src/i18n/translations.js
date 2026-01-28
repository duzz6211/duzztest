export const translations = {
  ko: {
    // Header
    nav: {
      office: '사무실 소개',
      cancellation: '해지환급금',
      insurance: '보험금',
      complaint: '보험민원',
      litigation: '보험소송',
      community: '커뮤니티',
    },
    
    // Hero Section
    hero: {
      title: '보험 분쟁,\n전문가와 함께하세요',
      subtitle: '해지환급금, 보험금 청구, 보험민원, 보험소송까지\n사안 검토 후 최적의 대응 전략을 안내해 드립니다.',
      ctaPhone: '전화 상담',
      ctaKakao: '카톡 상담',
      trustPoint1: '증빙 기반 체계적 대응',
      trustPoint2: '보험 분쟁 전문 경험',
      trustPoint3: '투명한 절차 안내',
      processTitle: '상담 진행 흐름',
      step1: '① 사안 요약',
      step2: '② 자료 검토',
      step3: '③ 대응 전략',
    },

    // Representative Section
    representative: {
      label: '대표변호사',
      name: '홍길동 변호사',
      imageAlt: '대표변호사 프로필',
      intro: '보험 분쟁 전문 변호사로서 의뢰인의 권익 보호를 위해 최선을 다합니다.',
      credentials: [
        '서울대학교 법학전문대학원 졸업',
        '제00회 변호사시험 합격',
        '前 대형 로펌 보험팀 근무',
        '금융분쟁조정위원회 자문위원',
      ],
      message: '"보험 분쟁은 전문성이 핵심입니다. 사안을 면밀히 검토하여 최적의 대응 전략을 제시해 드리겠습니다."',
    },
    
    // Services Section
    services: {
      title: '핵심 서비스',
      subtitle: '보험 관련 분쟁, 전문적으로 대응합니다',
      cancellation: {
        title: '해지환급금',
        desc: '불완전판매, 약관 미설명 등\n계약 무효·취소 사유를 검토합니다.',
        point: '검토 포인트: 계약 당시 상황, 설명의무 이행 여부',
      },
      insurance: {
        title: '보험금',
        desc: '보험금 부지급·삭감 사유를\n면밀히 분석하고 대응합니다.',
        point: '검토 포인트: 약관 조항, 의료기록, 사고경위',
      },
      complaint: {
        title: '보험민원',
        desc: '금융감독원 민원을 통한\n분쟁 해결 절차를 대리합니다.',
        point: '검토 포인트: 민원 적합성, 예상 쟁점 정리',
      },
      litigation: {
        title: '보험소송',
        desc: '소송이 필요한 경우\n전 과정을 대리합니다.',
        point: '검토 포인트: 소송 필요성, 증거자료 확보',
      },
      learnMore: '자세히 보기',
    },
    
    // Complaint Section
    complaint: {
      title: '보험민원 안내',
      subtitle: '금융감독원 민원 절차와 T&K의 지원 범위',
      processTitle: '민원 절차 4단계',
      step1: '민원 접수',
      step1Desc: '금융감독원에 민원서 제출',
      step2: '사실 조회',
      step2Desc: '보험사 답변 요청 및 검토',
      step3: '조정 절차',
      step3Desc: '분쟁조정위원회 심의',
      step4: '결과 통보',
      step4Desc: '조정안 수락 여부 결정',
      prosTitle: '민원의 장점',
      pros: [
        '소송보다 빠른 처리 기간',
        '비용 부담이 적음',
        '전문 조정위원의 심의',
        '보험사에 대한 행정적 압박'
      ],
      consTitle: '민원의 한계',
      cons: [
        '강제력 없는 조정안',
        '복잡한 사안은 한계 존재',
        '보험사 불수락 시 소송 필요',
        '사안에 따라 적합성 상이'
      ],
      supportTitle: 'T&K가 돕는 범위',
      supports: [
        '민원서 작성 및 논리 구성',
        '증빙자료 정리 및 분석',
        '쟁점 정리 및 반박 논거 준비',
        '대응 전략 수립 및 자문'
      ],
    },
    
    // Litigation Section
    litigation: {
      title: '보험소송 안내',
      subtitle: '민원으로 해결되지 않는 경우, 소송을 통한 권리 구제',
      checklistTitle: '소송이 필요한 경우',
      checklist: [
        '민원 조정안을 보험사가 거부한 경우',
        '민원 결과에 불복하는 경우',
        '청구 금액이 크고 쟁점이 복잡한 경우',
        '시효 만료가 임박한 경우',
        '명확한 법적 판단이 필요한 경우'
      ],
      timelineTitle: '예상 소송 흐름',
      timelineNote: '※ 기간은 사안별로 상이하며, 아래는 일반적인 흐름입니다.',
      timeline: [
        { phase: '소장 작성·제출', desc: '증거자료 수집 및 청구 논리 구성' },
        { phase: '송달·답변서', desc: '피고 보험사의 답변서 검토' },
        { phase: '변론 기일', desc: '쟁점 정리 및 주장·증거 제출' },
        { phase: '판결 선고', desc: '1심 판결, 필요 시 항소 검토' },
      ],
      faqTitle: '자주 묻는 질문',
      faqs: [
        {
          q: '소송 비용은 어느 정도 드나요?',
          a: '소송 비용은 청구 금액, 사건 복잡도에 따라 달라집니다. 상담 시 구체적인 비용을 안내해 드립니다.',
        },
        {
          q: '소송 기간은 얼마나 걸리나요?',
          a: '1심 기준 6개월~1년 이상 소요될 수 있으며, 사안의 복잡도와 법원 일정에 따라 달라집니다.',
        },
        {
          q: '패소하면 어떻게 되나요?',
          a: '패소 시 소송비용을 부담할 수 있습니다. 사전에 승소 가능성을 면밀히 검토해 드립니다.',
        },
        {
          q: '증거자료는 어떤 것이 필요한가요?',
          a: '보험계약서, 약관, 의료기록, 사고 관련 서류 등이 필요하며, 상담 시 구체적으로 안내해 드립니다.',
        },
        {
          q: '합의는 언제든 가능한가요?',
          a: '소송 중에도 합의는 가능합니다. 상황에 따라 합의 여부를 함께 검토해 드립니다.',
        },
        {
          q: '지방에 거주해도 의뢰할 수 있나요?',
          a: '네, 가능합니다. 원격 상담 및 서류 접수가 가능하며, 필요 시 방문 일정을 조율해 드립니다.',
        },
      ],
    },
    
    // Community Section
    community: {
      title: '커뮤니티',
      subtitle: '공지사항, 칼럼, FAQ를 확인하세요',
      notice: {
        title: '공지사항',
        item: '2024년 상담 운영 시간 안내',
        date: '2024.01.15',
      },
      column: {
        title: '칼럼',
        item: '보험금 청구 시 알아야 할 5가지',
        date: '2024.01.10',
      },
      faq: {
        title: 'FAQ',
        item: '상담 예약은 어떻게 하나요?',
        date: '2024.01.05',
      },
      more: '더보기',
    },
    
    // CTA Section
    cta: {
      title: '빠르게 상담받기',
      subtitle: '보험 분쟁, 혼자 고민하지 마세요.\n전문가가 함께합니다.',
      phone: '전화 상담',
      kakao: '카톡 상담',
    },
    
    // Footer
    footer: {
      firm: '법률사무소 T&K',
      address: '서울 강남구 선릉로 514 (삼성동, 성원타워) 904호',
      phone: '대표전화: 02-508-0828',
      fax: '팩스: 02-2039-5574',
      bizNum: '사업자번호: 340-52-00663',
      email: '이메일: info@bojeonglaw.com',
      privacy: '개인정보처리방침',
      privacyManager: '개인정보처리관리자: 강봉성 (homepage@bojeonglaw.com)',
      copyright: '© 2024 법률사무소 T&K. All rights reserved.',
    },
    
    // Floating Actions
    floating: {
      phone: '전화상담',
      kakao: '카톡상담',
    },
    
    // Placeholder
    placeholder: {
      title: '준비중',
      desc: '해당 페이지는 현재 준비중입니다.',
      back: '메인으로 돌아가기',
    },
  },
  
  en: {
    // Header
    nav: {
      office: 'About Us',
      cancellation: 'Refund',
      insurance: 'Claims',
      complaint: 'Complaints',
      litigation: 'Litigation',
      community: 'Community',
    },
    
    // Hero Section
    hero: {
      title: 'Insurance Disputes,\nWith Experts',
      subtitle: 'From refunds to claims, complaints, and litigation,\nwe guide you with optimal strategies after reviewing your case.',
      ctaPhone: 'Call Us',
      ctaKakao: 'KakaoTalk',
      trustPoint1: 'Evidence-based Systematic Response',
      trustPoint2: 'Specialized in Insurance Disputes',
      trustPoint3: 'Transparent Process Guidance',
      processTitle: 'Consultation Process',
      step1: '① Case Summary',
      step2: '② Document Review',
      step3: '③ Strategy Planning',
    },

    // Representative Section
    representative: {
      label: 'Managing Attorney',
      name: 'Attorney Hong Gil-dong',
      imageAlt: 'Managing Attorney Profile',
      intro: 'As a specialist in insurance disputes, I am committed to protecting the rights of my clients.',
      credentials: [
        'Seoul National University Law School Graduate',
        'Passed the 00th Bar Examination',
        'Former Insurance Team at Major Law Firm',
        'Financial Dispute Resolution Committee Advisor',
      ],
      message: '"Expertise is key in insurance disputes. I will thoroughly review your case and provide the optimal response strategy."',
    },
    
    // Services Section
    services: {
      title: 'Core Services',
      subtitle: 'Professional handling of insurance disputes',
      cancellation: {
        title: 'Cancellation Refund',
        desc: 'We review grounds for contract\nvoidance including mis-selling.',
        point: 'Review: Contract circumstances, duty of explanation',
      },
      insurance: {
        title: 'Insurance Claims',
        desc: 'We analyze and respond to\nclaim denials or reductions.',
        point: 'Review: Policy terms, medical records, incident details',
      },
      complaint: {
        title: 'Insurance Complaints',
        desc: 'We represent you in FSS\ncomplaint procedures.',
        point: 'Review: Complaint suitability, key issues',
      },
      litigation: {
        title: 'Insurance Litigation',
        desc: 'When litigation is needed,\nwe represent the entire process.',
        point: 'Review: Litigation necessity, evidence collection',
      },
      learnMore: 'Learn More',
    },
    
    // Complaint Section
    complaint: {
      title: 'Complaint Guide',
      subtitle: 'FSS complaint procedure and T&K support scope',
      processTitle: '4-Step Complaint Process',
      step1: 'File Complaint',
      step1Desc: 'Submit complaint to FSS',
      step2: 'Fact Inquiry',
      step2Desc: 'Request and review insurer response',
      step3: 'Mediation',
      step3Desc: 'Dispute resolution committee review',
      step4: 'Result Notice',
      step4Desc: 'Decide on mediation acceptance',
      prosTitle: 'Advantages',
      pros: [
        'Faster than litigation',
        'Lower cost burden',
        'Expert mediator review',
        'Administrative pressure on insurers'
      ],
      consTitle: 'Limitations',
      cons: [
        'Non-binding mediation',
        'Limited for complex cases',
        'Litigation needed if rejected',
        'Suitability varies by case'
      ],
      supportTitle: 'T&K Support Scope',
      supports: [
        'Complaint drafting and logic',
        'Evidence organization and analysis',
        'Issue summary and rebuttal preparation',
        'Strategy planning and consultation'
      ],
    },
    
    // Litigation Section
    litigation: {
      title: 'Litigation Guide',
      subtitle: 'Legal remedies through litigation when complaints fail',
      checklistTitle: 'When Litigation is Needed',
      checklist: [
        'When insurer rejects mediation',
        'When disputing complaint results',
        'Large claims with complex issues',
        'When statute of limitations is near',
        'When clear legal judgment is needed'
      ],
      timelineTitle: 'Expected Litigation Flow',
      timelineNote: '※ Duration varies by case. Below is a general flow.',
      timeline: [
        { phase: 'File Complaint', desc: 'Collect evidence and build claim logic' },
        { phase: 'Service & Answer', desc: 'Review defendant insurer\'s response' },
        { phase: 'Hearings', desc: 'Issue organization and evidence submission' },
        { phase: 'Judgment', desc: 'First instance judgment, appeal review if needed' },
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'How much does litigation cost?',
          a: 'Costs vary by claim amount and complexity. We provide specific cost guidance during consultation.',
        },
        {
          q: 'How long does litigation take?',
          a: 'First instance may take 6 months to over a year, depending on complexity and court schedule.',
        },
        {
          q: 'What if I lose?',
          a: 'You may bear litigation costs if you lose. We carefully review winning possibilities beforehand.',
        },
        {
          q: 'What evidence is needed?',
          a: 'Insurance contracts, policy terms, medical records, accident documents, etc. We guide specifically during consultation.',
        },
        {
          q: 'Is settlement possible anytime?',
          a: 'Settlement is possible during litigation. We review settlement options together based on circumstances.',
        },
        {
          q: 'Can I hire you from outside Seoul?',
          a: 'Yes. Remote consultation and document submission are available. We can arrange visits if needed.',
        },
      ],
    },
    
    // Community Section
    community: {
      title: 'Community',
      subtitle: 'Check notices, columns, and FAQs',
      notice: {
        title: 'Notice',
        item: '2024 Consultation Hours Guide',
        date: '2024.01.15',
      },
      column: {
        title: 'Column',
        item: '5 Things to Know When Filing Claims',
        date: '2024.01.10',
      },
      faq: {
        title: 'FAQ',
        item: 'How do I book a consultation?',
        date: '2024.01.05',
      },
      more: 'View More',
    },
    
    // CTA Section
    cta: {
      title: 'Quick Consultation',
      subtitle: 'Don\'t struggle alone with insurance disputes.\nExperts are here to help.',
      phone: 'Call Us',
      kakao: 'KakaoTalk',
    },
    
    // Footer
    footer: {
      firm: 'T&K Law Office',
      address: '904, Seongwon Tower, 514 Seolleung-ro, Gangnam-gu, Seoul',
      phone: 'Tel: 02-508-0828',
      fax: 'Fax: 02-2039-5574',
      bizNum: 'Business No: 340-52-00663',
      email: 'Email: info@bojeonglaw.com',
      privacy: 'Privacy Policy',
      privacyManager: 'Privacy Officer: Bongsung Kang (homepage@bojeonglaw.com)',
      copyright: '© 2024 T&K Law Office. All rights reserved.',
    },
    
    // Floating Actions
    floating: {
      phone: 'Call',
      kakao: 'KakaoTalk',
    },
    
    // Placeholder
    placeholder: {
      title: 'Coming Soon',
      desc: 'This page is currently under construction.',
      back: 'Back to Home',
    },
  },
};

