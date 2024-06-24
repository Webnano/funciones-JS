function pintar(ele, color){
    ele.style.backgroundColor = color
    ele.style.color = 'black'
    }
    const ele = document.getElementById("ele1");
    ele.addEventListener("click", ()=>{pintar(ele,'yellow')});