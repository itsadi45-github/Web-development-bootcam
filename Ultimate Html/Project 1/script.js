document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTS
    ========================================= */

    const header = document.querySelector("header");
    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");
    const heroLogo = document.querySelector(".hero-content > img");
    const foodCards = document.querySelectorAll(".food-card");
    const orderButton = document.querySelector(".delivery-text button");
    const navLinks = document.querySelectorAll("header ul li a");


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.height = "65px";
            header.style.background = "#d92332";
            header.style.boxShadow =
                "0 6px 25px rgba(0, 0, 0, 0.25)";

        } else {

            header.style.height = "80px";
            header.style.background = "#e23744";
            header.style.boxShadow =
                "0 5px 25px rgba(0, 0, 0, 0.15)";
        }

    });


    /* =========================================
       SEARCH INPUT
    ========================================= */

    searchInput.addEventListener("focus", () => {

        searchInput.placeholder =
            "Try 'Pizza', 'Burger', 'Biryani'...";

    });


    searchInput.addEventListener("blur", () => {

        searchInput.placeholder =
            "Search for restaurant, cuisine or a dish";

    });


    /* =========================================
       SEARCH FUNCTION
    ========================================= */

    function performSearch() {

        const searchValue =
            searchInput.value.trim();

        /* Empty search */

        if (searchValue === "") {

            searchInput.classList.add("shake");

            setTimeout(() => {
                searchInput.classList.remove("shake");
            }, 400);

            searchInput.focus();

            return;
        }


        /* Searching animation */

        searchButton.textContent = "Searching...";
        searchButton.disabled = true;


        setTimeout(() => {

            searchButton.textContent = "Search";
            searchButton.disabled = false;

            searchInput.value = "";

            searchInput.placeholder =
                `Results for "${searchValue}"`;

        }, 1000);

    }


    /* Search button */

    searchButton.addEventListener(
        "click",
        performSearch
    );


    /* Enter key */

    searchInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {
                performSearch();
            }

        }
    );


    /* =========================================
       HERO LOGO PARALLAX
    ========================================= */

    document.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 700) {
                return;
            }

            const x =
                (event.clientX /
                    window.innerWidth - 0.5) * 8;

            const y =
                (event.clientY /
                    window.innerHeight - 0.5) * 8;


            heroLogo.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );


    /* =========================================
       FOOD CARD INTERACTION
    ========================================= */

    foodCards.forEach(card => {

        const link = card.querySelector("a");

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const foodName =
                card.querySelector("h3").textContent;

            searchInput.value = foodName;

            searchInput.focus();

            searchInput.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    });


    /* =========================================
       ORDER FOOD BUTTON
    ========================================= */

    orderButton.addEventListener("click", () => {

        searchInput.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(() => {

            searchInput.focus();

        }, 700);

    });


    /* =========================================
       NAVIGATION CLICK EFFECT
    ========================================= */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            link.style.transform = "scale(0.95)";

            setTimeout(() => {

                link.style.transform = "scale(1)";

            }, 150);

        });

    });


    /* =========================================
       FOOD CARD SCROLL ANIMATION
    ========================================= */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show-card"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    foodCards.forEach(card => {

        card.classList.add("hidden-card");

        observer.observe(card);

    });


    /* =========================================
       PAGE LOAD ANIMATION
    ========================================= */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 0.6s ease";

        document.body.style.opacity = "1";

    }, 100);

});