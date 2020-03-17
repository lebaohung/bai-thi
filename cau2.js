function tryRemoveFromArray(arr, int) {
    return arr.map(function (item) {
        if(item !== int) return item;
    })
}