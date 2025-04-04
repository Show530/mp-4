"use server";
// retrieves server-side data from the json api
import {NewBookProps} from "@/new-types";
import {getYearData} from "@/lib/route";

export default async function getYearBooks(year:string): Promise<NewBookProps|null> {

    // const handleLoad = async () => {
    //     const data  = await getYearData(year);
    //     // console.log(data);
    //     if(data != null){
    //         console.log("Raw data:", data);
    //         // console.log("user_books length:", data?.user_books?.length);
    //         // setBookData(data);
    //         // console.log("Set data", bookData);
    //     }
    //     return data;
    // }

    return await getYearData(year);
}