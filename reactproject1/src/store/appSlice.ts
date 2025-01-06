import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetRandomArray} from '../services/Numbers.ts';
import {SortElementInfo} from "../types/data.ts";

interface AppState {
    elementsCount: string;
    maxRelativeElementSize: string;
    sortDelay: string;
    sortMethod: string;
    data: SortElementInfo[];
    steps: SortElementInfo[][];
}

const initialState: AppState = {
    elementsCount: '55',
    maxRelativeElementSize: '500',
    sortDelay: '5',
    sortMethod: 'bubble',
    data: GetRandomArray('55', '500'),
    steps: [],
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setElementsCount(state, action: PayloadAction<string>) {
            state.elementsCount = action.payload;
            state.data = GetRandomArray(state.elementsCount, state.maxRelativeElementSize);
        },
        setMaxRelativeElementSize(state, action: PayloadAction<string>) {
            state.maxRelativeElementSize = action.payload;
            state.data = GetRandomArray(state.elementsCount, state.maxRelativeElementSize);
        },
        setSortDelay(state, action: PayloadAction<string>) {
            state.sortDelay = action.payload;
            state.data = GetRandomArray(state.elementsCount, state.maxRelativeElementSize);
        },
        setSteps(state, action: PayloadAction<SortElementInfo[][]>) {
            state.steps = action.payload;
        },
        setData(state, action: PayloadAction<SortElementInfo[]>) {
            state.data = action.payload;
        },
        setSortMethod(state, action: PayloadAction<string>) {
            state.sortMethod = action.payload;
            state.data = GetRandomArray(state.elementsCount, state.maxRelativeElementSize);
        }
    },
});

export const {
    setElementsCount,
    setMaxRelativeElementSize,
    setSortDelay,
    setSteps,
    setData,
    setSortMethod
} = appSlice.actions;
export default appSlice.reducer;