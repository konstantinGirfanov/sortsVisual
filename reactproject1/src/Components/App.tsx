/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useEffect } from 'react';
import './App.css';
import SortElements from './SortElements';
import styled from 'styled-components';
import MyInput from './MyInput';

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
        width: 70px;
        height: 30px;
    `

function GetRandomValue(min: number, max: number) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
};

type SortElement = {
    num: number;
    color: string;
}

function App() {

    const countInputElementRef = useRef(null);
    const maxInputElementRef = useRef(null);
    const delayInputElementRef = useRef(null);

    const [elementsCount, setElementsCount] = useState('5');
    const [maxRelativeElementSize, setMaxRelativeElementSize] = useState('100');
    const [sortDelay, setSortDelay] = useState('1');
    const [data, setData] = useState(
        Array.from({ length: parseInt(elementsCount) },
            () => { return { num: GetRandomValue(0, parseInt(maxRelativeElementSize)), color: '#5CCCCC' }})
    );
    const [steps, setSteps] = useState<SortElement[][]>([]);

    useEffect(() => {
        countInputElementRef.current.focus();
    }, [elementsCount]);

    useEffect(() => {
        maxInputElementRef.current.focus();
    }, [maxRelativeElementSize]);

    useEffect(() => {
        delayInputElementRef.current.focus();
    }, [sortDelay]);

    useEffect(() => {
        setData(
            Array.from({ length: parseInt(elementsCount) },
                () => { return { num: GetRandomValue(0, parseInt(maxRelativeElementSize)), color: '#5CCCCC' } })
        );
    }, [elementsCount, maxRelativeElementSize]);

    const onClickHandler = () => {
        const nums = Array.from(data,
            (data) => { return data.num });
        const newSteps: SortElement[][] = [];

        for (let j = nums.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                const newNumbers: SortElement[] = Array.from(nums, (e) => { return { num: e, color: '#5CCCCC' } });
                newNumbers[i].color = 'red';
                newNumbers[i + 1].color = 'red';
                newSteps.push(newNumbers);

                if (nums[i] > nums[i + 1]) {
                    const temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;

                    const newNumbers: SortElement[] = Array.from(nums, (e) => { return { num: e, color: '#5CCCCC' } });
                    newNumbers[i].color = 'green';
                    newNumbers[i + 1].color = 'green';
                    newSteps.push(newNumbers);
                }
            }
        }
        setSteps(newSteps);
    }

    useEffect(() => {
        (async () => {

            if (!steps) {
                return;
            }

            for (const stepElements of steps) {
                setData(stepElements);
                await new Promise(resolve => setTimeout(resolve, parseInt(sortDelay) / 10));
            }

        })()
    }, [steps]);

    return (
        <Root>
            <InputsContainer>
                <label>Количество элементов</label>
                <MyInput value={elementsCount} setValue={setElementsCount} inputRef={countInputElementRef} maxCount={512} />
                <label>Максимальный элемент</label>
                <MyInput value={maxRelativeElementSize} setValue={setMaxRelativeElementSize} inputRef={maxInputElementRef} maxCount={null} />
                <label>Задержка между шагами(мс)</label>
                <MyInput value={sortDelay} setValue={setSortDelay} inputRef={delayInputElementRef} maxCount={null} />
                <SortButton onClick={onClickHandler} />
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