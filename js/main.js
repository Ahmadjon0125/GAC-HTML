const header = document.getElementById("mainHeader");

function updateHeader() {
    if (window.scrollY > 0) {
        header.classList.add("headerStyle");
    } else {
        header.classList.remove("headerStyle");
    }
}

// Sahifa scroll bo‘lganda ishlaydi
window.addEventListener("scroll", updateHeader);

// Sahifa to‘liq yuklanganda ham tekshiramiz
window.addEventListener("load", updateHeader);

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
    // 1. Kerakli elementlarni tanlab olish
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    // 2. Har bir knopkaga 'click' hodisasini qo'shish
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Bosilgan knopkadan maqsadli tab nomini olish (data-tab="...")
            const targetTab = button.getAttribute("data-tab");

            // --- A) Barcha aktiv holatlarni olib tashlash (Knopkalar va Kontentdan) ---

            // Barcha knopkalardan 'active' klassini olib tashlash
            tabButtons.forEach((btn) => btn.classList.remove("active"));

            // Barcha kontentlardan 'active' klassini olib tashlash (yashirish)
            tabContents.forEach((content) =>
                content.classList.remove("active")
            );

            // --- B) Maqsadli elementlarni aktiv qilish ---

            // Bosilgan knopkaga 'active' klassini qo'shish
            button.classList.add("active");

            // Maqsadli kontentni topish va unga 'active' klassini qo'shish (ko'rsatish)
            const activeContent = document.querySelector(
                `.tab-content[data-tab-content="${targetTab}"]`
            );
            if (activeContent) {
                activeContent.classList.add("active");
            }
        });
    });

});
