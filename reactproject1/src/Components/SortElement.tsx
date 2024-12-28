import styled from "styled-components";

type ElementInfo = {
    value: number;
    relativeMaxElementHeight: number;
    maxElementHeight: number;
    color: string;
}

const Element = styled.span`
`

export default function SortElement(props: ElementInfo) {

    return (
        <Element
            style={{
                backgroundColor: props.color,
                height: `${(props.value / props.relativeMaxElementHeight * props.maxElementHeight).toString()}px`,
                width: `${4}px`
            }}>
        </Element>
    );
}