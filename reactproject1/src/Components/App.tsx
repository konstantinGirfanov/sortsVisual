import {useEffect} from 'react';
import '../assets/App.css';
import SortElements from './sorting/SortElements.tsx';
import styled from 'styled-components';
import MyInput from './Inputs/MyInput';
import SortButton from './Inputs/SortButton';
import SelectInput from './Inputs/SelectInput';
import {useInputRefs} from "../hooks/refs.ts";
import {useDispatch, useSelector} from "react-redux";
import {
    changeSortingState,
    setData,
    setElementsCount,
    setMaxRelativeElementSize,
    setSortDelay
} from "../store/appSlice.ts";
import {RootState} from "../store/store.ts";

const Root = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    gap: 60px;
`
const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 17%;
`

export default function App() {

    const {count, max, delay} = useInputRefs();
    const dispatch = useDispatch();
    const elementsCount = useSelector((state: RootState) => state.app.elementsCount);
    const maxRelativeElementSize = useSelector((state: RootState) => state.app.maxRelativeElementSize);
    const sortDelay = useSelector((state: RootState) => state.app.sortDelay);
    const data = useSelector((state: RootState) => state.app.data);
    const steps = useSelector((state: RootState) => state.app.steps);

    useEffect(() => {
        count.current?.focus();
    }, [count, elementsCount]);
    useEffect(() => {
        max.current?.focus();
    }, [max, maxRelativeElementSize]);
    useEffect(() => {
        delay.current?.focus();
    }, [delay, sortDelay]);

    useEffect(() => {
        dispatch(changeSortingState());
        (async () => {
            for (const step of steps) {
                dispatch(setData(step));
                await new Promise(resolve => setTimeout(resolve, parseInt(sortDelay)));
            }
            dispatch(changeSortingState());
        })()
    }, [dispatch, sortDelay, steps]);

    return (
        <Root>
            <InputsContainer>
                <MyInput value={elementsCount} setValue={(value) => dispatch(setElementsCount(value))} inputRef={count}
                         maxCount={512} label={"Количество элементов"}/>
                <MyInput value={maxRelativeElementSize} setValue={(value) => dispatch(setMaxRelativeElementSize(value))}
                         inputRef={max} label={"Максимальный элемент"}/>
                <MyInput value={sortDelay} setValue={(value) => dispatch(setSortDelay(value))} inputRef={delay}
                         label={"Задержка между шагами(мс)"}/>
                <SelectInput/>
                <SortButton data={data}/>
            </InputsContainer>

            <SortElements maxElement={parseInt(maxRelativeElementSize)} data={data}></SortElements>
        </Root>
    );
}