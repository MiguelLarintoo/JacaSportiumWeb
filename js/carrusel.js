document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
  
    let currentIndex = 0;
    const totalImages = images.length;
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      const translateX = -currentIndex * 100;
      carousel.style.transform = `translateX(${translateX}%)`;
    }, 3000); // Cambia la imagen cada 3 segundos
  });
  