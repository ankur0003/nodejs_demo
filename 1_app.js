//GLOBALS - NO WINDOW
// __diirname   -   path to directory
// __filename   -   file name
// require      -   function to use modules (commonJS)
//  module      -   info about current module (file)
// process      -   info about env where the program is being executed

const sayHi  = (name) =>{
    console.log(`Hello there ${name}`);
}

const helloWorld =(number)=>{
    console.log(`Hello World ${number*number}`);
}

// sayHi('ankur');
module.exports = {sayHi,helloWorld}