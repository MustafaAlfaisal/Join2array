//decalre all needed variables and arrays
var array1 = ["a", "b", "c", "d"],
    array2 = [1, 2, 3, 4],
    result = [],
    i, l = Math.min(array1.length, array2.length);
// for loop to eterate through the two arrays and push each elemant
for ( i = 0; i < l; i++) {
    result.push(array1[i], array2[i]);
}
// add the new array for the 
result.push(...array1.slice(l), ...array2.slice(l));
// print the result to the console
console.log(result);