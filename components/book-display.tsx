"use client";
// use client is important! add on top of use state files in mp-4
import {NewBookProps} from "@/new-types";
import {useState} from "react";
import BookPreview from "./book-preview"

export default function BookDisplay({inputBooks,}: { inputBooks: NewBookProps; }) {
    const [bookData, setBookData] = useState(inputBooks);

    return(
        <div className="inline-block">
            {bookData.map((b) => (
                // must have a key for mapping
                <BookPreview key={b.book.id} book={b} />
            ))}
        </div>
    );
}