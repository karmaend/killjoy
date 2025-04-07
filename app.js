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

/*bot js

window.botpress.init({
    "botId": "7d50d99f-5bb5-469e-8009-61094a4ab817",
    "configuration": {
      "website": {},
      "email": {},
      "phone": {},
      "termsOfService": {},
      "privacyPolicy": {},
      "color": "#74C365",
      "variant": "solid",
      "themeMode": "dark",
      "fontFamily": "fira",
      "radius": 0.5,
      "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/04/07/13/20250407132259-KZVXEBCR.css"
    },
    "clientId": "738e91b2-ff01-462f-a5b5-d851563037eb"
  });

*/