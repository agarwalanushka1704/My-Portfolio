/* =========================================================
   ANUSHKA PORTFOLIO — MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PRELOADER
    ===================================================== */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        setTimeout(() => {
            preloader.classList.add("hide");
        }, 700);

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar = document.getElementById("navbar");

    const handleNavbarScroll = () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    };

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* =====================================================
       MOBILE NAVBAR AUTO CLOSE
    ===================================================== */

    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("portfolioNavbar");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION LINK
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");

    const updateActiveNav = () => {

        const scrollPosition = window.scrollY + 180;

        sections.forEach((section) => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${sectionId}"]`
                    );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    };

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".section-title, " +
        ".about-content, " +
        ".service-card, " +
        ".project-item, " +
        ".skill-item, " +
        ".process-card, " +
        ".contact-box"
    );

    revealElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition =
            "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), " +
            "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =====================================================
       STAGGER SERVICE CARDS
    ===================================================== */

    const serviceCards =
        document.querySelectorAll(".service-card");

    serviceCards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 80}ms`;

    });


    /* =====================================================
       STAGGER PROCESS CARDS
    ===================================================== */

    const processCards =
        document.querySelectorAll(".process-card");

    processCards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 100}ms`;

    });


    /* =====================================================
       PROJECT HOVER EFFECT
    ===================================================== */

    const projectItems =
        document.querySelectorAll(".project-item");

    projectItems.forEach((project) => {

        const preview =
            project.querySelector(".project-preview");

        if (!preview) return;

        project.addEventListener("mouseenter", () => {

            preview.style.transform =
                "translateY(-10px) scale(1.015)";

        });

        project.addEventListener("mouseleave", () => {

            preview.style.transform =
                "translateY(0) scale(1)";

        });

    });


    /* =====================================================
       CUSTOM CURSOR
       ===================================================== */

    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";

    document.body.appendChild(cursor);

    const cursorDot = document.createElement("div");
    cursorDot.className = "cursor-dot";

    document.body.appendChild(cursorDot);


    let cursorX = 0;
    let cursorY = 0;

    let dotX = 0;
    let dotY = 0;


    document.addEventListener("mousemove", (event) => {

        cursorX = event.clientX;
        cursorY = event.clientY;

        cursorDot.style.left = `${cursorX}px`;
        cursorDot.style.top = `${cursorY}px`;

    });


    const animateCursor = () => {

        dotX += (cursorX - dotX) * 0.12;
        dotY += (cursorY - dotY) * 0.12;

        cursor.style.left = `${dotX}px`;
        cursor.style.top = `${dotY}px`;

        requestAnimationFrame(animateCursor);

    };

    animateCursor();


    /* =====================================================
       CURSOR HOVER STATES
    ===================================================== */

    const interactiveElements =
        document.querySelectorAll(
            "a, button, .service-card, .project-item, .process-card"
        );


    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursor.classList.add("cursor-hover");

        });


        element.addEventListener("mouseleave", () => {

            cursor.classList.remove("cursor-hover");

        });

    });


    /* =====================================================
       DISABLE CUSTOM CURSOR ON TOUCH DEVICES
    ===================================================== */

    const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;


    if (isTouchDevice) {

        cursor.remove();
        cursorDot.remove();

    }


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");

    if (heroVisual && !isTouchDevice) {

        window.addEventListener("mousemove", (event) => {

            const x =
                (window.innerWidth / 2 - event.clientX) / 45;

            const y =
                (window.innerHeight / 2 - event.clientY) / 45;

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* =====================================================
       MAGNETIC BUTTON EFFECT
    ===================================================== */

    const magneticButtons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn, .nav-cta, .contact-button"
        );


    magneticButtons.forEach((button) => {

        button.addEventListener("mousemove", (event) => {

            if (isTouchDevice) return;

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX - rect.left - rect.width / 2;

            const y =
                event.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * 0.12}px, ${y * 0.12}px)`;

        });


        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');


    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const navbarHeight =
                navbar.offsetHeight;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       PROJECT PREVIEW TILT
    ===================================================== */

    const browserWindows =
        document.querySelectorAll(".browser-window");


    browserWindows.forEach((browser) => {

        browser.addEventListener("mousemove", (event) => {

            if (isTouchDevice) return;

            const rect =
                browser.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 5;

            const rotateX =
                ((y / rect.height) - 0.5) * -5;

            browser.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.02)`;

        });


        browser.addEventListener("mouseleave", () => {

            browser.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) scale(1)";

        });

    });


    /* =====================================================
       DYNAMIC CURRENT YEAR
    ===================================================== */

    const footerYear =
        document.querySelector(".footer-bottom p");

    if (footerYear) {

        footerYear.innerHTML =
            `© ${new Date().getFullYear()} Anushka Agarwal. All rights reserved.`;

    }


    /* =====================================================
       REDUCE MOTION ACCESSIBILITY
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        document.documentElement.style.scrollBehavior =
            "auto";

    }


    /* =====================================================
       CONSOLE BRAND MESSAGE
    ===================================================== */

    console.log(
        "%c ANUSHKA PORTFOLIO ",
        "background:#b8ff3d;color:#000;font-size:16px;font-weight:bold;padding:8px 12px;"
    );

    console.log(
        "%cBuilt with HTML, CSS, JavaScript & Bootstrap.",
        "color:#999;font-size:12px;"
    );

});