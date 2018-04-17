function isDivisible(){
    for(let i = 1; i < arguments.length; i++){
        arguments[0]/arguments[i];
    if(arguments[0] % arguments[i] === 0){
    return true
    } return false;
    }}

console.log(isDivisible(3,3,4));


/* different options to try
(3,3,4)
(12,3,4)
(8,3,4,2,5)

My issue is that it's returning true, but should be false. It's not looping past i=1
*/