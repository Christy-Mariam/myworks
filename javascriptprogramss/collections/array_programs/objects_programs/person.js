var arr=[10,11,8,7,6,12,13]

for(let num of arr){
    console.log(num**2)
}

for(let num of arr){
    console.log(num**3)
}
for(let num of arr){
    console.log(num+num)
}

for(let num of arr){
    if (num%2==0){
        console.log(num)
    }
}

var data=arr.map(num=>num**2)
console.log(data)

var data=arr.map(num=>num**3)
console.log(data)

var dble=arr.map(num=>num+num)
console.log(dble)

var data=arr.filter(num=>num%2==0)
console.log(data)