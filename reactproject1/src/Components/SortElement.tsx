import { useState } from "react";

type ElementInfo = {
    i: number;
    value: number;
    count: number;
    relativeMaxElementHeight: number;
    maxElementHeight: number;
    containerWidth: number;
}

export default function SortElement(props: ElementInfo) {

    const [element, setElementInfo] = useState({ info: props, color: 'black' });

    return (
        <span
            id={element.info.i.toString()}
            style={{
                backgroundColor: element.color,
                height: `${(element.info.value / element.info.relativeMaxElementHeight * element.info.maxElementHeight).toString()}px`,
                width: `${element.info.containerWidth / element.info.count}px`
            }
            }>
        </span>
    );
}