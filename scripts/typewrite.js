const phrases = ["Together, We Heal", "Healing Begins with Listening", "Your Journey, Our Story", "Find Strength in Sharing"];
    const typewriterElement = document.querySelector('.typewriter-text');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let lastUpdateTime = 0;
    const typingSpeed = 4; // Speed of typing in milliseconds
    const deletingSpeed = 4; // Speed of deleting in milliseconds
    const pauseDuration = 2500; // Pause duration at the end of phrase

    function updateTypewriter(currentTime) {
      if (!lastUpdateTime) lastUpdateTime = currentTime;

      const deltaTime = currentTime - lastUpdateTime;
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        if (deltaTime >= deletingSpeed) {
          charIndex = Math.max(0, charIndex - 1);
          typewriterElement.textContent = currentPhrase.substring(0, charIndex);
          lastUpdateTime = currentTime;

          if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(() => requestAnimationFrame(updateTypewriter), 500);
            return;
          }
        }
      } else {
        if (deltaTime >= typingSpeed) {
          charIndex = Math.min(currentPhrase.length, charIndex + 1);
          typewriterElement.textContent = currentPhrase.substring(0, charIndex);
          lastUpdateTime = currentTime;

          if (charIndex === currentPhrase.length) {
            setTimeout(() => {
              isDeleting = true;
              requestAnimationFrame(updateTypewriter);
            }, pauseDuration);
            return;
          }
        }
      }

      requestAnimationFrame(updateTypewriter);
    }

    // Start the animation
    requestAnimationFrame(updateTypewriter);