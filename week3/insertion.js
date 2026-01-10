let a = [13, 25, 10, 99, 78, 45, 25,15];//arr[0] is always sorted
function insertionSort(a) {
    for (let i = 1; i < a.length; i++) {//its start from 1 because 
                                        //we already assume that Left side is already sorted
        let key = a[i];//Stores the current element to be inserted into the sorted part.
                    
        let j = i - 1;//Points to the last element of the sorted portion.
                        //Left side (0 → i-1) is sorted
                        //We compare key with sorted elements from right to left

        while (j >= 0 && a[j] >= key) {//Keeps shifting elements until the correct position is found.
            a[j + 1] = a[j];
            j--;//Moves left in the sorted portion.
        }
        a[j + 1] = key;
    }
    return a;
}
console.log(insertionSort(a));

//to check we optimized the insertion sort
//which iit find new sorting technique
let b=[1,2,2,3,3,3,5,5,7,8,11,13,13]