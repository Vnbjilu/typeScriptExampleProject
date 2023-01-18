function Greet(name:string){
    console.log(` Hello Mr. ${name}`); 

}
const greetUser=function(name:string){
   console.log( ` Hello Mr. ${name} !`);
}

const GreetUserArrow=(name:string)=>console.log(` Hello Mr.  ${name}! using Arrow Functon`);
Greet("vikas Srivastava");
greetUser("Ratan Srivastava");
GreetUserArrow("Raman Srivastava");

//Arrow Function using accesssing of Array functions
const Edibles=[
    {
        edible:'🍕',
        isVegan:false
    },
    {
        edible:'🍔',
        isVegan:false
    },
    {
        edible:'🍟',
        isVegan:true
    },
    {
        edible:'🍝',
        isVegan:true
    },
    {
        edible:'🌽',
        isVegan:true
    }

];

console.log(Edibles.filter(function(item){
    return ! item.isVegan;
}));

//using Arrow Function 

console.log(Edibles.filter((item)=> item.isVegan));
