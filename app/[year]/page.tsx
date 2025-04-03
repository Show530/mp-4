import getYearBooks from "@/lib/get-year-books";
// import BookPreview from "@/components/book-preview";
import BookDisplay from "@/components/book-display"

export default async function YearBooks({params,}: {
    params: Promise<{ year: string }>
}) {
    const {year} = await params;
    const books = await getYearBooks();

    return (
        <>
            <main>
                <div className="flex flex-col items-center bg-blue-200 p-4">
                    <h2>{year}</h2>
                    <BookDisplay inputBooks={books}/>
                </div>
            </main>
        </>
    );
}
