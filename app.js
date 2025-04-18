const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


/* card header animation delay */
document.addEventListener("DOMContentLoaded", function () {
    const h2Element = document.querySelector(".cards h2");

    if (!h2Element) {
        console.error("Element not found!");
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    h2Element.classList.add("typing"); // Start typing animation
                    
                    // Remove cursor blinking after animation completes (3s)
                    setTimeout(() => {
                        h2Element.classList.add("finished"); // Stops blinking cursor
                    }, 2200); // Matches typing duration
                    
                    observer.unobserve(h2Element); // Stop observing after triggering
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(h2Element);
});

/*cybersecurity practices header animation */

document.addEventListener("DOMContentLoaded", function () {
    const h2Element = document.querySelector(".cybersecurity-practices h2");

    if (!h2Element) {
        console.error("Element not found!");
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    h2Element.classList.add("typing"); // Start typing animation
                    
                    // Remove cursor blinking after animation completes (3s)
                    setTimeout(() => {
                        h2Element.classList.add("finished"); // Stops blinking cursor
                    }, 2000); // Matches typing duration
                    
                    observer.unobserve(h2Element); // Stop observing after triggering
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(h2Element);
});

