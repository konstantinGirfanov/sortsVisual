import {RefObject, useRef} from "react";

export const useInputRefs = () => {
    const countInputElementRef: RefObject<HTMLInputElement> | null = useRef<HTMLInputElement>(null);
    const maxInputElementRef: RefObject<HTMLInputElement> | null = useRef<HTMLInputElement>(null);
    const delayInputElementRef: RefObject<HTMLInputElement> | null = useRef<HTMLInputElement>(null);
    return {count: countInputElementRef, max: maxInputElementRef, delay: delayInputElementRef};
}