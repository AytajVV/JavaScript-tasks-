//Task 1 function
//Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
function Check(num){
    let result=(num%21==0)?`Bolunur`:`Bolunmur`;
    return result
}
//let number=parseInt(prompt());
console.log(Check(number));





//Task 1 arrow function
//Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
let check=(num)=>{
    let result=num%21==0?num/21 : `bolunmur`
    console.log(result);
}
let num=parseInt(prompt());
check(num);





//Task 2
// Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 
function Factorial(num){
    let result = 1;;
    for (let i = 0; i <= num; i++) {
        result*=i;
    }
    return result;
}
//let number=parseInt(prompt());
console.log(Factorial(number));





//Task 2 arrow function
//Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 
let Factorial=(num)=>{
    let result = 1;
    for (let index = 1; index <= num; index++) {
        result*=index;
        
    }
    return result;
}
let number = parseInt(prompt());
console.log(Factorial(5));





//Task 3  
//Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
function Calculate(){
    let arr = Array.from(arguments)
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]%2==0) {
            sum+=arr[index]**2;
        }
    }
    console.log(sum);
}
Calculate(2,3,4,5,6,2);





//Task 4 
//Funtiona-a  mail ve password gelir. Mail beraberdirse lorem@code.edu.az -a ve password beraberdirse 12345 -e, 
//ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 
function Check(mail, password){
    let result=(mail==`lorem@code.edu.az` && password==`12345`)?`Access successful`:`Incorrect mail or password`;
    return result;
}
console.log(Check(`lorem@code.edu.az`, `12345`));





//Task 5 
//Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
function SumOddNum(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]%2==1) {
            sum+=arr[index];
        }
    }
    return sum;
}
let array=[2,3,4,5];
console.log(SumOddNum(array));





//Task 6  
//Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.
function CountEvenNum(array){
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index]%2==0) {
            count++;
        }
    }
    console.log(count);
}
let arr = [2,3,4,5,6,7,8];
CountEvenNum(arr);