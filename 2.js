const student={
    name:"sahil",
    age:19,
    grade:"B",
};
let val=Object.defineProperties(student,{
    grade:{
        value:"A",
    }
})
console.log(student);