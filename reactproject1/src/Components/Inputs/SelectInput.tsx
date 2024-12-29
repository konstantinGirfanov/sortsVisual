import styled from "styled-components";
import { SortElement } from '../App';
import { BubbleSort, MergeSort } from '../../sorts';

const Input = styled.select`
        width: 150px;
        height: 30px;
    `

type SelectInfo = {
    sortMethod: {
        name: string;
        getSteps: (data: SortElement[]) => SortElement[][];
    },

    setSortMethod: React.Dispatch<React.SetStateAction<{
        name: string;
        getSteps: (data: SortElement[]) => SortElement[][];
    }>>
}

export default function SelectInput({ sortMethod, setSortMethod }: SelectInfo) {

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.value) {
            case 'bubble':
                setSortMethod({ name: 'bubble', getSteps: BubbleSort.GetSortSteps });
                break;
            case 'merge':
                setSortMethod({ name: 'merge', getSteps: MergeSort.GetSortSteps });
                break;
        }
    }

    return (
        <Input onChange={onChangeHandler} value={sortMethod.name}>
            {['bubble', 'merge'].map(e => {
                return <option value={e}>{e}</option>;
            })}
        </Input>
    );
}