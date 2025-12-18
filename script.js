
// pick/select video-card-box div using querysectior
const cards = document.querySelectorAll(".vid-card-box");

cards.forEach(card => {
    const video = card.querySelector("video"); // here is pick the video inside the video-card-box div

    card.addEventListener("mouseenter", () => { // add eventlintner when i hover the mouse on video then video will play
        video.play();
    });

    card.addEventListener("mouseleave", () => { // when the mouse leave from video then video will pause and reset automatacally
        video.pause();
        video.currentTime = 0;   // video reset
    });
});


// Adding toggle button for responsive screen 
const toggleBtn = document.querySelector(".menuToggle");
const navbar = document.querySelector(".nav");

// Toggle menu open/close when I click toggle button then list will show and again i click toggle button then list will close
toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// when the toggle button active and nav list is showing and when i click anywhere at responsive screen then toggle button list will close
document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !toggleBtn.contains(e.target)) {
        navbar.classList.remove("active");
    }
});


// Footer Section link code
document.addEventListener("DOMContentLoaded", () => {
    const basePath = window.location.pathname
        .split("/")
        .slice(0, -1)
        .join("/");

    fetch(`${basePath}/snapfindPages/footer.html`)
        .then(res => {
            if (!res.ok) throw new Error("Footer not found");
            return res.text();
        })
        .then(html => {
            document.getElementById("footer").innerHTML = html;
        })
        .catch(err => console.error("Footer load error:", err));
});
