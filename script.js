function handleNoClick() {
  const yesButton = document.querySelector('.yes-button');
  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
  window.location.href = "yes.html";
}

// Inimioare rain
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = 15 + Math.random() * 25 + "px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);



