import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {setSortMethod} from "../../store/appSlice.ts";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

export default function SelectInput() {
    const sortMethod: string = useSelector((state: RootState) => state.app.sortMethod);
    const isSorting: boolean = useSelector((state: RootState) => state.app.isSorting);
    const dispatch = useDispatch();

    const onChangeHandler = (e: SelectChangeEvent) => {
        dispatch(setSortMethod(e.target.value));
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="label">Сортировка</InputLabel>
            <Select onChange={onChangeHandler} value={sortMethod} label="Сортировка" disabled={isSorting}>
                <MenuItem value={'bubble'}>bubble</MenuItem>
                <MenuItem value={'merge'}>merge</MenuItem>
            </Select>
        </FormControl>
    );
}