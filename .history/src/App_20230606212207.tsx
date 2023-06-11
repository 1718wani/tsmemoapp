import React from 'react';
import './App.css';
import { type } from 'os';

function App() {
  type Todo = {
    inputValue: string;
    id: number;
    checked: 
  }


  return (
    <div className="App">
      <div>
        <h2>
TODOリスト
        </h2>
        <form onSubmit={() => {}}>
            <input type='text' onChange={() => {}} className='inputText'/>
            <input type='submit' value="作成" className='submitButton' />
        </form>
      </div>
    </div>
  );
}

export default App;
