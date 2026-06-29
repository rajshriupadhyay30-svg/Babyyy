// Loading Screen
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("main").classList.remove("hidden");
    }, 2500);
};

// Page Change
function nextPage(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page" + page).classList.add("active");

    if (page === 5) {
        typeLetter();
    }
}

// Funny Reasons
const reasons = [
    "💕 Because you make me smile.",
    "🌸 Because talking to you makes my day.",
    "🤍 Because you're my comfort person.",
    "🧸 Because you're adorable.",
    "✨ Because you're simply YOU."
];

let reasonIndex = 0;

function showReason() {
    document.getElementById("reason").innerText = reasons[reasonIndex];
    reasonIndex = (reasonIndex + 1) % reasons.length;
}

// Moving No Button
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 250 + "px";
    noBtn.style.top = Math.random() * 180 + "px";
});

// Floating Hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}, 300);

// Typewriter Letter
const letter = `Babyyyyyyyy!! 🥹👉🏻👈🏻💗

Finallyii bnaa liyaaa!! 😭🎀

Sabse pehle... bataiye kaisi lagi? 🤭

Aur haan... jaisi bhi ho na, acchi hi bolna... wrna koot denge. 🙄😂

Hehehehe... 🤭💕

aaj bahut mehnat kiye n aap to ye lo chotu sa sulplaiz sirf aapke liye. 🥺🤍

Shayad perfect na ho... but is website ka har chhota sa part sirf ek hi person ko soch ke banaya hai... Aapko. 💗🌷

Thank you itna special hone ke liye... aur meri life me aane ke liye. 🥹🤍

Bakiiii...

I lobbb youuhhh sooooo muchhhhh januuuuu!! 😭💕🎀

Ummmmmaaahhhhhhhhh!! 😚💋✨

Ab smile kijiye... warna fine lagega. 😌🤏🏻💗

Ye tha humara chotu sa surpriseee... 🤭🌸`;

let i = 0;

function typeLetter() {
    const target = document.getElementById("typing");
    target.innerHTML = "";
    i = 0;

    function typing() {
        if (i < letter.length) {
            target.innerHTML += letter.charAt(i);
            i++;
            setTimeout(typing, 35);
        }
    }

    typing();
}
// 🎉 Final Surprise Button
const finalBtn = document.createElement("button");
finalBtn.innerHTML = "💖 One Last Click 💖";
finalBtn.style.display = "none";
finalBtn.style.marginTop = "30px";

document.getElementById("page5").appendChild(finalBtn);

// Show button after letter finishes
function showFinalButton() {
    finalBtn.style.display = "inline-block";
}

// Update the typing function
const oldTypeLetter = typeLetter;
typeLetter = function () {
    const target = document.getElementById("typing");
    target.innerHTML = "";
    i = 0;

    function typing() {
        if (i < letter.length) {
            target.innerHTML += letter.charAt(i);
            i++;
            setTimeout(typing, 35);
        } else {
            showFinalButton();
        }
    }

    typing();
};

// 🎊 Final Popup
finalBtn.onclick = () => {
    document.body.innerHTML = `
    <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        background:linear-gradient(135deg,#ffd6e7,#fff0f7);
        flex-direction:column;
        text-align:center;
        font-family:Poppins,sans-serif;
        padding:20px;
    ">
        <h1 style="font-size:3rem;color:#ff4f93;">
            I Love You Aayush 💗
        </h1>

        <p style="font-size:1.3rem;color:#8b3d62;">
            No matter what...<br>
            I'll always choose you. 🌸💕
        </p>

        <h2 style="margin-top:25px;">
            ♾️ Forever & Always ♾️
        </h2>
    </div>
    ',,
