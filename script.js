var character = document.getElementById("character")
var block = document.getElementById("block")
function jump(){
    if(!character.classList.contains("animate")){
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500);
    }
}

var checkDead = setInterval(function(){
    var characterBounds = character.getBoundingClientRect();
    var blockBounds = block.getBoundingClientRect();
    var collision = characterBounds.left < blockBounds.right &&
        characterBounds.right > blockBounds.left &&
        characterBounds.top < blockBounds.bottom &&
        characterBounds.bottom > blockBounds.top;

    if(collision) {
        clearInterval(checkDead);
        block.style.animation = "none";
        block.style.display = "none";
        alert("Pathetic. You lost, you loser. The vacuum cleaner won. Admit it.")
    }
},10);