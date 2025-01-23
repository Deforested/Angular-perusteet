function arraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(arraySum([5, 5, 1, 3]));
