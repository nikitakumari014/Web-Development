const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click',function()
{
    // document.body.style.backgroundColor = 'olive';
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const newcolor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newcolor;
})