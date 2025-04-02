// retrieves server-side data from the json api
import mockData from "@/mock.json";
import {BookProps} from "@/types";

export default async function getYearBooks(): Promise<BookProps[]> {
    return mockData.mock_user_books;
}