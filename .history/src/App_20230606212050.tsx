import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h2>
TODOリスト
        </h2>
        <form onSubmit={() => {}}>
            <input type='text' onChange={() => {}} className='inputText'/>
            <input type='submit' value="作成" className='' />
        </form>
      </div>
    </div>
  );
}

export default App;