  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const cover = document.querySelector('.cover');
    const text = document.querySelector('.text');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const screenWidth = window.innerWidth;

      if (screenWidth < 940 && currentScroll > cover.clientHeight) {
        // Mobile view and scrolled past the cover
        if (currentScroll > lastScrollTop) {
          // Scroll down
          header.classList.add('show');
        } else {
          // Scroll up
          header.classList.remove('show');
        }
      } else {
        // Desktop view or not scrolled past the cover
        header.classList.remove('show');
      }
      
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
  });
