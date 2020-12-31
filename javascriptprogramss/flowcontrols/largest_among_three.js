var num1=20,num2=30,num3=40;

if((num1>num2)&(num1>num3)){
    console.log("num1")

    if(num2>num3){
    console.log(num2+" second largest")
    }
    else{
        console.log(num3+" second largest")
    }

}

else if((num2>num1)&(num2>num3)){
    console.log("num2")

    if(num1>num3){
    console.log(num1+" second largest")
    }
    else{
        console.log(num3+" second largest")
    }

}

else if((num3>num1)&(num3>num2)){
    console.log("num3")

    if(num1>num2){
    console.log(num1+" second largest")
    }
    else{
        console.log(num2+" second largest")
    }

}