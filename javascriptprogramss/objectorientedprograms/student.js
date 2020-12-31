class Student{

    constructor(rol,name,course){
        this.rol=rol;
        this.name=name;
        this.course=course;
    }

    printStudent=()=>{
        console.log("names="+this.name)
        console.log("rol="+this.rol)
        console.log("course="+this.course)
    }

}

let obj= new Student((100,"ajay","mca"))

obj.printStudent()

