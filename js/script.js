/* ================================================
   ДЛЯ МАСТЕРА И ИИ — КРАТКАЯ КАРТА ФАЙЛА
   -----------------------------------------------
   Менять без риска:
   • ANNOUNCEMENT_CONFIG ниже — баннер отпуска (enabled/title/text/icon)
   Не ломать без нужды:
   • бургер-меню, FAQ-аккордеон, слайдер отзывов, smooth-scroll
   Связанные файлы:
   • js/i18n.js + js/i18n-extra.js — языки
   • css/style.css — внешний вид
   • index.html — тексты (часть через data-i18n)
   ================================================ */

/* ================================================
   ЕЛЕНА — ПЕРМАНЕНТНЫЙ МАКИЯЖ
   Интерактивность сайта
   ================================================ */

/* ============================================
   🔔 НАСТРОЙКА ВСПЛЫВАЮЩЕГО УВЕДОМЛЕНИЯ
   ============================================
   Меняйте ТОЛЬКО этот блок. Другие файлы трогать не нужно.

   enabled: true  — показывать уведомление
            false — не показывать
   title:   заголовок
   text:    текст (можно <br> для новой строки)
   icon:    эмодзи (или '' — без иконки)

   Как работает:
   — при первом заходе посетитель видит баннер;
   — после закрытия баннер больше не мешает (запоминается в браузере);
   — если поменять title или text — баннер снова покажется всем.
   Подробная инструкция: папка «Прочее» → ИНСТРУКЦИЯ_ВСПЛЫВАЮЩЕЕ_УВЕДОМЛЕНИЕ.md
   ============================================ */
