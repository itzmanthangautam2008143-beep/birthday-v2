// ===============================
// Birthday V2
// script.js
// ===============================

// Loader
const loader = document.getElementById("loader");
const main = document.getElementById("main");

setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
}, 2500);

// Photos
const photos = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg",
    "assets/6.jpg",
    "assets/7.jpg",
    "assets/8.jpg",
    "assets/9.jpg",
    "assets/10.jpg"
];

const photo = document.getElementById("photo");

let index = 0;

function changePhoto() {

    index++;

    if (index >= photos.length) {
        index = 0;
    }

    photo.style.opacity = "0";

    setTimeout(() => {

        photo.src = photos[index];

        photo.style.opacity = "1";

    }, 400);

}

setInterval(changePhoto, 3000);

// Music
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {

    music.play()
        .then(() => {

            playBtn.innerHTML = "🎵 Music Playing";

        })
        .catch((err) => {

            alert("Music Error : " + err.message);

            console.log(err);

        });

});

// Floating Hearts
const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.transition = "all 6s linear";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 600);