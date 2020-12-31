var arr=[1,2,3,4,6]

arr=arr.sort((n1,n2)=>n1-n2)
var low=0;
var upp=arr.length-1;
var element=6;

while(low<upp){
    let tot=arr[low]+arr[upp];

    if (tot>element){
        upp=upp-1;
    }

    else if(tot<element){
        low=low+1;
    }

    else{
        console.log(arr[low]+","+arr[upp]);
        break;
    }
    

}