import {SortElementInfo} from "../types/data.ts";

const GetRandomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
}

export const GetRandomArray = (elementsCount: string, maxRelativeElementSize: string): SortElementInfo[] => {
    return Array.from({length: parseInt(elementsCount)},
        () => {
            return {num: GetRandomValue(0, parseInt(maxRelativeElementSize)), color: '#5CCCCC'}
        });
}