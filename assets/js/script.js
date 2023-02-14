//Task 1 function
function Check(num){
    let result=(num%21==0)?`Bolunur`:`Bolunmur`;
    return result
}
let number=parseInt(prompt());
console.log(Check(33));

//Task1 arrow function
let check=(num)=>{
    let result=num%21==0?num/21 : `bolunmur`
    console.log(result);
}
let num=parseInt(prompt());
check(num);