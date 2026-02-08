function handleNoClick() {
  const yesButton = document.querySelector('.yes-button');
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize*1.4}px`;
}

function handleYesClick() {
  window.location.href="yes.html";
}

// Hearts rain for index.html
const heartsContainer = document.getElementById("hearts-container");
if(heartsContainer){
  function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random()*window.innerWidth+"px";
    heart.style.animationDuration = 3 + Math.random()*3 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  }
  setInterval(createHeart,300);
}

// Stars rain for yes.html
const starsContainer = document.getElementById("stars-container");
if(starsContainer){
  function createStar(){
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random()*window.innerWidth+"px";
    star.style.width = 10 + Math.random()*10 +"px";
    star.style.height = star.style.width;
    starsContainer.appendChild(star);
    setTimeout(()=>star.remove(),5000);
  }
  setInterval(createStar,300);
}


setInterval(createHeart, 300);



