document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#FFD700";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });
});