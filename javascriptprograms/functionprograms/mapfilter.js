var arr=[1,2,33,34,35]
var squ=arr.map(num=>num**2)
var even=arr.filter(num=>num%2==0)



var maxs=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(maxs)

var mins=arr.reduce((no1,no2)=>no1<no2?no1:no2)
console.log(mins)

var sum=arr.reduce((no1,no2)=>no1+no2)
console.log(sum)

var srt=arr.sort((no1,no2)=>no2-no1)
console.log(srt)

var srt=arr.sort((no1,no2)=>no1-no2)
console.log(srt)