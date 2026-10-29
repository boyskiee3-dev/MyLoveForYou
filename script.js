// PASSWORD
const correctPassword = "dec192022";

// OPENING SCREEN
function openHeart() {
    document.getElementById("welcomeScreen").hidden = true;
    document.getElementById("loginScreen").hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// LOGIN SYSTEM
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    if (password === correctPassword) {
        document.getElementById("loginScreen").hidden = true;
        document.getElementById("mainSite").hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } else {
        message.textContent = "Wrong password! Try again, love. 💗";
    }
});

// PICTURES UPLOAD
const pictureUpload = document.getElementById("pictureUpload");
const pictureGallery = document.getElementById("pictureGallery");

pictureUpload.addEventListener("change", function() {
    const files = Array.from(this.files);

    if (files.length === 0) return;

    pictureGallery.innerHTML = "";

    files.forEach(function(file) {
        if (!file.type.startsWith("image/")) return;

        const image = document.createElement("img");

        image.src = URL.createObjectURL(file);
        image.alt = file.name;

        pictureGallery.appendChild(image);
    });
});

// LOVE LETTER
const loveLetter = document.getElementById("loveLetter");
const letterMessage = document.getElementById("letterMessage");

// Load saved letter
loveLetter.value = localStorage.getItem("myLoveLetter") || "";

function saveLetter() {
    localStorage.setItem("myLoveLetter", loveLetter.value);

    letterMessage.textContent =
        "Your love letter has been saved! 💌";
}

// VIDEOS UPLOAD
const videoUpload = document.getElementById("videoUpload");
const videoGallery = document.getElementById("videoGallery");

videoUpload.addEventListener("change", function() {
    const files = Array.from(this.files);

    if (files.length === 0) return;

    videoGallery.innerHTML = "";

    files.forEach(function(file) {
        if (!file.type.startsWith("video/")) return;

        const video = document.createElement("video");

        video.src = URL.createObjectURL(file);
        video.controls = true;
        video.preload = "metadata";

        videoGallery.appendChild(video);
    });
});

// BACKGROUND MUSIC
const musicUpload = document.getElementById("musicUpload");
const musicPlayer = document.getElementById("musicPlayer");

musicUpload.addEventListener("change", function() {
    const file = this.files[0];

    if (!file) return;

    musicPlayer.src = URL.createObjectURL(file);

    musicPlayer.play().catch(function() {
        // Click Play on the audio player if needed.
    });
});

/* FLOATING HEARTS */
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
