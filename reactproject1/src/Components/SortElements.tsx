import { useState, useEffect } from "react";
import SortElement from "./SortElement";
import {styled} from 'styled-components';

type SortElementsProps = {
    count: number;
    maxElement: number;
};

const Elements = styled.div`
    display: flex;
    align-items: end;
    gap: 2px;
    background-color: white;
    max-width: 100%;
    height: 100%;
    align-self: end;
`;

export default function SortElements(props: SortElementsProps) {

    const [data, setData] = useState(
        Array.from({ length: props.count }, () => { return getRandomValue(0, props.maxElement) })
    );

    useEffect(() => {
        setData(Array.from({ length: props.count }, () => { return getRandomValue(0, props.maxElement) }));
    }, [props]);

    function getRandomValue (min: number, max: number) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
    };

    const width = 1300;
    return (
        <Elements>
            {data.map((value: number, i: number) => (
                <SortElement
                    key={i}
                    i={i}
                    value={value}
                    count={props.count}
                    relativeMaxElementHeight={props.maxElement}
                    maxElementHeight={700}
                    containerWidth={width}
                    color={'#5CCCCC'}
                />
            ))}
        </Elements>
    );
}