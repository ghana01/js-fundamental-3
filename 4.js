function check(obj,propertyname){
    return obj.hasOwnProperty(propertyname);

}
const obj={
    1:"a",2:"B",3:"C",4:"D",
};
console.log(check(obj,"1"));
console.log(check(obj,"5"));