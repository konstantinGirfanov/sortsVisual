import SortElement from "./SortElement";

type SortElementsProps = {
    count: number;
    maxElement: number;
    delayMs: number;
};

export default function SortElements(props: SortElementsProps) {

    const getRandomValue = (min: number, max: number) => {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
    }

    const arr: { value: number, i: number }[] = [];
    for (let i = 0; i < props.count; i++) {
        arr.push({ value: getRandomValue(0, props.maxElement), i: i });
    }


    const width = 1300;
    return (
        <div className="elements-сontainer" style={{ width: `${width}px` }}>
            {arr.map((e) => (
                <SortElement
                    key={e.i}
                    i={e.i}
                    value={e.value}
                    count={props.count}
                    relativeMaxElementHeight={props.maxElement}
                    maxElementHeight={600}
                    containerWidth={width}>
                </SortElement>
            ))}
        </div>
    );
}