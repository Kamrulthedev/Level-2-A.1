{
    //Prolem-7

    const logString = (UnStr: unknown): string => {
        if (typeof UnStr === 'string') {
            return (UnStr)
        }else{
            return('Input is not a string.')
        }
    }
     const result = logString("Hello, TypeScript!");
    console.log(result);


    //
}