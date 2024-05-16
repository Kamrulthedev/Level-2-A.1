{
    //PRoblem-5

    interface Student {
        name: string;
        age: number;
        grades: number[];
    };

    function calculateAverageGrade(Stud: Student): number {
        const { grades } = Stud;

        if (grades.length === 0) {
            throw new Error('This Number is not valid')
        }
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i]
        }
        const averageN = sum / grades.length;
        return averageN;
    };

    //call the function
    const STU1: Student = {
        name: 'Hassan',
        age: 19,
        grades: [77, 88, 87, 67]
    };

    const result = calculateAverageGrade(STU1);
    console.log(result);


    //
}