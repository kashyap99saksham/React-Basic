// When we pass any function to other function as an argument then the passed function is known as Callback function
function Abc(a)
{
    console.log("Abc Function Called" + a)
}
function Def(Callback)
{
    var a = 10;
    Callback(a);
}
Def(Abc)    

// -----------------------Other way to write the same thing
function Def(Callback)
{
    var a = 10
    Callback(a)
}
Def(a => console.log("I am anonymus arrow function passing to Def function " + a))