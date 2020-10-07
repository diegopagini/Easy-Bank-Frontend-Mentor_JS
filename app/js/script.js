const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
    console.log("click hamburger");

    if (header.classList.contains("open")) {
        body.classList.remove("noscroll"); // Unlock scroll when mob menu opens
        header.classList.remove("open"); //Close Hamburger Menu
        fadeElems.forEach(function (element) {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
    });
    } else {
        body.classList.add("noscroll"); // Lock scroll when mob menu opens
        header.classList.add("open"); //Open Hamburger Menu
        fadeElems.forEach(function (element) {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
    });
    }
});
