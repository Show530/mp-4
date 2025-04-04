import {BookEntry} from '@/new-types';

export default function BookPreview({book}:{book:BookEntry}) {
    // function author_name() {
    //     if (book.book.cached_contributors[0].author.name != null) {
    //         return <h3 className="font-bold">By {book.book.cached_contributors[0].author.name}</h3>
    //     }
    //     else {
    //         return <h3></h3>
    //     }
    //
    // }

    return(
        <div className="bg-sky-300 round-xl p-4 m-2 w-100 justify-center">
            <h2 className="font-bold text-3xl text-center">Finished: {book.last_read_date}</h2>
            <div className="justify-self-center">
                <img loading="lazy"
                     className="object-cover w-50 h-85 justify-center"
                     src={book.book.default_cover_edition?.cached_image?.url ?? "/Rickroll.jpg"}
                     alt={"Cover of " + book.book.title}/>
                <h3 className="font-bold">{book.book.title}</h3>
                <h3 className="font-bold">By {book.book.cached_contributors[0]?.author?.name ?? "Author Unknown"}</h3>
            </div>
        </div>
    );
}