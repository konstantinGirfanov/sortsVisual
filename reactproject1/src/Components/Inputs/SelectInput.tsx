import styled from "styled-components";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {setSortMethod} from "../../store/appSlice.ts";

const Input = styled.select`
        width: 150px;
        height: 30px;
    `

export default function SelectInput() {
    const sortMethod:string = useSelector((state:RootState) => state.app.sortMethod);
    const dispatch = useDispatch();

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortMethod(e.target.value));
    }

    return (
        <Input onChange={onChangeHandler} value={sortMethod}>
            {['bubble', 'merge'].map((value, index) => {
                return <option key={index} value={value}>{value}</option>;
            })}
        </Input>
    );
}