const users = [
    {name: "Peter Akaliro", score: 95.9, gender: "male"},
    {name: "Steve Jobbs", score: 50.2, gender: "male"},
    {name:"Emeka Wonder", score: 49.7, gender: "male"},
    {name: "Jane Doe", score: 12.5, gender: "female"},
];
const filteredUsers = users.filter((users) => {return users.score >= 30
});
console.log(filteredUsers);
const passedUsers = users.filter((users) => {return users.score >= 50});
console.log(passedUsers);
const array = ["ossai", "david", "eti","precious"]

const object = {name: "ossai", age: 23, complexion: "darker"}
// console.log(object)
// console.log(array[0]);

for(i=0; i<array.length; i++){
    if(array.length>object.length){
        i=1
        console.log(i);
    }
    else{
        console.log("does not meet requirement");
    }
    console.log(array[i]);
}

    
// var Even = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// var Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] 


// const ascending = Even + Odd ;
// ascending.sort();
// console.log(ascending);


// function mergeArrays(arr1,  arr2 , n1 , n2,  arr3) {
//     var i = 0, j = 0, k = 0;

//     // Traverse both array
//     while (i < n1 && j < n2) {
//         // Check if current element of first
//         // array is smaller than current element
//         // of second array. If yes, store first
//         // array element and increment first array
//         // index. Otherwise do same with second array
//         if (arr1[i] < arr2[j])
//             arr3[k++] = arr1[i++];
//         else
//             arr3[k++] = arr2[j++];
//     }

//     // Store remaining elements of first array
//     while (i < n1)
//         arr3[k++] = arr1[i++];

//     // Store remaining elements of second array
//     while (j < n2)
//         arr3[k++] = arr2[j++];
// }

 
//     var arr1 = [ 1, 3, 5, 7 ];
//     var n1 = arr1.length;

//     var arr2 = [ 2, 4, 6, 8 ];
//     var n2 = arr2.length;

//     var arr3 = Array(n1 + n2).fill(0);

//     mergeArrays(arr1, arr2, n1, n2, arr3);

//     document.write("Array after merging<br/>");
//     for (i = 0; i < n1 + n2; i++)
//         document.write(arr3[i] + " ");

// This code contributed by Rajput-Ji