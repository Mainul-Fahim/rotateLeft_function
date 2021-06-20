function rotateLeft(n,d,arr){
                              //Here, n denotes array size, d amount to rotate by  and arr is the array
    const rest = arr.slice(d);       
    console.log(rest);
    const first = arr.slice(0,d);
    console.log(first);
    const rotated = rest.concat(first);

    return rotated;
}


const arr = [1,2,3,4,5];

const output = rotateLeft(5,4,arr);

console.log(output);