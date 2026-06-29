const cards = document.querySelectorAll(".flip-card");
const nextBtn = document.getElementById("nextBtn");

const videoModal = document.getElementById("videoModal");
const video = document.getElementById("loveVideo");
const closeVideo = document.querySelector(".close-video");

let unlockedCards = 0;

cards[0].classList.add("active");

cards.forEach((card, index) => {

    let unlocked = false;

    card.addEventListener("click", () => {

        if (!card.classList.contains("active")) return;

        card.classList.toggle("flipped");

        if (!unlocked && card.classList.contains("flipped")) {

            unlocked = true;
            unlockedCards++;

            if (index < cards.length - 1) {
                cards[index + 1].classList.add("active");
            }

            // Third card
            if (index === 2) {

                setTimeout(() => {

                    videoModal.classList.add("show");
                    video.play();

                },700);

            }

        }

    });

});

closeVideo.addEventListener("click",()=>{

    video.pause();
    video.currentTime = 0;

    videoModal.classList.remove("show");

    nextBtn.classList.add("show");

});

video.addEventListener("ended",()=>{

    videoModal.classList.remove("show");

    nextBtn.classList.add("show");

});

nextBtn.addEventListener("click",()=>{

    window.location.href="letter.html";

});