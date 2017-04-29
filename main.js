// Variables
// var number1='35';
// var number2='23';
// alert('My favorite number is ' + number1)
// Arrays
// var colors=["Red", "Orange", "Blue", "Pink"];
// alert(colors[1]);
// // OR
// var colors = new Array('red','blue','orange');
// alert(colors[2]);
// colors[4]="white";
// alert(colors);
// colors.push('purple');
// alert(colors[4]);
// Methods/properties of an Array
// var colors=['red','blue','white','green'];
// colors.push('orange');
// console.log(colors);
//
// var numbers=[92,34,56,09,1,45,60];
// alert(numbers[0] + numbers[4]);
//
// console.log(numbers.length);
// console.log(numbers.sort());
// console.log(numbers.reverse());
// Compare Function:
// console.log(numbers.sort(function(a,b){return a-b}));
// Loops:
// For loop:
// for (var i=3; i<=15; i+=3){
//   console.log(i);
// }
// while loop:
// Function practice
// reverse
// var numbers = [1,2,3,4,5,6,7,8,9,10]
// // for(var i=numbers.length; i>=0; i--){
// // console.log(numbers[i]);
// // }
// // Or
// numbers.reverse(function(a,b){return b-a});
// conditionals
// for( var i =2; i<=numbers.length; i++){
// if(numbers[i] % 2 ===0){
//   console.log('even');
// }else {
//   console.log('odd')
// }
// };
// function factorial(num){
// for (i=num-1; i>=2; i--){
// num *= i;
// }
// return num;
// }
// console.log(factorial(5));
// var fruit = 'grapes';
// switch (fruit){
//   case "banana":
//   alert('I hate bananas');
//   break;
//   case "apple":
//   alert('I am okay with apples');
//   break;
//   case "orange":
//   alert('I do not like oranges');
//   break;
//   default:
//   alert('I love all other fruits');
//   break;
// }
// Objects
// object literals
// var person = {
//   firstName: "Rubina",
//   lastName : "Satyal",
//   age      : 29,
//   siblings : ["Moushami", "Bhawana", "Archana"],
//   address  : {
//    street  : "123 Main St",
//    city    : "Denver",
//    state   : "Colorado"
//  },
//   fullName : function(){
//     return this.firstName +" " + this.lastName
//   }
// }
// // console.log(person.siblings[1]);
// // console.log(person.address.city);
// console.log(person.fullName());
// object constructor
// HARD WAY---NOT RECOMMENDED
// var apple = new Object();
// apple.color = "Red";
// apple.shape = "Round";
// apple.describe = function(){
//   return "An apple is the color " + this.color +" and is the shape " + this.shape;
// }
// // console.log(apple);
// console.log(apple.describe());
// RECOMMENDED
// function fruit(name, color, shape){
//   this.name = name;
//   this.color = color;
//   this.shape = shape;
//   this.describe = function(){
//     return 'A ' + this.name+ ' is the color '+ this.color+ ' and is the shape '+ this.shape;
//   }
// }
// // var apple = new fruit("apple", "red", "round");
// var melon = new fruit("melon", "green", "round")
// // console.log(apple);
// // console.log(melon);
// console.log(melon.describe());
// var users =[
//   {
//     name: 'Megan smith',
//     age : 32
//   },
//   {
//     name: "John Doe",
//     age : 22
//   },
//   {
//     name: "Anthony peters",
//     age: 56
//   }
// ];
//
// console.log(users[0].name)
// EVENTS
// function doClick(){
//   alert ('You clicked');
// }
// function changeText(id){
//   id.innerHTML = 'you clicked';
// }
// function changeText(){
//
//   var heading = document.getElementById('heading');
//   heading.innerHTML = "you clicked!";
// }
function showDate(){
var time =  document.getElementById('time')
time.innerHTML = Date();
}
// FORMS
