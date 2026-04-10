function Calc(len,width,height)
{
    return len*width*height;
}

const vals = [15,15,15];
/*
let volume = Calc(vals[0],vals[1],vals[2]);
*/

const volume = Calc(...vals); // Spread Operator sends all values in the array at once.

console.log("Volume of the box is:",volume);

