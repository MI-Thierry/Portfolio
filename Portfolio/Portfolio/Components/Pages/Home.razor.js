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