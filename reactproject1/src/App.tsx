//import * as React from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client'
import './App.css'
import BubbleSort from './sorts';


function LoadNums() {
    event!.preventDefault();
    const components: React.ReactNode[] = [];
    const maxElementHeight: number = 600;

    let relativeMaxElementHeight: number = Number((document.getElementById("maxElement")?.value));
    const elementsCount: number = Number(document.getElementById("elementsCount")?.value);
    const bubble: BubbleSort = new BubbleSort(elementsCount, relativeMaxElementHeight);
    relativeMaxElementHeight = bubble.maxNumber;

    const containerWidth: number = Number(document.getElementById("elementsContainer")?.clientWidth);
    //const delay: number = Number(document.getElementById("delayBetweenSteps")?.value);
    for (let i: number = 0; i < elementsCount; i++) {
        components[i] =
            <span
                id={i.toString()}
                style={{
                    backgroundColor: "black",
                    height: `${(bubble.nums[i] / relativeMaxElementHeight * maxElementHeight).toString()}px`,
                    width: `${containerWidth / elementsCount}px`
                }
                }>
            </span>
    }
    createRoot(document.getElementById('elementsContainer')!).render(
        components
    )
}

function App() {
    return (
        <>
            <div className="root">
                <div id="controlPanel">
                    <form>
                        <label>Количество элементов</label>
                        <input type="text" defaultValue="300" id="elementsCount"></input>
                        <label>Максимальный элемент</label>
                        <input type="text" defaultValue="10000" id="maxElement"></input>
                        <label>Задержка между шагами(мс)</label>
                        <input type="text" defaultValue="1" id="delayBetweenSteps"></input>
                        <input type="submit" onClick={LoadNums}></input>
                    </form>
                </div>
                <div className="card" id="elementsContainer">
                </div>
            </div>
        </>
    );
}

export default App