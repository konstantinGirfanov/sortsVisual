import styled from "styled-components";

export default function MyInput({value, setValue, inputRef, maxCount}) {

    const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = parseInt(e.target.value.replace(/\D/g, ''));
        if (maxCount) {
            newValue = Math.min(maxCount, newValue);
        }
        setValue(newValue.toString());
    };

    const Input = styled.input`
    `
    return (
        <Input value={value} onChange={handleCount} ref={inputRef} />
  );
}