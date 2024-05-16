{
    //Problem-2
    function findLargestNumber(LaNumber: number[]): number | undefined {
        if (LaNumber.length === 0) {
            return undefined;
        }
        return Math.max(...LaNumber)
    };
    //call the function
    const result = findLargestNumber([1, 3, 4, 6, 7, 10, 66]);
    const result1 = findLargestNumber([5, 6, 7, 8, 9, 99]);
    console.log(result1)
    console.log(result);

    //
}