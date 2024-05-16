{
    //Problem-8
    class Car {
        brand: string;
        model: string;
        year: number;
        constructor(brand: string, model: string, year: number) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        //create method
        GetCar() :void {
            console.log(`Your car model is: ${this.year} ${this.model} ${this.brand}`)
        }
    };
    //call the function
    const result = new Car('Corolla', 'Toyota', 2020);
    result.GetCar();



    //
}