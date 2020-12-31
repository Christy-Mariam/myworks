var employee={
    eid:100,
    name:"don",
    exp:2,
    salary:15000
}

console.log(employee.name)

for(let emp in employee){
    console.log(emp+","+employee[emp])
}

console.log("gender" in employee)

employee["gender"]="male"
console.log(employee)


employee["salary"]+=5000
console.log(employee)


