  // Wait for DOM content to load
  document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class 'animated'
    const elements = document.querySelectorAll('.animated');

    // Define animation for each element
    elements.forEach((element, index) => {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 800,
            delay: index * 100, // Delay each animation
            easing: 'easeOutQuad'
        });
    });

    // Text animations using Anime.js
    anime.timeline({
        targets: '.animate-text',
        easing: 'easeOutExpo'
    }).add({
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: anime.stagger(100, { start: 400 })
    });

    anime.timeline({
        targets: '.animate-number',
        easing: 'easeOutExpo'
    }).add({
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: anime.stagger(100, { start: 400 }),
        update: function(anim) {
            anim.animatables.forEach(animatable => {
                animatable.target.innerHTML = Math.ceil(animatable.target.innerHTML);
            });
        }
    });
});