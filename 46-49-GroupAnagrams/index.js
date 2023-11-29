const groupAnagrams = function(stars) {
    let sorted = stars.map(star => star.split("").sort().join(""));
    let mymap = {};
    sorted.forEach((star, i) => {
        if(!mymap[star]){
            mymap[star] = [stars[i]]
        }
        mymap[star].push(stars[i])
    });
    return Object.values(mymap);
}
console.log(groupAnagrams(["eat", "tea","tan","ate","nat","bat"]));
