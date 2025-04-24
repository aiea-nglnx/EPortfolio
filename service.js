const initSliders = () => {
    // Select all slider-wrapper elements
    const sliderWrappers = document.querySelectorAll(".slider-wrapper");

    sliderWrappers.forEach(wrapper => {
        const evidenceList = wrapper.querySelector(".evidence-list");
        const slideButtons = wrapper.querySelectorAll(".slide-button");

        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Determine scroll direction
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = evidenceList.clientWidth; // Scroll by the width of the visible area
                evidenceList.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });

                // Update button visibility after scrolling
                setTimeout(() => {
                    slideButtons[0].style.display = evidenceList.scrollLeft <= 0 ? "none" : "block";
                    slideButtons[1].style.display = evidenceList.scrollLeft + evidenceList.clientWidth >= evidenceList.scrollWidth
                        ? "none"
                        : "block";
                }, 300); // Wait for smooth scroll to complete
            });
        });

        // Initialize button visibility
        slideButtons[0].style.display = evidenceList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = evidenceList.scrollLeft + evidenceList.clientWidth >= evidenceList.scrollWidth
            ? "none"
            : "block";
    });
};

// Initialize sliders when the page loads
window.addEventListener("load", initSliders);

