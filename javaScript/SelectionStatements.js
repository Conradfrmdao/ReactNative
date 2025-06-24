/*
   selection statements - decision making statements
   
   - if statement
   - if else statement
   - else if statements
   - Conditional ternary operator
   - switch statement
 */


// if statement
/*
  if(condition){
    // statement(s)
  }
 */

let num = -5
if(num >= 0){
    console.log(num + " is a positive number");
}

/*
  if else statement - 2 branches
   - it will execute one branch if the condition is true and another branch if condition is false
     if(condition){
       // statement(s)
      } else {
       statements(s)
     }
 */

let age = 15
if(age >= 18){
    console.log("A person of "+age+" years is old")
} else{
    console.log("A person who is "+ age + " years is young")
}

/*
  if else if statements - important when you've multiple conditions
  if(condition){
    // statement(s)
  }else if(condition){
    // statement(s)
  } else if(condition){
    // statement(s)
  }else{
    // statement(s)
  }
 */

let discount
let _age = 12

if(_age <= 8){
    discount = 18
} else if(_age <= 15){
    discount = 12
} else if(_age <= 25){
    discount = 10
} else if(_age <= 35){
    discount = 5
} else {
    discount = 0
}

console.log("We offer a discount of "+discount+"% if a person is "+_age+" years")

/*
  ternary operator - simplifies the if else statement

syntax:    condition ? statement if condition is true : statement if condition is false

 */

let stmt = _age >= 18 ? "You are eligible to vote" : "You are not eligible to vote"
console.log(stmt)

// let _discount
// if(_age >= 18){
//     _discount = 5
// }else{
//     _discount = 15
// }

let _discount = _age >= 18 ? 5 : 15
console.log("The offered discount is",_discount)

/*
switch statement

 switch(expression){
    case 1:
      statement(s)
      break;
    case 2:
     statement(s)
     break;
     .
     .
     .
    case n:
      statement(s)
      break;
    default:
      statement(s)
      break;
   }

 */

let m = 9;
let n = 4;
let op = '/';

switch(op){
    case '+':
        console.log(`${m} + ${n} = ${m+n}`)
        break;
    case '-':
        console.log(`${m} - ${n} = ${m-n}`)
        break;
    case '*':
        console.log(`${m} * ${n} = ${m*n}`)
        break;
    case '/':
        console.log(`${m} / ${n} = ${m/n}`)
        break;
    default:
        console.log("Unknown operation")
        break;
}