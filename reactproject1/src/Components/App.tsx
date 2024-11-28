//import * as React from 'react';
import { useState } from 'react';
import './App.css';
import SortElements from './SortElements';


function App() {

    const [data] = useState({ count: 100, maxElement: 10000, delayMs: 10 });

    return (
        <>
            <div className="root">
                <div className='input-container'>
                    <form>
                        <label>Количество элементов</label>
                        <input
                            type="text"
                            value={data.count}
                            id="elementsCount"
                            onChange={(e) => { data.count = parseInt(e.target.value) }}></input>
                        <label>Максимальный элемент</label>
                        <input
                            type="text"
                            value={data.maxElement}
                            id="maxElement"
                            onChange={(e) => { data.maxElement = parseInt(e.target.value) }}></input>
                        <label>Задержка между шагами(мс)</label>
                        <input
                            type="text"
                            value={data.delayMs}
                            id="delayBetweenSteps"
                            onChange={(e) => { data.delayMs = parseInt(e.target.value) }}></input>
                        <input type="submit"></input>
                    </form>
                </div >

                <SortElements
                    count={data.count}
                    maxElement={data.maxElement}
                    delayMs={data.delayMs}>
                </SortElements>
            </div>
        </>
    );
}

export default App