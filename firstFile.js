//comment
console.log("hello World");
 let a=4;
 let b=6;

 console.log("a + b =", a+b);

 alert("be aware");
let reply= prompt("Check if your number is a multiple of 5");
if (reply % 5 == 0){
    console.log('yes');
}else{
    console.log('no');
}

let score = prompt("Enter score your here");
if(90<score && score<100){
    console.log("A");
}else if(70<score && score<89){
    console.log("B");
}else if(60<score && score<79){
    console.log("C");
}else if(50<score && score<59){
    console.log("D");
}else if(49>score){
    console.log("F");
}else{
    console.log("Invalid");
}
