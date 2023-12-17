const simplifyPath = function(path){
    let stack = [];
    path = path.split("/");

    for(let i = 0 ; i < path.length; i++){
        if(path[i] === "" | path[i] === "."){
            continue;
        }else if(path[i] === ".."){
            stack.pop();
        }else {
            stack.push(path[i])
        }
    }
    return "/" + stack.join("/");
}

console.log(simplifyPath("/home/"))
console.log(simplifyPath("/home/../test/.//ourFolder"))
console.log(simplifyPath("/home/./test/../"))
