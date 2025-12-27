const header = document.getElementById("mainHeader");

function updateHeader() {
    if (window.scrollY > 0) {
        header.classList.add("headerStyle");
    } else {
        header.classList.remove("headerStyle");
    }
}
window.addEventListener("scroll", updateHeader);
window.addEventListener("load", updateHeader);

// language uchun

document.addEventListener("DOMContentLoaded", function () {
    const langWrapper = document.querySelector(".lang_wrapper");
    const langDropdown = document.querySelector(".lang__dropdown");

    langWrapper.addEventListener("click", function () {
        // Dropdownni ko'rsatish yoki yashirish
        if (langDropdown.style.display === "block") {
            langDropdown.style.display = "none";
        } else {
            langDropdown.style.display = "block";
        }
    });

    // Boshqa joy bosilganda yopish (opsional, lekin tavsiya qilinadi)
    document.addEventListener("click", function (event) {
        if (!langWrapper.contains(event.target)) {
            langDropdown.style.display = "none";
        }
    });
});

// Burger Menu   -------------------------------------------------------------------------------------------
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = burger.classList.contains("active")
        ? "hidden"
        : "";
});

overlay.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
});

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        mobileNav.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    });
});

// home page swiper slider js   -------------------------------------------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// home page uchun tab contentlar   -------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       TAB ELEMENTS
    ========================= */
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    /* =========================
       VIDEO ELEMENTS
    ========================= */
   const mainVideo = document.getElementById("mainVideo");
const mainPoster = document.getElementById("mainPoster");
const mainTitle = document.getElementById("mainTitle");

const thumbs = document.querySelectorAll(".thumb");

/* =========================
   VIDEO SET FUNCTION
========================= */
function setMainVideo(thumb) {
    if (!thumb) return;

    const thumbIn = thumb.querySelector(".thumbIn");
    if (!thumbIn) return;

    // active class
    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");

    // data-* ni thumbIn dan olish
    mainVideo.href = thumbIn.dataset.video;
    mainPoster.src = thumbIn.dataset.poster;
    mainTitle.textContent = thumbIn.dataset.title;
}

/* =========================
   THUMB CLICK (1 MARTA)
========================= */
thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        setMainVideo(thumb);
    });
});

/* =========================
   DEFAULT VIDEO (ixtiyoriy)
   page yuklanganda 1-chi
========================= */
const activeThumb = document.querySelector(".thumb.active");
if (activeThumb) {
    setMainVideo(activeThumb);
} else if (thumbs.length) {
    setMainVideo(thumbs[0]);
}


    /* =========================
       TAB SWITCH
    ========================= */
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetTab = button.dataset.tab;

            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabContents.forEach((content) =>
                content.classList.remove("active")
            );

            button.classList.add("active");

            const activeContent = document.querySelector(
                `.tab-content[data-tab-content="${targetTab}"]`
            );
            if (activeContent) {
                activeContent.classList.add("active");
            }

            // 🔥 FAQAT VIDEO TAB OCHILGANDA DEFAULT VIDEO
            if (targetTab === "video") {
                const activeThumb = document.querySelector(".thumb.active");
                if (!activeThumb && thumbs.length) {
                    setMainVideo(thumbs[0]);
                }
            }
        });
    });

    /* =========================
       PHOTO SWIPER
    ========================= */
    const swiperThumbs = new Swiper(".mySwiper10", {
        loop: false,
        spaceBetween: 5,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            992: {
                direction: "vertical",
                slidesPerView: 5,
            },
        },
    });

    const swiperMain = new Swiper(".mySwiper20", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        thumbs: {
            swiper: swiperThumbs,
        },
    });

});


// tecnology fancybox

Fancybox.bind("[data-fancybox]", {
    Carousel: {
        Video: {
            autoplay: false,
        },
    },
});

// swiper2
var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});


