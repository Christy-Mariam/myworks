var clk=document.querySelector("#clk")
clk.addEventListener("click",()=>{
    clk.textContent="clicked"
    clk.style.color="red"

})

var ov=document.querySelector("#over")
ov.addEventListener("mousemove",()=>{
    ov.textContent="mouse currently overme"
    ov.style.color="red"

})

var dbclk=document.querySelector("#dbclk")
dbclk.addEventListener("dblclick",()=>{
    dbclk.textContent="doubleclicked";
    dbclk.style.color="green"

})

var ove=document.querySelector("#ove")
ove.addEventListener("mouseover",()=>{
    ove.textContent="mouse currently over me";
    ove.style.color="green"

})

ove.addEventListener("mouseout",()=>{
    ove.textContent="mouse not over me";
    ove.style.color="cyan"

})