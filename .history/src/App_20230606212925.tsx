import React, { useState } from 'react';
import './App.css';
import { type } from 'os';

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) ={
    e.preventDefault()
  }


  return (
    <div className="App">
      <div>
        <h2>
TODOリスト
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type='text' onChange={(e) => handleChange(e)} className='inputText'/>
            <input type='submit' value="作成" className='submitButton' />
        </form>
      </div>
    </div>
  );
}

export default App;
