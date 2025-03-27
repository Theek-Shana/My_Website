document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-text", {
        strings: [
            "Software Engineer",
            "Web Developer",
            "Android App Developer",
            "Graphic Designer"
        ],
        typeSpeed: 100,  // Speed of typing
        backSpeed: 50,   // Speed of deleting
        backDelay: 1000, // Delay before backspacing
        loop: true,      // Infinite loop
        showCursor: true,
        cursorChar: "|"
    });
});
