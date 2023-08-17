




document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader after animation duration and show the content
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 300); // 3000 milliseconds (3 seconds)
});


