import * as React from 'react';
import './App.css'

function App() {
    const components = []; 
    for (let i: number = 0; i < 10; i++) {
        components[i] = <span id={i.toString()} style={{ display: i.toString() }}></span>;
    }

  return (
      <>
          <div className="card">
              {components}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
              </p>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
