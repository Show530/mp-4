"use client";

import { Textarea } from "@mui/joy";
import { Button, FormHelperText, TextField } from "@mui/material";
import {useState} from "react";


export default function LoadYearForm(){
    const [year, setYear] = useState("2020");

    function handlePress(val: string) {
        setYear(val);
    }

    const handleLoad = async () => {

    }

    return (
        <>
        <div className="w-full flex justify-center m-2">
            <form action={"/" + year} method="POST">
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