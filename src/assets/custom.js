document.addEventListener('DOMContentLoaded', onDeviceReady, false);
function onDeviceReady() {
    const dropdownBtn = document.querySelector(".dropdown");
    const closeBtn = document.querySelector(".closebtn");

    if (dropdownBtn) {
        dropdownBtn.addEventListener("click", dropdown);
    }
    if (closeBtn) {
        closeBtn.addEventListener("click", closeNav);
    }

    function dropdown() {
        const nav = document.querySelector(".nav-slides");

        if (nav) {
            nav.classList.add("open");
            document.body.style.overflow = "hidden";
        }
    }

    function closeNav() {
        const nav = document.querySelector(".nav-slides");

        if (nav) {
            nav.classList.remove("open");
            document.body.style.overflow = "";
        }
    }



    //phone size responses when you click on the NAV
    const closeborders = document.querySelectorAll(".nav-slides a:not(.closebtn)");
    closeborders.forEach(function (link) {
        link.addEventListener("click", closeNav);
    });


    //if resized to laptop size, close NAV
    window.addEventListener("resize", function () {
        if (window.innerWidth > 799) {closeNav();}
    });




}
