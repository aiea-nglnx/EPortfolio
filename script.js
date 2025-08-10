const toolBarIcon = document.querySelector('.fa.fa-bars');
const menu = document.querySelector('nav ul');

window.onload = function () {
  const designWordEl = document.getElementById("design-word");
  const craftWordEl = document.getElementById("craft-word");

  const designWords = ["Empathy", "Optimization", "Accessibility", "Purpose", "Identity", "Flow", "Wonder", "Clarity"];
  const craftWords = ["Interfaces", "Experiences", "Journeys", "Maps", "Meaning", "Narratives", "Possibility"];
  
  let designIndex = 0;
  let craftIndex = 0;
  let charIndex = 0;

  function typeWords() {
    // Clear text if starting a new word
    if (charIndex == 0) {
      designWordEl.textContent = "";
      craftWordEl.textContent = "";
    }

    // Type 1 character at a time
    if (charIndex < designWords[designIndex].length) {
      designWordEl.textContent += designWords[designIndex].charAt(charIndex);
    }
    if (charIndex < craftWords[craftIndex].length) {
      craftWordEl.textContent += craftWords[craftIndex].charAt(charIndex);
    }

    charIndex++;

    // If done typing, wait then move to next word
    if (charIndex >= Math.max(designWords[designIndex].length, craftWords[craftIndex].length)) {
      setTimeout(() => {
        designIndex = (designIndex + 1) % designWords.length;
        craftIndex = (craftIndex + 1) % craftWords.length;
        charIndex = 0;
        typeWords();
      }, 1500); // Pause before next word
    } else {
      setTimeout(typeWords, 100); // Type next character
    }
  }
  typeWords();
};

toolBarIcon.addEventListener('click', () => {
  // Toggle mobile/small screen menu visibility
  menu.classList.toggle('menu-visible');  
  document.body.classList.toggle("show-mobile-menu");
});
