const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
  if (!character || !block) return;

  if (!character.classList.contains("animate")) {
    character.classList.add("animate");
    setTimeout(() => {
      character.classList.remove("animate");
    }, 500);
  }
}

document.addEventListener("click", jump);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyW") {
    event.preventDefault();
    jump();
  }
});

const checkDead = setInterval(() => {
  if (!character || !block) return;

  const characterBounds = character.getBoundingClientRect();
  const blockBounds = block.getBoundingClientRect();
  const collision =
    characterBounds.left < blockBounds.right &&
    characterBounds.right > blockBounds.left &&
    characterBounds.top < blockBounds.bottom &&
    characterBounds.bottom > blockBounds.top;

  if (collision) {
    clearInterval(checkDead);
    block.style.animation = "none";
    block.style.display = "none";
    alert("Pathetic. You lost, you loser. The vacuum cleaner won. Admit it.");
  }
}, 10);
