const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
    if(closed){
        bar.addEventListener('click',() =>{
            nav.classList.remove('active');
    })
}
