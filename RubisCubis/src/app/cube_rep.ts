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
  YELLOW,
}
// return cube in it's starting postion (all faces have homogenous colors)
//used some bit magic to  repeat the same value in every byte slot ;)
export function initCube(): BigInt64Array {
  let cube: BigInt64Array = new BigInt64Array(6);

  for (let i = 0; i < 6; i++) {
    // corresponds to color ordering
    cube[i] = BigInt(i & 0xff) * 0x0101010101010101n;
  }
  return cube;
}
function printFace(face: bigint) {
  let logBuffer = "";
  for (let i = 7; i >= 0; i--) {
    let byte_value = (face >> BigInt(i * 8)) & 0xffn; // shifts the byte to rightmost byte then isolates to get the ith bytes value
    let char = "W";
    switch (byte_value) {
      case 1n:
        char = "G";
        break;
      case 2n:
        char = "R";
        break;
      case 3n:
        char = "B";
        break;
      case 4n:
        char = "O";
        break;
      case 5n:
        char = "Y";
        break;
    }
    logBuffer += char;
  }
  console.log(logBuffer);
}
export function printCube(cube: BigInt64Array) {
  // print white
  for (let i = 0; i < 6; i++) {
    printFace(cube[i]);
  }
}

// ASSUMING THE CUBE IS LOCKED WITH RED IN FRONT, WHITE TOP, YELLOW BOTTOM, BLUE RIGHT , GREEN LEFT , ORANGE BACK
export function f(cube: BigInt64Array) {}
export function u(cube: BigInt64Array) {}
