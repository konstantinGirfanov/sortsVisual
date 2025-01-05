import styled from "styled-components";
import {SortElementInfo} from "../../types/data.ts";
import {useDispatch, useSelector} from "react-redux";
import { setSteps } from "../../store/appSlice.ts";
import {RootState} from "../../store/store.ts";
import {BubbleSort, MergeSort} from "../../services/sorts.ts";

const SortButton = styled.button`
        width: 150px;
        height: 70px;
    `

type Data = {
    data: SortElementInfo[];
}

export default function MyInput({data}:Data) {
    const dispatch = useDispatch();
    const sortMethod :string = useSelector((state: RootState) => state.app.sortMethod);

    const onClickHandler = () => {
        let steps: SortElementInfo[][];
        switch (sortMethod) {
            case 'bubble':
                steps = [...BubbleSort.GetSortSteps(data)];
                break;
            default:
                steps = MergeSort.GetSortSteps(data);
                break;
        }
        steps.push(Array.from(steps[steps.length - 1], (e) => {
            return {num: e.num, color: '#5CCCCC'};
        }));

        dispatch(setSteps(steps));
    }

    return (
        <SortButton onClick={onClickHandler}>СОРТИР ОВКА</SortButton>
    );
}