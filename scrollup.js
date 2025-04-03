document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".scroll-up");
    function handleScroll() {
        scrollElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.9) { 
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
