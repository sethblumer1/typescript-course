let myName: string = 'Seth'
// Any data type; if not sure type of data that will be received
let album: any;

// Union type; variable can be multiple types
// Pretend API returns ID and we are not sure of type
let postId: string | number;
let isActive: number | boolean;

// Function example
const sum = (a: number, b: number) => {
    return a + b;
}