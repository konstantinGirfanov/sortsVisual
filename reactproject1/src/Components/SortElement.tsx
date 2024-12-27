import styled from "styled-components";

type ElementInfo = {
    i: number;
    value: number;
    count: number;
    relativeMaxElementHeight: number;
    maxElementHeight: number;
    containerWidth: number;
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
                width: `${props.containerWidth / props.containerWidth + 2}px`
            }}>
        </Element>
    );
}