import React, { FC, useState } from "react";
import "./App.css";
import { type } from "os";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  type Note = {
    inputValue: string;
    id: number;
    checked: boolean;
    imageUrl?: string;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Note = {
      inputValue: inputValue,
      id: notes.length,
      checked: false,
    };

    setNotes([newTodo, ...notes]);
    setInputValue("");
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = event.clipboardData?.items;
   const item = items[0];
        
          const file = item.getAsFile();
          const blob = fefe
          const imageUrl = URL.createObjectURL(blob);
          setImagePreview(imageUrl);
          break;
        
     
  };

  return (
    <div className="App">
      <div>
        <h2>TODOリスト</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea
            onPaste={handlePaste}
            onChange={(e) => handleChange(e)}
            className="inputText"
          />
          <input type="submit" value="作成" className="submitButton" />
        </form>
        <div>
          {imagePreview && <img src={imagePreview} alt="Pasted preview" />}
        </div>
        <ul>
          {notes.map((todo) => (
            <li key={todo.id}>{todo.inputValue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
