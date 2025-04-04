import getYearBooks from "@/lib/get-year-books";
import BookDisplay from "@/components/book-display"

export default async function YearBooks({params,}: {
    params: Promise<{ year: string }>
}) {
    const {year} = await params;
    const inputBooks = await getYearBooks(year);

    return (
        <>
            <main>
                <div className="flex flex-col items-center bg-blue-200 p-4">
                    <h2 className="text-3xl">Books from {year}!</h2>
                    {inputBooks != null? <BookDisplay inputBooks={inputBooks}/>: <h1>No data found, sorry!</h1> }
                </div>
            </main>
        </>
    );
}
