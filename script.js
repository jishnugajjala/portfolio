document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
        contactSection.addEventListener("click", function () {
            console.log("Thanks for visiting my portfolio! Feel free to reach out.");
        });
    }
});
