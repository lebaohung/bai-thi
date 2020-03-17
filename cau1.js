function findMax(arr) {
    return arr.reduce(function(item1, item2) {
        return item1 > item2 ? item1 : item2;
    })
}