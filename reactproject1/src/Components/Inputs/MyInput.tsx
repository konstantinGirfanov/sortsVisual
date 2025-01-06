import styled from "styled-components";
import React, {RefObject} from "react";

const Input = styled.input`
    cursor: text;
`

type InputProps = {
    value: string,
    setValue: (value: string) => void,
    inputRef: RefObject<HTMLInputElement> | null,
    maxCount?: number
}

export default function MyInput({value, setValue, inputRef, maxCount}: InputProps) {

    const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = parseInt(e.target.value.replace(/\D/g, ''));
        if (maxCount) {
            newValue = Math.min(maxCount, newValue);
        }
        setValue(newValue.toString());
    };

    return (
        <Input value={value} onChange={handleCount} ref={inputRef}/>
    );
}