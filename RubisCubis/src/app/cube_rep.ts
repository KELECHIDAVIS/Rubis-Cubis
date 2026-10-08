/* 
The cube is going to be represented as 6 64 bit integers. 

Each 64 bit integer referring to a face

Each byte (8 bits) within an integer referring to an index

Starting from the top left of a face, the indices go 0-7 clockwise 
These indices are mapped on the 64 bit integers going right to left (The least significant byte is index 0 and most significant byte is index 7)

Each byte holds the color information for that specific face (refer to enum )

*/
export enum Color {
    WHITE = 0,
    GREEN,
    RED,
    BLUE,
    ORANGE,
    YELLOW
}
// return cube in it's starting postion (all faces have homogenous colors)
//used some bit magic to  repeat the same value in every byte slot ;)
export function initCube () : BigInt64Array{
    let cube: BigInt64Array = new BigInt64Array(6) ; 
    
    for (let i = 0 ; i<6 ; i++ ){ // corresponds to color ordering 
        cube[i] = BigInt(i & 0xff) * 0x0101010101010101n;
    }
    return cube ; 
}
function printFace (face:BigInt){
    
}
export function printCube(cube:BigInt64Array){
    // print white 
    for (let i = 0 ; i<3; i++){
        console.log("    ")
        for (let j = 0 ; j< 3; j++){

        }
    }
}

// ASSUMING THE CUBE IS LOCKED WITH RED IN FRONT, WHITE TOP, YELLOW BOTTOM, BLUE RIGHT , GREEN LEFT , ORANGE BACK
export function f(cube : BigInt64Array){

}
export function u (cube: BigInt64Array){

}
