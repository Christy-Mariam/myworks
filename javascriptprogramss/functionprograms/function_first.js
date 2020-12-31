function add(num1,num2){
    let res=num1+num2;
    console.log(res)
}

add(10,20)

function sub(num1,num2){
    let res=num1-num2;
    console.log(res)
}

sub(500,200)


function fact(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i
    }
    console.log(fact)
}

fact(5)


let addd=(num1,num2)=>num1+num2
console.log(addd(100,200))
