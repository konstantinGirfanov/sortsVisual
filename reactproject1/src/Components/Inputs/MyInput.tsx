import React, {RefObject} from "react";
import {TextField} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

type InputProps = {
    value: string,
    setValue: (value: string) => void,
    inputRef: RefObject<HTMLInputElement> | null,
    label: string,
    maxCount?: number
}

export default function MyInput({value, setValue, inputRef, maxCount, label}: InputProps) {

    const isSorting: boolean = useSelector((state: RootState) => state.app.isSorting);

    const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = parseInt(e.target.value.replace(/\D/g, ''));
        if (maxCount) {
            newValue = Math.min(maxCount, newValue);
        }
        setValue(newValue.toString());
    };

    return (
        <TextField required={true} value={value} onChange={handleCount} ref={inputRef}
                   variant="standard" type={"number"} label={label} disabled={isSorting}/>
    );
}