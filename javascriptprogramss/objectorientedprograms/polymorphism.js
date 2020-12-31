class MathsPg{

    add(){
        console.log("no arg method")
    }

    add(num1){
        console.log("one arg method")
    }

    add(num1,num2){
        console.log("two arg method")
    }
}

var m=new MathsPg()
m.add(10,20)
m.add(10)
m.add()