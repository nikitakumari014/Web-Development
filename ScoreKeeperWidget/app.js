const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1disp = document.querySelector("#p1Display");
const p2disp = document.querySelector("#p2Display");
const resetbutton = document.querySelector("#Reset");
const winning = document.querySelector("#playupto");

let p1 = 0,p2=0;
let isGameOver = false;
let winningScore;

winning.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})
p1Score.addEventListener('click',function(e)
{
    if(p1!==winningScore && isGameOver==false){
        p1 += 1;
        p1disp.textContent = p1;
    }
    if(p1===winningScore){
        p1disp.classList.add('has-text-success');
        p2disp.classList.add('has-text-danger');
        isGameOver = true;
        p1Score.disabled = true;
        p2Score.disabled = true;
    }
   
});

p2Score.addEventListener('click',function(e)
{
    if(p2!==winningScore && isGameOver==false){
        p2 += 1;
        p2disp.textContent = p2;
    }
    if(p2===winningScore){
    isGameOver = true;
    p2disp.classList.add('has-text-success');
    p1disp.classList.add('has-text-danger');
    p1Score.disabled = true;
    p2Score.disabled = true;
    }
});

resetbutton.addEventListener('click',reset);
function reset()
{
        isGameOver = false;
        p1disp.textContent = 0;
        p2disp.textContent = 0;
        p1 = 0;
        p2 = 0;
        p1disp.classList.remove('has-text-success','has-text-danger');
        p2disp.classList.remove('has-text-danger','has-text-success');
        p1Score.disabled = false;
        p2Score.disabled = false;
}