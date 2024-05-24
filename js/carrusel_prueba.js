document.addEventListener("DOMContentLoaded", function(event) {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
  
    function moveSlides(direction) {
      if (direction === 'next') {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        currentIndex++;
        if (currentIndex >= slides.length) {
          currentIndex = 0;
        }
      } else if (direction === 'prev') {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = slides.length - 1;
        }
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
  
    nextBtn.addEventListener('click', function() {
      moveSlides('next');
    });
  
    prevBtn.addEventListener('click', function() {
      moveSlides('prev');
    });
  });
  
  