"use client";

import { Textarea } from "@mui/joy";
import { Button, FormHelperText, TextField } from "@mui/material";
import {useState} from "react";


export default function LoadYearForm(){
    return (
        <form>
            <FormHelperText>Select a year!</FormHelperText>
            <div className="w-full flex justify-center">
                <Button value="2021" type="submit" variant="contained" sx={{width:"80px"}} >
                    2021
                </Button>
                <Button value="2022" type="submit" variant="contained" sx={{width:"80px"}} >
                    2022
                </Button>
                <Button value="2023" type="submit" variant="contained" sx={{width:"80px"}} >
                    2023
                </Button>
                <Button value="2024" type="submit" variant="contained" sx={{width:"80px"}} >
                    2024
                </Button>
                <Button value="2025" type="submit" variant="contained" sx={{width:"80px"}} >
                    2025
                </Button>
            </div>
        </form>
    );
}