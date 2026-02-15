// if else statements
let age=14;
let text="You cannot vote";
if (age>=18){
    let text="You can vote";
    console.log(text);  // print you cannot vote
}
else{
    console.log(text);
}
// nested if statements
let num=75;
if (num>0){
    if (num%2==0){
        console.log("the number is even");
    }
    else{
        console.log("the number is odd");//this will be printed
    }
}
// now if else if statements
let time=30;
if (time<10){
    console.log("Good morning");
}
else if (time<20){
    console.log("Good Afternoon")
}
else{
    console.log("Good evening");// this will be printed
}


// terinary operator
let marks=85;
let result=(marks>=50)?"pass":"fail";
console.log(result);// output is pass


// switch statement
let day=5;
switch(day){
    case 0:
    console.log("Sunday");
    break;
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");// this will be printed
    break;
case 6:
    console.log("Saturday");
    break;
default:
    console.log("Invalid day you selected");
}
///********************************************************************************************* */


// loops 
// for loop
let sum=0;
for(let i=0;i<5;i++){
    sum+=i;
    
}
console.log(sum);// 10
// break in for loop
for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(i);// her e it will print 0,1,2,3,4
}
// another exmple
const cars=["BMW","Volvo","Alto","Ford"];
let len=cars.length;
let res="";
for( let i=0;i<len;i++)
{
    res+=cars[i]+" ";
    console.log(res);  // it prints o/p at every iteration
}
// while loop
let i=0;
let sum1=0;
while(i<5){
    sum1+=i;
    i++;
}
console.log(sum1);  // 10
// break in while loop
let h=0;
while(h<10){
    if(h==5){
        break;
    }
    console.log(h);// prints 0,1,2,3,4
    h++;
}
//another example
let j=0;
let res1="";
while(j<len){
    res1+=cars[j]+" ";
    j++;
}
console.log(res1);// print all the cars in one line

