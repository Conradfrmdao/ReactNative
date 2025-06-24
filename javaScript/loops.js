//while

let x=0
while(x<=10){
    console.log(x)
    x++
}
//array with do while
let animals=["pig","goat","cow","hen"]
let y=0

do {
    console.log(animals[y])
    y++
} while (y<animals.length);

//do while square numbers
let numbers=[1,2,3,4,5,6,7,8,9,10]
let square_numbers=[]
let i=0;
do {
    
square_numbers.push(numbers[i]*numbers[i])
    i++
} while (i<numbers.length);
console.log(square_numbers)

//for loop
const obj=[
    { id:"1",
      studentNo:"ISB1000" ,
      regNo:"R20001",
      name:"Ainembabazi Derrick",
      program:"Computer Science",
      dateOfBirth:"1999-12-10"
    },
    { id:"2",
      studentNo:"ISB1001" ,
      regNo:"R20002",
      name:"Okot Albertson ",
      program:"Computer Engineering",
      dateOfBirth:"2000-12-10"
    },
    { id:"3",
      studentNo:"ISB1002" ,
      regNo:"R20003",
      name:"Titus Migade",
      program:"Software Engineering",
      dateOfBirth:"2005-12-12"
    }

]
//data extraction
for (let i = 0; i< obj.length; i++) {
    console.log(obj[i].name+` program: `+obj[i].program +`date of birth: `+obj[i].dateOfBirth)
    
}

  console.log(obj[1].name) //single item from objects array

  