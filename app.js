// find common elements between both arrays
// set only stores unique values only once
const nums1 = [6,18, 28, 6, 1, 10, 18]; // 6, 18
const nums2 = [18, 22, 45, 9, ]; // 18
// Output: [2]


const intersection = (nums1, nums2)=>{
    // looking to get all the unique values from the first set
    let firstSet = new Set()

    // Iterate over the first array and add each num from nums1 into the first set
    for(let num of nums1){
        firstSet.add(num)
    };

    // collect the common elements from the array nums2
    let intersectionSet = new Set()
    for(let num of nums2){
        // check if the first set has the same number in our nums2 array
        if(firstSet.has(num)){
        intersectionSet.add(num)
    }
}
// return the array.from a set
return Array.from(intersectionSet)
}