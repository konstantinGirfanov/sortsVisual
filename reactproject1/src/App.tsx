//import * as React from 'react';
import './App.css'
import BubbleSort from './sorts';

function App() {
    const components = [];
    const bubble: BubbleSort = new BubbleSort(150, 300);
    const maxHeightElement = bubble.maxNumber;

    const elHeight: number = 600;
    for (let i: number = 0; i < maxHeightElement; i++) {
        components[i] = <span id={i.toString()} style={{
            backgroundColor: "black",
            height: `${(bubble.nums[i] / maxHeightElement * elHeight).toString()}px`,
            width: "2px"

        }}></span>;
    }

  return (
      <>
        <div className="card">
            {components}
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </>
  )
}

export default App
