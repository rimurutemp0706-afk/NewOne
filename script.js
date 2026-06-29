const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesScale = 1;
let noScale = 1;
let clickCount = 0;

const messages = [
    "🥺",
    "😭",
    "💔",
    "Pleasee... 🥹",
    "Don't do this 😭",
    "I'm gonna cry... 😭",
    "You're breaking my heart 💔",
    "Still no? 🥺"
];

yesBtn.addEventListener("click", () => {
    window.location.href = "second.html";
});

noBtn.addEventListener("click", () => {

    clickCount++;

    const bubble = document.createElement("div");
    bubble.className = "cryBubble";

    if(clickCount <= messages.length){
        bubble.innerHTML = messages[clickCount-1];
    }else{
        bubble.innerHTML = "Just click on 'Yup' ❤️";
    }

    const rect = noBtn.getBoundingClientRect();

    bubble.style.left = rect.left + rect.width/2 + "px";
    bubble.style.top = rect.top - 10 + "px";

    document.body.appendChild(bubble);

    setTimeout(()=>{
        bubble.remove();
    },2000);

    yesScale += 0.18;
    yesBtn.style.transform = `scale(${yesScale})`;

    if(noScale > 0.15){
        noScale -= 0.08;
    }

    const x = Math.random()*300-150;
    const y = Math.random()*180-90;

    noBtn.style.transform =
        `translate(${x}px,${y}px) scale(${noScale})`;

    if(clickCount === 3){
        noBtn.innerHTML = "Are you sure? 🥺";
    }

    if(clickCount === 5){
        noBtn.innerHTML = "Really?? 😭";
    }

    if(clickCount === 7){
        noBtn.innerHTML = "No Escape 😂";
    }

    if(clickCount >= 9){
        noBtn.innerHTML = "😵";
    }

});