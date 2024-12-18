document.addEventListener("DOMContentLoaded", function () {
    const carouselImages = document.querySelectorAll(".carousel-img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;
    const totalImages = carouselImages.length;
    const intervalTime = 5000; // 5 segundos

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) {
                img.classList.add("active");
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    // Auto slide every 5 seconds
    let autoSlide = setInterval(nextImage, intervalTime);

    // Next and Prev button functionality
    nextBtn.addEventListener("click", () => {
        clearInterval(autoSlide);
        nextImage();
        autoSlide = setInterval(nextImage, intervalTime);
    });

    prevBtn.addEventListener("click", () => {
        clearInterval(autoSlide);
        prevImage();
        autoSlide = setInterval(nextImage, intervalTime);
    });

    // Show the first image initially
    showImage(currentIndex);
});
