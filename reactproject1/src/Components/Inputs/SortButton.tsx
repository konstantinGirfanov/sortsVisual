import styled from "styled-components";
import { SortElement } from '../App';

const SortButton = styled.button`
        width: 150px;
        height: 70px;
    `

type SortInfo = {
    data: SortElement[],
    sortMethod: {
        name: string;
        getSteps: (data: SortElement[]) => SortElement[][];
    }
    setSteps: React.Dispatch<React.SetStateAction<SortElement[][]>>
}

export default function MyInput({ data, sortMethod, setSteps }: SortInfo) {

    const onClickHandler = () => {
        const steps: SortElement[][] = sortMethod.getSteps(data);

        setSteps([...steps,
        Array.from(steps[steps.length - 1], (e) => {
            return { num: e.num, color: '#5CCCCC' };
        })]);
    }

    return (
        <SortButton onClick={onClickHandler}>СОРТИР ОВКА</SortButton>
    );
}