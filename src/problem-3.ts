{
    //Problem-3
    function filterEvenNumbers(FilterNumber: number[]): number[] {
        const enentNum: number[] = [];
        FilterNumber.forEach(num => {
            if (num % 2 === 0) {
                enentNum.push(num)
            }
        });
        return enentNum;
    };
    //call the function
    const result = filterEvenNumbers([5, 7, 9, 19, 2, 6, 10, 54]);
    console.log(result);
    //
}