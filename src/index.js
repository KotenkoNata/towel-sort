// module.exports =
    function towelSort (matrix) {
        let result = [];

        if(matrix.length === 0){
            return []
        }else if(!matrix){
            return []
        }

    for (let i = 0; i <= matrix.length-1; i++){
        if( i % 2 === 0){
            result = result.concat(matrix[i]);
        }else{
            for (let k=matrix[i].length-1; k >= 0; k--){
                result.push(matrix[i][k])
            }
        }




    }
  return result;
}


console.log(towelSort([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ]));

//[ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13 ]
