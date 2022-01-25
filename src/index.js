module.exports = function towelSort (matrix) {
        let result = [];

        if(!matrix){
            return []
        }

    for (let i = 0; i <= matrix.length-1; i++){
        for(let j = 0; j< matrix[i].length;j++) {
            let column = i % 2 === 0
            ? j
            : (matrix[i].length - j - 1);

            result.push(matrix[i][column]);
        }

        }
  return result;
}


// console.log(towelSort([
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ]));//[ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13 ]

// console.log(towelSort([[1, 2],
//     [3, 4]]))//[ 1, 2, 4, 3 ]
// console.log(towelSort([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]))//[ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13 ]

// console.log(towelSort()); ///[]

// console.log(towelSort([]))///[]
