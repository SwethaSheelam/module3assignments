 function sum(a,b){
    console.log(a+b) 
        
 }
 function mult(a,b){
    console.log(a*b) 
        

 }
 //console.log(process)
 let operation=process.argv[2];
 let num1= process.argv[3];
 let num2= process.argv[4];
 if(operation=="mult"){
    mult(num1,num2)

 }else if(operation=="sum"){
    sum(Number(num1),Number(num2))
 }
 else{
    console.log("No operation found")
 }

