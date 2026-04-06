const scrolledAppbar = document.getElementById("scrolled-appbar");
const appbar = document.getElementById("appbar");
const appbarHeight = appbar.getBoundingClientRect();

window.onscroll = (event) => {
    if (window.scrollY > appbarHeight.height) {
        scrolledAppbar.classList.remove("-translate-y-20");
        scrolledAppbar.classList.add("translate-0");
    } else {
        scrolledAppbar.classList.add("-translate-y-20");
        scrolledAppbar.classList.remove("translate-0");
    }
}

window.openMobileNavbar = () => {
    const mobileNavbar = document.getElementById("mobile-navbar");
    const overlay = document.getElementById("overlay");

    //mobileNavbar.classList.remove("hidden");
    mobileNavbar.classList.remove("-translate-y-60");
    mobileNavbar.classList.add("translate-0");

    overlay.classList.remove("pointer-events-none");
    overlay.classList.add("pointer-events-auto");

    overlay.addEventListener("click", () => {
        mobileNavbar.classList.remove("translate-0");
        mobileNavbar.classList.add("-translate-y-60");
        //mobileNavbar.classList.add("hidden");

        overlay.classList.remove("pointer-events-auto");
        overlay.classList.add("pointer-events-none");
    })
}