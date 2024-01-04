document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const cardSlides = document.querySelectorAll(".card-slide");

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = cardSlides.length - 1;
        } else if (index >= cardSlides.length) {
            index = 0;
        }

        const translateXValue = -index * 100 + "%";
        sliderContainer.style.transform = "translateX(" + translateXValue + ")";
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    setInterval(nextSlide, 3000); // Altere o intervalo conforme necessário (em milissegundos)
});
