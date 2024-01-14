var button = document.querySelector('.button');
var ball = document.querySelector('.ball');
var isTrue = false;

function toggleState(currentState) {
    return !currentState
}

button.addEventListener("click" , () => {

    isTrue = toggleState(isTrue);

    if(isTrue){
        ball.style.left = "105px";
        ball.style.backgroundColor = "wheat";
        ball.style.transition = "all 1s ease";
        button.style.borderColor = "red";
        button.style.transition = "all 1s ease"
    }else{
        ball.style.left = "0";
        ball.style.backgroundColor = "blue";
        button.style.transition = "all 1s ease"
        button.style.borderColor = "white"
    }
})