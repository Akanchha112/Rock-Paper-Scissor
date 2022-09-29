let rulebut = document.querySelector('.rule-button');
let modal = document.querySelector(".modal-state");
let crossbut = document.querySelector("#cross");
let clicked = document.getElementsByClassName("algo");
let playarea = document.getElementsByClassName("area");
let pickedContain = document.getElementsByClassName("picked-container");
let blankhouse = document.getElementsByClassName("blank-house");
let picky = document.getElementsByClassName("picky");
let pickh = document.getElementsByClassName("pickh");
let playbut = document.getElementsByClassName("button-play");
let houseSelect =0;
let scores = document.getElementsByClassName("score");
let score=Number(scores[0].innerHTML);
// console.log(+score);
console.log(typeof Number(score)  );
console.log(clicked);

// console.log(clicked[0].dataset);
for (let i = 0; i <= 2; i++) {

    clicked[i].onclick = () => {
        playarea[0].style.display = "none";
        // playarea[0].style.flexDirection ="row";
        pickedContain[0].style.display = "flex"; //
        blankhouse[0].style.display = "block";
        let mouseVal = Math.floor(Math.random() * 3);
        if(i==mouseVal){

        }
        for (let j = 0; j <= 2; j++) {
            if (i == j) {
                // clicked[j].style.display="block";
                picky[j].style.display = "block";
                
            }
            else {

                picky[j].style.display = "none";
            }

        }
        setTimeout(() => {
            blankhouse[0].style.display = "none";
            for (let j = 0; j <= 2; j++) {

                if (j == mouseVal) {
                    houseSelect=j;
                    pickh[j].style.display = "block";
                }
                else {
                    pickh[j].style.display = "none";
                }
            }
        }, 200);
        setTimeout(()=>{
            if (i == mouseVal) {
                document.getElementsByClassName("result")[0].innerHTML = "DRAW";
            }
            else if (i == 0) {
                if (mouseVal == 1) {
                    document.getElementsByClassName("result")[0].innerHTML = "YOU LOSE";
                    score-=1;
                    scores[0].innerHTML=score;
                }
                else if (mouseVal == 2) {
                    document.getElementsByClassName("result")[0].innerHTML = "YOU WIN";
                   
                    score+=1;
                    scores[0].innerHTML=score;
                }
    
            }
            else if (i == 1) {
                if (mouseVal == 0) {
                    document.getElementsByClassName("result")[0].innerHTML = "YOU WIN";
                   
                    score+=1;
                    scores[0].innerHTML=score;
                }
                else if (mouseVal == 2) {
                    document.getElementsByClassName("result")[0].innerHTML = "YOU LOSE";
                    score-=1;
                    scores[0].innerHTML=score;
                }
    
            }
            else if (i == 2) {
                if (mouseVal == 1) {
                    document.getElementsByClassName("result")[0].innerHTML = "YOU WIN";
                   
                    score+=1;
                    scores[0].innerHTML=score;
                }
                else if (mouseVal == 0) {
                    document.getElementsByClassName("result")[0].innerHTML = "YOU LOSE";
                    score-=1;
                    scores[0].innerHTML=score;
                }
    
            }
            playbut[0].style.display="block";
        },700);
        
        // clicked[i].style.display="none";

        console.log(clicked[i].dataset.value, mouseVal);

    };
};
playbut[0].onclick= ()=>{
    playarea[0].style.display = "flex";
    pickedContain[0].style.display = "none";
    document.getElementsByClassName("result")[0].innerHTML = " ";
    playbut[0].style.display="none";
    blankhouse[0].style.display = "none";
    pickh[houseSelect].style.display = "none";
    
};
rulebut.addEventListener("click", () => {
    modal.style.display = "block";
});
crossbut.addEventListener("click", () => {
    modal.style.display = "none";
});
