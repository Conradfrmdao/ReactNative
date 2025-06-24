// Arrays

let animals = ["Cow", "Goat", "Sheep"]
console.log(animals)

var fruits = new Array("Mango", "Orange", "Jackfruit", "Lemon")
console.log(fruits)

var students = new Array(10)

// assigning values

// Syntax: arrayName[index] = value

students[0] = "Levi"
students[1] = "Samuel"
students[3] = "Francis"
console.log(students)

let data = ["Amon", 100, 500, "Peter", true]
console.log(data)
console.log(typeof data[1])
console.log("Element at index 2", data[2])

data[0] = "Simon"
console.log("Latest array data =>", data)
console.log("Data length", data.length);

// push - insert a new element at the end of the array
data.push("William")

const arr1 = data // original array
const arr2= data.splice(2, 30, "John", "Isaac") // array after splicing

console.log("arr1", arr1)
arr1.shift()
console.log("arr1 after the shift()", arr1)


arr1.pop();
console.log("Updated arr1 after poping", arr1)

// console.log("arr2", arr2)

const arr = [10, 35, 25, 50]
const slicedArr = arr.slice(1, 3)
console.log(slicedArr);

let con_arr = slicedArr.concat([65, 11, 3, 80])
console.log(con_arr)

let un_sorted_names = ["William", "Carol", "James", "Borad", "Zipporah", "Aaron"]
let sorted_names = un_sorted_names.sort()
console.log("Sorted names is", sorted_names)
console.log("Reversed names", un_sorted_names.reverse())

console.log(`Index of 45 in the array is ${con_arr.indexOf(45)}`)

let nums = [65, 11, 3, 80]
nums.sort((x, y) => x -y)
console.log(nums)

let numbers  = [1,2,3,4,5]
// let square_numbers = numbers.map((number) => {
//     return number*number
// })

let square_numbers = numbers.map(function(number){
    return number*number
})

console.log(square_numbers)

let sum = numbers.reduce((x, v) => x+v, 0)
console.log({ sum })

let product = numbers.reduce((x, v) => x*v, 1)
console.log({ product })