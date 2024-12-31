import SortElement from "./SortElement";
import {styled} from 'styled-components';

type ElementInfo = {
    num: number;
    color: string;
}

type SortElementsProps = {
    maxElement: number;
    data: ElementInfo[];
};

const Elements = styled.div`
    display: flex;
    align-items: end;
    gap: 2px;
    background-color: white;
    width: 100%;
    height: 100%;
    align-self: end;
`;

export default function SortElements(props: SortElementsProps) {
    
    return (
        <Elements>
            {props.data.map((value: ElementInfo, i: number) => (
                <SortElement
                    key={i}
                    value={value.num}
                    relativeMaxElementHeight={props.maxElement}
                    maxElementHeight={700}
                    color={value.color}
                />
            ))}
        </Elements>
    );
}