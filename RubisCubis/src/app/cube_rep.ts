/* 
The cube is going to be represented as 6 64 bit integers. 

Each 64 bit integer referring to a face

Each byte (8 bits) within an integer referring to an index

Starting from the top left of a face, the indices go 0-7 clockwise 
These indices are mapped on the 64 bit integers going right to left (The least significant byte is index 0 and most significant byte is index 7)

Each byte holds the color information for that specific face (refer to enum )

*/
enum Color {
    WHITE = 0,
    GREEN,
    RED,
    BLUE,
    ORANGE,
    YELLOW
}

