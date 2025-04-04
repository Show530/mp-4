"use client";
// use client is important! add on top of use state files in mp-4
import {NewBookProps} from "@/new-types";
import BookPreview from "./book-preview"

export default function BookDisplay({inputBooks,}: { inputBooks: NewBookProps; }) {

    return(
        <div className="inline-block">
            {inputBooks.map((b) => (
                // must have a key for mapping
                <BookPreview key={b.book.id} bookData={b} />
            ))}
        </div>
    );
}