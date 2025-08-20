function initSlider() {
    const imageList = document.querySelector(".slider-track"); // <-- Fix: select the track
    const sliderScrollbar = document.querySelector(".slider .gis-scrollbar");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");

    // Calculate the max scrollable width
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Update scrollbar thumb position
    function updateScrollThumbPosition() {
        const scrollPosition = imageList.scrollLeft;
        const thumbMax = sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;
        const thumbPosition = (scrollPosition / maxScrollLeft) * thumbMax;
        scrollbarThumb.style.left = `${thumbPosition}px`; // <-- Fix: use backticks for string interpolation
    }

    // Listen to slider-track scroll
    imageList.addEventListener("scroll", updateScrollThumbPosition);

    // Initialize
    updateScrollThumbPosition();
}

// Run when DOM is loaded
document.addEventListener("DOMContentLoaded", initSlider);