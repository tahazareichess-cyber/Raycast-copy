function initNavbar() {

    const hamburger = document.getElementById("hamburger");
    const navMob = document.querySelector(".nav-mob");

    if (!hamburger || !navMob) {
        console.error("Navbar elements not found");
        return;
    }

    hamburger.addEventListener("click", () => {

        navMob.classList.toggle("active");
        hamburger.classList.toggle("active");
        console.log("clicked");

    });
}