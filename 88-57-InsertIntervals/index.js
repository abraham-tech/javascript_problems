const insert = function (intervals, newInterval) {
    let i = 0;
    let result = [];

    const start = 0;
    const end = 1;

    while (i < intervals.length && intervals[i][end] < newInterval[start]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
        newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
        i++;
    }
    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    return result;
}

console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