const ANNOUNCEMENT_CONFIG = {
    enabled: false,    // true = показывать, false = скрыть
    title: 'Отпуск',
    text: 'До 12 сентября. Запись на новые процедуры — после возвращения.',
    icon: '🌴'
};

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       1. ЛИПКАЯ НАВИГАЦИЯ ПРИ СКРОЛЛЕ
       ============================================ */
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (window.scrollY > 60) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ============================================
       2. БУРГЕР-МЕНЮ (МОБИЛЬНОЕ)
       ============================================ */
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = (forceClose = false) => {
        const willOpen = forceClose ? false : !navMenu.classList.contains('active');
        if (forceClose || !willOpen) {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            if (navOverlay) {
                navOverlay.classList.remove('active');
                navOverlay.setAttribute('aria-hidden', 'true');
            }
            return;
        }
        burger.classList.add('active');
        navMenu.classList.add('active');
        document.body.classList.add('menu-open');
        if (navOverlay) {
            navOverlay.classList.add('active');
            navOverlay.setAttribute('aria-hidden', 'false');
        }
    };
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
    navLinks.forEach(link => link.addEventListener('click', () => toggleMenu(true)));
    if (navOverlay) {
        navOverlay.addEventListener('click', () => toggleMenu(true));
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) toggleMenu(true);
    });
    // Закрытие меню по клику вне панели
    document.addEventListener('click', (e) => {
        if (!navMenu.classList.contains('active')) return;
        if (navMenu.contains(e.target) || burger.contains(e.target)) return;
        toggleMenu(true);
    });

    /* ============================================
       3. АНИМАЦИЯ ПОЯВЛЕНИЯ СЕКЦИЙ (reveal)
       ============================================ */
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));


    /* ============================================
       5. FAQ АККОРДЕОН
       ============================================ */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // Закрыть все
            faqItems.forEach(other => {
                other.classList.remove('open');
                other.querySelector('.faq-answer').style.maxHeight = null;
            });
            // Открыть текущий, если был закрыт
            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    /* ============================================
       6. КАРУСЕЛЬ ОТЗЫВОВ
       ============================================ */
    const track = document.getElementById('reviewsTrack');
    const prevBtn = document.getElementById('reviewPrev');
    const nextBtn = document.getElementById('reviewNext');
    const dotsWrap = document.getElementById('reviewDots');

    if (track && prevBtn && nextBtn) {
        const cards = Array.from(track.querySelectorAll('.review-card'));
        let current = 0;
        const GAP = 24; // совпадает с gap в CSS

        const getPerView = () => {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 992) return 2;
            return 3;
        };

        const getMaxIndex = () => Math.max(0, cards.length - getPerView());

        const buildDots = () => {
            dotsWrap.innerHTML = '';
            const pages = getMaxIndex() + 1;
            for (let i = 0; i < pages; i++) {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'review-dot' + (i === current ? ' active' : '');
                dot.setAttribute('aria-label', 'Отзыв ' + (i + 1));
                dot.addEventListener('click', () => {
                    current = i;
                    updateCarousel();
                });
                dotsWrap.appendChild(dot);
            }
        };

        const updateCarousel = () => {
            const maxIndex = getMaxIndex();
            if (current > maxIndex) current = maxIndex;
            if (current < 0) current = 0;

            const cardWidth = cards[0].offsetWidth;
            const offset = current * (cardWidth + GAP);
            track.style.transform = `translateX(-${offset}px)`;

            const dots = dotsWrap.querySelectorAll('.review-dot');
            dots.forEach((d, i) => d.classList.toggle('active', i === current));
        };

        // ‹ — влево, › — вправо (без автопрокрутки)
        prevBtn.addEventListener('click', () => {
            const maxIndex = getMaxIndex();
            current = current <= 0 ? maxIndex : current - 1;
            updateCarousel();
        });
        nextBtn.addEventListener('click', () => {
            const maxIndex = getMaxIndex();
            current = current >= maxIndex ? 0 : current + 1;
            updateCarousel();
        });

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => { buildDots(); updateCarousel(); }, 200);
        });

        buildDots();
        updateCarousel();

        window.addEventListener('load', () => updateCarousel());
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => updateCarousel());
        }
    }

    /* ============================================
       7. ТЕКУЩИЙ ГОД В FOOTER
       ============================================ */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ============================================
       8. ПЛАВНЫЙ СКРОЛЛ С УЧЁТОМ ФИКС. ШАПКИ
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.length < 2) return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 70;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ============================================
       9. ВСПЛЫВАЮЩЕЕ УВЕДОМЛЕНИЕ (БАННЕР)
       ============================================ */
    const announcementOverlay = document.getElementById('announcementOverlay');
    const announcementClose = document.getElementById('announcementClose');
    const announcementTitle = document.getElementById('announcementTitle');
    const announcementText = document.getElementById('announcementText');
    const announcementIcon = document.getElementById('announcementIcon');

    if (announcementOverlay && ANNOUNCEMENT_CONFIG.enabled) {
        // Уникальный ключ: если сменить title/text — баннер снова покажется
        const storageKey = 'announcement_dismissed:' + ANNOUNCEMENT_CONFIG.title + '|' + ANNOUNCEMENT_CONFIG.text;
        let alreadyClosed = false;
        try {
            alreadyClosed = localStorage.getItem(storageKey) === '1';
        } catch (e) { /* private mode / нет доступа — просто покажем */ }

        if (!alreadyClosed) {
            announcementTitle.textContent = ANNOUNCEMENT_CONFIG.title;
            // Разрешаем только перенос строки <br>, остальное — как текст
            announcementText.textContent = '';
            const parts = String(ANNOUNCEMENT_CONFIG.text).split(/<br\s*\/?\s*>/i);
            parts.forEach((part, i) => {
                if (i) announcementText.appendChild(document.createElement('br'));
                announcementText.appendChild(document.createTextNode(part));
            });
            if (ANNOUNCEMENT_CONFIG.icon) {
                announcementIcon.textContent = ANNOUNCEMENT_CONFIG.icon;
                announcementIcon.style.display = '';
            } else {
                announcementIcon.textContent = '';
                announcementIcon.style.display = 'none';
            }

            const openAnnouncement = () => announcementOverlay.classList.add('show');
            const closeAnnouncement = () => {
                announcementOverlay.classList.remove('show');
                try {
                    localStorage.setItem(storageKey, '1');
                } catch (e) { /* ignore */ }
            };

            // Небольшая пауза, чтобы страница успела отрисоваться
            setTimeout(openAnnouncement, 600);

            announcementClose.addEventListener('click', closeAnnouncement);
            announcementOverlay.addEventListener('click', (e) => {
                if (e.target === announcementOverlay) closeAnnouncement();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && announcementOverlay.classList.contains('show')) {
                    closeAnnouncement();
                }
            });
        }
    }

    /* ============================================
       ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА — статические страницы
       -----------------------------------------------
       На статических языковых страницах (index-en.html и т.д.)
       пункты меню — обычные <a href> на реальные страницы, не
       кнопки с applyLang(). Этот блок только открывает/закрывает
       меню; сама вёрстка меню генерируется build-скриптом.
       Если на странице есть старый JS-переключатель (js/i18n.js),
       этот код просто ничего не найдёт и тихо выйдет — конфликта нет.
       ============================================ */
    (function initStaticLangDropdown() {
        const switcher = document.getElementById('langSwitcher');
        if (!switcher || !switcher.classList.contains('lang-dropdown-static')) return;
        const toggle = switcher.querySelector('.lang-toggle');
        if (!toggle) return;

        function close() {
            switcher.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const open = switcher.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        document.addEventListener('click', close);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close();
        });
    })();

    /* ============================================
       ФОНОВАЯ МУЗЫКА — кнопка-колонка
       -----------------------------------------------
       • играет тихо (volume 0.2 — 20%), зациклена (loop в <audio>)
       • клик по кнопке — вкл/выкл: при выключении иконка перечёркивается
       • состояние запоминается в localStorage
       • автовоспроизведение браузером заблокировано,
         поэтому музыка стартует только после клика
       ============================================ */
    (function initBackgroundMusic() {
        const btn = document.getElementById('musicToggle');
        const audio = document.getElementById('bgMusic');
        if (!btn || !audio) return;

        audio.volume = 0.2;
        audio.loop = true;

        const KEY = 'elenaperm_music_on';
        let playing = localStorage.getItem(KEY) === '1';

        function setState(on) {
            playing = on;
            btn.classList.toggle('is-playing', on);
            btn.classList.toggle('is-muted', !on);
            btn.setAttribute('aria-pressed', on ? 'true' : 'false');
            localStorage.setItem(KEY, on ? '1' : '0');
        }

        btn.addEventListener('click', () => {
            if (playing) {
                audio.pause();
                setState(false);
            } else {
                audio.play()
                    .then(() => setState(true))
                    .catch(() => setState(false)); // автовоспроизведение запрещено — просто не включаем
            }
        });

        // Если пользователь ранее включил музыку — пробуем продолжить (после первого клика по странице)
        if (playing) {
            const resume = () => {
                audio.play().then(() => setState(true)).catch(() => setState(false));
                document.removeEventListener('click', resume);
                document.removeEventListener('scroll', resume);
                document.removeEventListener('touchstart', resume);
            };
            document.addEventListener('click', resume);
            document.addEventListener('scroll', resume, { passive: true });
            document.addEventListener('touchstart', resume, { passive: true });
        }
    })();

});
