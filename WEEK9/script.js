function createCounter() {
 let count = 0;
 return function() {
 count++;
 return count;
 };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
// IIFE
const myModule = (function() {
 let privateVariable = 'I am private';
 return {
 getPrivateVariable: function() {
 return privateVariable;
 }
 };
})();
console.log(myModule.getPrivateVariable());
console.log(myModule.privateVariable);
// SCOPE
var x = 10;
function outerFunction() {
 var x = 20;
 function innerFunction() {
 console.log(x);
 }
 innerFunction();
}
outerFunction();
