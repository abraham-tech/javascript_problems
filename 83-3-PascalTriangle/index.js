function pascalTriangle(numRows){
    let result = [];
    if(numRows >= 1) result.push([1]);
    if(numRows >= 2) result.push([1,1]);

    for(let i = 2; i < numRows; i++){
        let first = 1;
        let last = 1;

        let prevArray = result[i-1];

        if(prevArray.length ===2 ){
            result.push([1, 2, 1]);
        }else{
            let left = 0;
            let right = 1;
            let add = []
            while(right < prevArray.length){
                add.push(prevArray[left] + prevArray[right]);
                left++;
                right++;
            }
            result.push([first, ...add, last]);
        }
    }
    return result;
}

console.log(pascalTriangle(5));
