import {BookEntry, NewBookProps} from '@/new-types';

export default function BookPreview({book}:{book:BookEntry}) {
    return(
        <div className="bg-sky-300 round-xl p-4 m-2 w-100 justify-center">
            <h2 className="font-bold text-3xl text-center">Finished: {book.last_read_date}</h2>
            <div className="justify-self-center">
                <img loading="lazy"
                     className="object-cover w-50 h-85 justify-center"
                     src={book.book.default_cover_edition?.cached_image?.url ?? "https://static.wikia.nocookie.net/dqw4w9wgxcq/images/0/08/Site-background-dark/revision/latest?cb=20220428173233"}
                     alt={"Cover of " + book.book.title}/>
                <h3 className="font-bold">{book.book.title}</h3>
            </div>
        </div>
    );
}