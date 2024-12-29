import styled from "styled-components";

const Input = styled.input`
    cursor: text;
    `

export default function MyInput({value, setValue, inputRef, maxCount}) {

    const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = parseInt(e.target.value.replace(/\D/g, ''));
        if (maxCount) {
            newValue = Math.min(maxCount, newValue);
        }
        setValue(newValue.toString());
    };
    return (
        <Input value={value} onChange={handleCount} ref={inputRef} />
  );
}