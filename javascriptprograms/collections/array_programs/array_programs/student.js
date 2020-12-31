var students=[
    [1,"st1","mca",142],
    [2,"st2","mca",145],
    [3,"st3","bca",145],
    [4,"st4","bca",135],
]

for(let student of students){
    console.log(student[1])  
}

var cnt=0;
for(let student of students){
    if(student[2]=='mca'){
    cnt++;
      
    }
}
console.log("number of students in mca" + cnt)

var tot=0;
for(let student of students){
    if(student[2]=='bca'){
    tot=tot+student[3];
      
    }
}
console.log("number of students in bca" + tot)


