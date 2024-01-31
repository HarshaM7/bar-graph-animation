
    const bars = document.querySelectorAll('.bar');
    let animationInterval;

    function animateBars() {
      bars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.height = '80%'; // Increase height
        }, index * 1000); // Delay each bar animation

        setTimeout(() => {
          bar.style.height = '20%'; // Decrease height
        }, (index + 1) * 1000); // Delay each bar decrease
      });
    }

    function startAnimation() {
      stopAnimation(); // Stop previous animations if running
      animateBars();
      animationInterval = setInterval(animateBars, bars.length * 2000);
    }

    function resetAnimation() {
      stopAnimation();
      bars.forEach((bar) => {
        bar.style.height = '100%'; // Reset height to initial state
      });
    }

    function stopAnimation() {
      clearInterval(animationInterval);
      bars.forEach((bar) => {
        bar.style.height = '20%'; // Reset height to initial state
      });
    }
  