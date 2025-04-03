document.addEventListener("scroll", function () {
    const scrollElements = document.querySelectorAll(".scroll-up");
    elements.forEach(element => {
      const scrollPosition = window.scrollY;
      const elementPosition = element.offsetTop;
      const windowHeight = window.innerHeight;

      if (elementPosition < scrollPosition + windowHeight) {
        const moveUpDistance = Math.max(0, scrollPosition - elementPosition + windowHeight/2);
        element.style.transform = `translateY(-${moveUpDistance}px)`;
      } else {
         element.style.transform = 'translateY(0)';
      }
    });
  });
    /*function handleScroll() {
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
