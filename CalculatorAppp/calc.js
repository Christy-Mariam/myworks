
function display(val){
    
    var txtbox=document.querySelector(".displaybox");
    txtbox.value+=val;

}

function solve(){
    let data=doument.querySelector(".displaybox");
    let result=eval(data.value)
    data.value=result
}

let clearbox=()=>{
    document.querySelector(".displaybox").value=""
}