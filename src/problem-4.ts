{
    //Problem-4
    
    function reverseArray<T>(Rearr: T[]): T[] {
        const reverseArr = [...Rearr];
        reverseArr.reverse()
        return reverseArr;
    };
    //call the function
    const result = reverseArray(["K", "H", "T", "E"]);
    console.log(result);

    const result1 = reverseArray([2, 3, 4, 5, 7, 8]);
    console.log(result1);
    //

}