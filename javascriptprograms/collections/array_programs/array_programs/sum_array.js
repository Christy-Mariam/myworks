let arr=[3,4,6]

var total=0;
for(let num of arr){
    total+=num;

}
console.log(total)

var res=[]
for(let num of arr){
    let item=total-num;
    res.push(item)
}
console.log(res)