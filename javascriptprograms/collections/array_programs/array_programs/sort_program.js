var arr=[8,6,2,7,3]

for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){

    if(arr[i]>arr[j]){
        var temp=arr[i]
        arr[i]=arr[j];
        arr[j]=temp;
    }
}

}

console.log(arr)