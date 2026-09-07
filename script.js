/* DARK MODE */

const themeButton =
    document.getElementById("theme-toggle");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.innerHTML = "☾";

        localStorage.setItem("theme", "light");

    }

});


/* SAVED THEME */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.innerHTML = "☀";

}


/* MOBILE MENU */

const menuButton =
    document.getElementById("menu-button");


const mobileMenu =
    document.getElementById("mobile-menu");


menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");


    if (mobileMenu.classList.contains("active")) {

        menuButton.innerHTML = "✕";

    } else {

        menuButton.innerHTML = "☰";

    }

});


/* CLOSE MOBILE MENU */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

        menuButton.innerHTML = "☰";

    });

});


/* SCROLL REVEAL */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;


        const screenPosition =
            window.innerHeight - 100;


        if (elementTop < screenPosition) {

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* COUNTER ANIMATION */

const counters =
    document.querySelectorAll(".counter");


const statsSection =
    document.querySelector(".hero-stats");


let counterStarted = false;


function startCounter(counter) {

    const target =
        Number(counter.getAttribute("data-target"));


    let current = 0;


    const increment =
        Math.ceil(target / 40);


    const counterInterval =
        setInterval(function () {

            current += increment;


            if (current >= target) {

                counter.textContent = target;

                clearInterval(counterInterval);

            } else {

                counter.textContent = current;

            }

        }, 35);

}


function checkCounter() {

    if (counterStarted) {
        return;
    }


    const statsPosition =
        statsSection.getBoundingClientRect();


    if (statsPosition.top < window.innerHeight - 100) {

        counters.forEach(function (counter) {

            startCounter(counter);

        });


        counterStarted = true;

    }

}


window.addEventListener("scroll", checkCounter);

checkCounter();