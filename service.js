const initSlider = () => {
	const evidenceList = document.querySelector(".slider-wrapper .evidence-list");
	const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
	const imageWidth = evidenceList.querySelector(".LEO-image").offsetWidth;
	const maxScrollLeft = evidenceList.scrollWidth - evidenceList.clientWidth;

	slideButtons.forEach(button => {
		button.addEventListener("click", () => {
			const direction = button.id === "prev-slide" ? -1 : 1;
			evidenceList.scrollBy({left: imageWidth * direction, behavior: "smooth"});
		});
	});
	const handleSlideButtons = () => {
		slideButtons[0].style.display = evidenceList.scrollLeft <= 0 ? "none" : "block";
		slideButtons[1].style.display = evidenceList.scrollRight >= maxScrollLeft ? "none" : "block";
	}
	evidenceList.addEventListener("scroll", () => {
		handleSlideButtons();
	});
};

window.addEventListener("load", initSlider);