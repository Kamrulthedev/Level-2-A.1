{
    //Problem-6
    type Book = {
        title: string;
        author: string;
        publishedYear: number;
    };
    function isRecentBook(book: Book): boolean {
        const currentYear = new Date().getFullYear();
        console.log(currentYear);
        const yearDifference = currentYear - book.publishedYear;
        console.log(yearDifference)

        return yearDifference <= 5;
    };
    //create a book
    const book1: Book = {
        title: 'Python DEv',
        author: 'K Developer',
        publishedYear: 2023
    };
    //call the function
    const result = isRecentBook(book1);
    console.log(result)


    //
}