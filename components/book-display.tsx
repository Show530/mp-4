"use client";
// use client is important! add on top of use state files in mp-4
import {BookProps} from "@/types";
import {useState} from "react";
import BookPreview from "./book-preview"

export default function BookDisplay({inputBooks,}: { inputBooks: BookProps[]; }) {
    const [books, setBooks] = useState(inputBooks);

    return(
        <div className="flex flex-col items-center">
            {books.map((b) => (
                // must have a key for mapping
                <BookPreview key={b.id} book={b} />
            ))}
        </div>
    );
}