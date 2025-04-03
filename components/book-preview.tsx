import { BookProps } from '@/types';

export default function BookPreview({book}:{book:BookProps}) {
    return(
        <div className="bg-sky-300 round-xl p-4 m-2 w-100">
            <h2 className="font-bold text-3xl text-center">Finished: {book.last_read_date}</h2>
            <div className="justify-self-center">
                <img loading="lazy" className="object-cover w-50 h-85" src={book.default_cover} alt={"Cover of " + book.title}/>
                <h3 className="font-bold">{book.title}</h3>
                <h3 className="font-bold">By {book.author}</h3>
            </div>
        </div>
    );
}