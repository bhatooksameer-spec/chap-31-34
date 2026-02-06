//ans no 1
// function date(){
//     document.writeln(new Date())
// }
// date()

//ans no 2
// function username(){
//     var firstName = prompt("Enter Your First name").toUpperCase()
//     var lastName = prompt("Enter Your Last name").toUpperCase()
//     var greet =  firstName + ' ' + lastName
//     alert("Welcome : "+greet)
// }
// username()

//ans no 3
// function add(){
//     var num1 = +prompt("Enter Value")
//     var num2 = +prompt("Enter second Value")
//     var addition = num1 + num2
//     document.writeln(addition)
// }
// add()

//ans no 4
// function calculator(){
//     var num1 = +prompt("Enter Value")
//     var num2 = +prompt("Enter second Value")
//     var op = prompt('Enter operator')
//     if(op == '+'){
//         document.writeln(`
//             <h2>Your First Value Is : '${num1}'<br>Your Second Value Is : '${num2}'<br>Your Selected Operator Is : '${op}'<br>Your Addition Result Is : '${num1 + num2}'</h2>
//             `)
//     }
//     else if(op == '-'){
//         document.writeln(`
//             <h2>Your First Value Is : '${num1}'<br>Your Second Value Is : '${num2}'<br>Your Selected Operator Is : '${op}'<br>Your Subreaction Result Is : '${num1 - num2}<'/h2>
//             `)
//     }
//     else if(op == '*'){
//         document.writeln(`
//             <h2>Your First Value Is : '${num1}'<br>Your Second Value Is : '${num2}'<br>Your Selected Operator Is : '${op}'<br>Your Multiplication Result Is : '${num1 * num2}'</h2>
//             `)
//     }
//     else if(op == '/'){
//         document.writeln(`
//             <h2>Your First Value Is : ${num1}'<br>Your Second Value Is : '${num2}'<br>Your Selected Operator Is : '${op}'<br>Your Division Result Is : '${num1 / num2}'</h2>
//             `)
//     }
//     else if(op == '%'){
//         document.writeln(`
//             <h2>Your First Value Is : '${num1}'<br>Your Second Value Is : '${num2}'<br>Your Selected Operator Is : '${op}'<br>Your Modulus Result OR Reminder Is : '${num1 % num2}'</h2>
//             `)
//     }
//     else (
//         alert("This Operator Is Incorrect ! Please enter correct operator")
//     )
// }
// calculator()

//ans no 5
// function Square(){
// var sqvalue = parseInt(prompt('Enter Value'));
// var square = sqvalue*sqvalue;
//     document.writeln(`Your Square Of Given Value Is ${square}`)
// }
// Square()

//ans no 6
// function factorial(){
// var num1 = +prompt('Enter value')
// var result = 1 ;
// for(var i=1;i<=num1;i++){
//     result *= i;
// }
// document.writeln(result)    
// }
// factorial()

//ans no 7
// function counting(){
// var num1 = +prompt('Enter start value')
// var num2 = +prompt('Enter end value')
// for(var i=num1;i<=num2;i++){
//     document.writeln(i+"<br>")
// }
// }
// counting()

//ans no 8
// function hypotanious(){
//     var base = +prompt("Enter base value")
//     var perpendicular = +prompt("Enter perpendicular value")
//     function square(){
//         var base2 = base*base
//         var perpendicular2 = perpendicular*perpendicular
//         var result = base2 + perpendicular2;
//         document.writeln("Your Hypotanious Value Is : "+result)
//     }
//     square()
// }
// hypotanious()

//ans no 9
// function areaOfRectangle(width , height){
    // return width* height
// }
// var w =+prompt("Enter value of width") 
// var h =+prompt("Enter value of height") 
// var getValue = areaOfRectangle(+prompt('Enter value of width') ,+prompt("Enter value of height"))
// var getValue = areaOfRectangle(w , h)
// document.writeln(getValue)

//ans no 10
// function palindrome() {
//     var word = prompt("Enter any word to check palindrome");
//     var check = "";

//     for (var i = word.length - 1; i >= 0; i--) {
//         check += word[i];
//     }

//     if (check === word) {
//         document.writeln("<h2>WORD IS PALINDROME</h2>");
//     } else {
//         document.writeln("<h2>WORD IS NOT PALINDROME</h2>");
//     }
// }

// palindrome();

//ans no 11
