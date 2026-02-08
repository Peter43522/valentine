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


