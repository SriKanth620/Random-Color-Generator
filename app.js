const cont= document.querySelector('.container');
const button= document.querySelector('button');
button.addEventListener("click",change);
let color= "#";
function change() {
    let symbol= "123456789ABCDEF";
    for(let i=0; i<6; i++)
    {
        color = color + symbol[Math.floor(Math.random() *15)];
        console.log(color);
        let c= "#EF23FA";
        cont.style.backgroundColor = color;
    }
    color= "#";
}


