// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "blue"; 

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left + 5}px`;
    }
}

document.addEventListener("keydown", function (e) {
    // if (e.key === "ArrowLeft") {
    //   moveDodgerLeft();
    // }
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        
    } else { (e.key === "ArrowRight")
        moveDodgerRight(); 

        
    }
});

// document.addEventListener("keydown", function (e){
//     if (e.key === "ArrowRight"){
//         moveDodgerRight();
//     }
// })