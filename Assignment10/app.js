const input = document.querySelector('#btn');
input.addEventListener('click',function(){
    alert("You clicked Me!");
})
const pt = document.querySelector('#pt');
pt.addEventListener('click',function(){
    prompt("Enter your name");
})
const cf = document.querySelector('#cf');
cf.addEventListener('click',function(){
    confirm('Press ok to confirm');
})
const op = document.querySelector('#op');
op.addEventListener('click',function(){
    window.open("https://google.com");
})
let myWindow;
function openWin() {
    myWindow = window.open("", "", "width=200,height=100");
  }
  
  function closeWin() {
    myWindow.close();
  }
const printt = document.querySelector('#pr')
printt.addEventListener('click',function(){
    window.print();
})