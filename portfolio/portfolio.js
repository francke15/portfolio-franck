
function toggleReadMore() {
    var moreText = document.getElementById("more-text");
    var btn = document.querySelector(".btn-read-more");
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-read-more").onclick = toggleReadMore;
});
document.addEventListener("DOMContentLoaded", function() {
    // Pour le bouton About Me
    var aboutBtn = document.querySelector(".btn-read-more");
    if (aboutBtn) {
        aboutBtn.onclick = function() {
            var moreText = document.getElementById("more-text");
            if (moreText.style.display === "none") {
                moreText.style.display = "inline";
                aboutBtn.textContent = "Read Less";
            } else {
                moreText.style.display = "none";
                aboutBtn.textContent = "Read More";
            }
        };
    }

    // Pour les services
    var serviceBtns = document.querySelectorAll(".btn-read-more-service");
    serviceBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            var more = btn.previousElementSibling;
            if (more.style.display === "none" || more.style.display === "") {
                more.style.display = "inline";
                btn.textContent = "Read Less";
            } else {
                more.style.display = "none";
                btn.textContent = "Read More";
            }
        });
    });
});