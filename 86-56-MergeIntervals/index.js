const merge = function(intervals){
    const start = 0;
    const end = 1;
    intervals = intervals.sort((a,b) => a[start] - b[start]);


    let previous = intervals[0];
    const result = [previous];

    for(let i = 1; i < intervals.length; i++){
        let current = intervals[i];
        if(current[start] <= previous[end]){
            previous[end] = Math.max(previous[end], current[end]);
        }else {
            result.push(current);
            previous = current;
        }
    }
    return result;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
