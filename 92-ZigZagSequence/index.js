function findZigZagSequence(a, n) {
    a.sort((a, b) => a - b);
    var mid = Math.floor((n)/2);
    [a[mid], a[n-1]] = [a[n-1], a[mid]];

    var st = mid + 1;
    var ed = n - 2;
    while(st <= ed) {
        [a[st], a[ed]] = [a[ed], a[st]];
        st = st + 1;
        ed = ed - 1;
    }

    for(var i = 0; i < n; i++){
        console.log(a[i] + ' ');
    }
}

findZigZagSequence([7, 6, 5, 1, 2, 3, 4], 7);
