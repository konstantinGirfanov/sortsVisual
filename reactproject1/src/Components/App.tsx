/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useEffect } from 'react';
import './App.css';
import SortElements from './SortElements';
import styled from 'styled-components';
import MyInput from './MyInput';

const Root = styled.div`
        display: flex;
        justify-content: space-between;
        max-width: 100%;
        height: 100%;
    `
const InputsContainer = styled.div`
        display: block;
        width: 10%;
    `
const SortButton = styled.button`
        width: 70px;
        height: 30px;
    `

function App() {

    const countInputElementRef = useRef(null);
    const maxInputElementRef = useRef(null);
    const delayInputElementRef = useRef(null);

    const [elementsCount, setElementsCount] = useState('100');
    const [maxRelativeElementSize, setMaxRelativeElementSize] = useState('100');
    const [sortDelay, setSortDelay] = useState('10');

    useEffect(() => {
        countInputElementRef.current.focus();
    }, [elementsCount]);

    useEffect(() => {
        maxInputElementRef.current.focus();
    }, [maxRelativeElementSize]);

    useEffect(() => {
        delayInputElementRef.current.focus();
    }, [sortDelay]);

    const onClickHandler = () => {

    }

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
                count={parseInt(elementsCount)}
                maxElement={parseInt(maxRelativeElementSize)}>
            </SortElements>
        </Root>
    );
}

export default App