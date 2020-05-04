// I M TOTALLY CONFUSED ABOUT INDEX PASSING CONCEPT IN MAP FUNCTION [MUST SOLVE THIS AND UPDATE HERE.....]
// Map function provides new array with the result of calling a provided function on every element in the calling array
// Map calls a provided callback function
// Why MAp function:::: What is the use??
// basically when we want to make some change in every element of array then the basic concept is to iterate the whole array
// using for-loops but here is a new feauture in js called as Map...
// so map take a callback function as an argument and return every changed element of that array..... 

var arr = [10,20,30,40,50]
var newArr = arr.map(value => value+1)          

// Basically We are passing a callback function (arrow,annonymus fuction) to map and map call the every element and passing that element to value

// WE can use both value and index at same time
    var newArr = arr.map((val,indx) => val+1)


