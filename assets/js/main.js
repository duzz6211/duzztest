(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        initHeroSlider();
        initNoticeTabs();
        initMobileMenu();
        initScrollEffects();
        initSmoothScroll();
        initQuickMenuToggle();
    }

    function initHeroSlider() {
        const slider = document.getElementById('heroSlider');
        if (!slider) return;

        const slides = slider.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        const progressFill = document.getElementById('progressFill');

        if (slides.length === 0) return;

        slides.forEach(function(slide) {
            const bgElement = slide.querySelector('.slide-bg');
            if (bgElement) {
                const bgUrl = bgElement.getAttribute('data-bg');
                if (bgUrl) {
                    const img = new Image();
                    img.onload = function() {
                        bgElement.style.backgroundImage = 'url(' + bgUrl + ')';
                    };
                    img.onerror = function() {
                        console.warn('Hero 이미지 로드 실패:', bgUrl);
                    };
                    img.src = bgUrl;
                }
            }
        });

        let currentSlide = 0;
        let isPlaying = true;
        let intervalId = null;
        let progressIntervalId = null;
        const slideInterval = 5000;
        const progressStep = 50;

        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;

            slides[currentSlide].classList.remove('active');
            slides[index].classList.add('active');
            currentSlide = index;

            resetProgress();
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function prevSlide() {
            goToSlide(currentSlide - 1);
        }

        let progressValue = 0;

        function updateProgress() {
            progressValue += (progressStep / slideInterval) * 100;
            if (progressFill) {
                progressFill.style.width = progressValue + '%';
            }
        }

        function resetProgress() {
            progressValue = 0;
            if (progressFill) {
                progressFill.style.width = '0%';
            }
        }

        function startAutoPlay() {
            if (intervalId) return;
            
            intervalId = setInterval(nextSlide, slideInterval);
            progressIntervalId = setInterval(updateProgress, progressStep);
        }

        function stopAutoPlay() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
            if (progressIntervalId) {
                clearInterval(progressIntervalId);
                progressIntervalId = null;
            }
        }

        function togglePlay() {
            isPlaying = !isPlaying;
            
            if (pauseBtn) {
                const icon = pauseBtn.querySelector('i');
                if (icon) {
                    icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
                }
                pauseBtn.setAttribute('aria-label', isPlaying ? '슬라이더 일시정지' : '슬라이더 재생');
            }

            if (isPlaying) {
                resetProgress();
                startAutoPlay();
            } else {
                stopAutoPlay();
            }
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                prevSlide();
                if (isPlaying) {
                    stopAutoPlay();
                    startAutoPlay();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                nextSlide();
                if (isPlaying) {
                    stopAutoPlay();
                    startAutoPlay();
                }
            });
        }

        if (pauseBtn) {
            pauseBtn.addEventListener('click', togglePlay);
        }

        slider.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        startAutoPlay();
    }

    function initNoticeTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabButtons.length === 0) return;

        tabButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');

                tabButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });

                tabContents.forEach(function(content) {
                    content.classList.remove('active');
                });

                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');

                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });

            button.addEventListener('keydown', function(e) {
                let newIndex;
                const buttons = Array.from(tabButtons);
                const currentIndex = buttons.indexOf(this);

                if (e.key === 'ArrowRight') {
                    newIndex = (currentIndex + 1) % buttons.length;
                    buttons[newIndex].focus();
                    buttons[newIndex].click();
                } else if (e.key === 'ArrowLeft') {
                    newIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
                    buttons[newIndex].focus();
                    buttons[newIndex].click();
                }
            });
        });
    }

    function initMobileMenu() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const closeBtn = document.getElementById('mobileCloseBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('mobileOverlay');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link.has-sub');

        if (!menuBtn || !mobileMenu) return;

        function openMenu() {
            mobileMenu.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.classList.add('menu-open');
            menuBtn.setAttribute('aria-expanded', 'true');
            
            const firstFocusable = mobileMenu.querySelector('button, a');
            if (firstFocusable) {
                setTimeout(function() {
                    firstFocusable.focus();
                }, 100);
            }
        }

        function closeMenu() {
            mobileMenu.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.focus();
        }

        menuBtn.addEventListener('click', openMenu);
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMenu);
        }

        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        mobileNavLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                const subMenu = this.nextElementSibling;

                mobileNavLinks.forEach(function(otherLink) {
                    if (otherLink !== link) {
                        otherLink.setAttribute('aria-expanded', 'false');
                        const otherSubMenu = otherLink.nextElementSibling;
                        if (otherSubMenu) {
                            otherSubMenu.classList.remove('active');
                        }
                    }
                });

                this.setAttribute('aria-expanded', !isExpanded);
                if (subMenu) {
                    subMenu.classList.toggle('active');
                }
            });
        });

        const menuLinks = mobileMenu.querySelectorAll('a[href^="#"]');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });
    }

    function initScrollEffects() {
        const header = document.getElementById('mainHeader');
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        const scrollTopBtnMobile = document.getElementById('scrollTopBtnMobile');
        
        let ticking = false;

        function updateHeader() {
            const scrollY = window.scrollY || window.pageYOffset;
            
            if (header) {
                if (scrollY > 100) {
                    header.classList.add('scrolled');
                    header.classList.remove('at-top');
                } else if (scrollY < 50) {
                    header.classList.remove('scrolled');
                    header.classList.add('at-top');
                }
            }

            if (scrollTopBtn) {
                if (scrollY > 500) {
                    scrollTopBtn.style.opacity = '1';
                } else {
                    scrollTopBtn.style.opacity = '0.6';
                }
            }

            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });

        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        if (scrollTopBtnMobile) {
            scrollTopBtnMobile.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        updateHeader();
    }

    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;

                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();

                    const utilityBar = document.getElementById('utilityBar');
                    const header = document.getElementById('mainHeader');
                    let headerHeight = 0;
                    
                    if (utilityBar) {
                        headerHeight += utilityBar.offsetHeight;
                    }
                    if (header) {
                        headerHeight += header.offsetHeight;
                    }

                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                }
            });
        });
    }

    function initQuickMenuToggle() {
        const quickMenu = document.getElementById('quickMenu');
        const toggleBtn = document.getElementById('qmToggle');

        if (!quickMenu || !toggleBtn) return;

        const STORAGE_KEY = 'kku_quickmenu_collapsed';

        function loadState() {
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved === 'true') {
                    return true;
                }
            } catch (e) {}
            return false;
        }

        function saveState(collapsed) {
            try {
                localStorage.setItem(STORAGE_KEY, collapsed ? 'true' : 'false');
            } catch (e) {}
        }

        function applyState(collapsed) {
            if (collapsed) {
                quickMenu.classList.add('collapsed');
                toggleBtn.setAttribute('aria-expanded', 'false');
            } else {
                quickMenu.classList.remove('collapsed');
                toggleBtn.setAttribute('aria-expanded', 'true');
            }
        }

        function toggle() {
            const isCollapsed = quickMenu.classList.contains('collapsed');
            const newState = !isCollapsed;
            applyState(newState);
            saveState(newState);
        }

        const initialState = loadState();
        applyState(initialState);

        toggleBtn.addEventListener('click', toggle);
    }

})();
