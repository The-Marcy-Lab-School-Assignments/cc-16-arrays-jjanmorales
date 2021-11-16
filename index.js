//write your code here
// Declare a function named ‘replaceWithYerr’ 
// Accepts an array, start index, number of elements to replace w string ‘yerr’ 
// Return a new array w same elements as original array, starting index are replaced w yerr, it’ll replace however much is that number in third argument , 
// If third argument is missing, replace everything with ‘yerr’
// If only an array is passed, replace all items with ‘yerr’ 

// Declare function ‘replaceWithYerr’
// Arguments: array, start, num
// Initialize an empty newArr
// Iterate through array
// Push that array into the new array 
// Use splice method to replace yerr values


// const replaceWithYerr = (months, start = 0, num = months.length-1) => {
//     let newArr = [];
//   for(let i in months){
//       if(i >= start && i < start+num){
//           newArr.push("yerr")
//       }else{
//           newArr.push(months[i])
//       }
//   }
//     return newArr;
// };



const replaceWithYerr = (months, start = 0, num = months.length) => {
    let newArr = [];
   for(let i in months){
       if(i >= start && i < start+num){
           newArr.push("yerr")
       }else{
           newArr.push(months[i])
       }
   }
    return newArr;
};

const months = ["Jan", "Feb", "March", "April", "May", "June"]
console.log(replaceWithYerr(months));