"use client";

// import { Textarea } from "@mui/joy";
import { Button} from "@mui/material";
import {useState} from "react";
// import {getYearData} from "@/app/api/getYearData/route";
// import {NewBookProps} from "@/new-types";


export default function LoadYearForm(){
    const [year, setYear] = useState("");
    // const [bookData, setBookData] = useState<NewBookProps | null>(null);

    function handlePress(val: string) {
        if(val != year) {
            setYear(val);
        }
    }

    // const handleLoad = async () => {
    //     const data  = await getYearData(year);
    //     // console.log(data);
    //     if(data != null){
    //         console.log("Raw data:", data);
    //         // console.log("user_books length:", data?.user_books?.length);
    //         setBookData(data);
    //         console.log("Set data", bookData);
    //     }
    // }

    return (
        <>
        <div className="w-full flex justify-center m-2">
            <form action={"/" + year} method="POST">
                {/*action={"/" + year} method="POST"*/}
                {/*action={handleLoad}*/}
                <Button onClick={() => handlePress('2021')} type="submit" >
                    2021
                </Button>
                <Button onClick={() => handlePress('2022')} type="submit" >
                    2022
                </Button>
                <Button onClick={() => handlePress('2023')} type="submit" >
                    2023
                </Button>
                <Button onClick={() => handlePress('2024')} type="submit" >
                    2024
                </Button>
                <Button onClick={() => handlePress('2025')} type="submit" >
                    2025
                </Button>
            </form>
        </div>
        </>
    );
}