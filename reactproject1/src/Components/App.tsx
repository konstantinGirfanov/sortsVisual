/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useEffect } from 'react';
import './App.css';
import SortElements from './SortElements';
import styled from 'styled-components';
import MyInput from './MyInput';
import {BubbleSort, MergeSort} from '../sorts';

const Root = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        gap: 60px;
    `
const InputsContainer = styled.div`
        display: block;
        width: 10%;
    `
const SortButton = styled.button`
        width: 150px;
        height: 70px;
        justify-self: center;
    `

function GetRandomValue(min: number, max: number) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
};

export type SortElement = {
    num: number;
    color: string;
}

const useInputRefs = () => {
    const countInputElementRef = useRef(null);
    const maxInputElementRef = useRef(null);
    const delayInputElementRef = useRef(null);
    return { count: countInputElementRef, max: maxInputElementRef, delay: delayInputElementRef};
}

function App() {
    const { count, max, delay } = useInputRefs();

    const [elementsCount, setElementsCount] = useState('10');
    const [maxRelativeElementSize, setMaxRelativeElementSize] = useState('500');
    const [sortDelay, setSortDelay] = useState('1');
    const [data, setData] = useState(
        Array.from({ length: parseInt(elementsCount) },
            () => { return { num: GetRandomValue(0, parseInt(maxRelativeElementSize)), color: '#5CCCCC' }})
    );
    const [steps, setSteps] = useState<SortElement[][]>([]);

    useEffect(() => {
        if (count.current) {
            count.current.focus();
        }
    }, [count, elementsCount]);

    useEffect(() => {
        if (max.current) {
            max.current.focus();
        }
    }, [max, maxRelativeElementSize]);

    useEffect(() => {
        if (delay.current) {
            delay.current.focus();
        }
    }, [delay, sortDelay]);

    useEffect(() => {
        setData(
            Array.from({ length: parseInt(elementsCount) },
                () => { return { num: GetRandomValue(0, parseInt(maxRelativeElementSize)), color: '#5CCCCC' } })
        );
    }, [elementsCount, maxRelativeElementSize]);

    const onClickHandler = () => {
        MergeSort.GetSortSteps(data, 0, data.length, data);
        setSteps(MergeSort.newSteps);
    }

    useEffect(() => {
        (async () => {
            for (const stepElements of steps) {
                setData(stepElements);
                await new Promise(resolve => setTimeout(resolve, parseInt(sortDelay)));
            }
            MergeSort.newSteps = [];
        })()
    }, [steps]);

    return (
        <Root>
            <InputsContainer>
                <label>Количество элементов</label>
                <MyInput value={elementsCount} setValue={setElementsCount} inputRef={count} maxCount={512} />
                <label>Максимальный элемент</label>
                <MyInput value={maxRelativeElementSize} setValue={setMaxRelativeElementSize} inputRef={max} maxCount={null} />
                <label>Задержка между шагами(мс)</label>
                <MyInput value={sortDelay} setValue={setSortDelay} inputRef={delay} maxCount={null} />
                <SortButton onClick={onClickHandler}>СОРТИР ОВКА</SortButton>
            </InputsContainer>

            <SortElements
                maxElement={parseInt(maxRelativeElementSize)}
                data={data}
            >
            </SortElements>
        </Root>
    );
}

export default App