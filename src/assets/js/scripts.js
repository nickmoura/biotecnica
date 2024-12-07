export function initializeCarousel() {
    document.addEventListener("DOMContentLoaded", function () {
      let currentIndex = 0;
      const items = document.querySelectorAll(".carousel-item");
      const totalItems = items.length;
      const nextBtn = document.getElementById("next");
      const prevBtn = document.getElementById("prev");
  
      function showSlide(index) {
        items.forEach((item, i) => {
          item.classList.remove("active");
          if (i === index) {
            item.classList.add("active");
          }
        });
      }
  
      function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
      }
  
      function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
      }
  
      if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
      }
  
      // Slide automático a cada 5 segundos
      setInterval(nextSlide, 5000);
    });
  }
  