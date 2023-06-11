import React, { FC, useState } from "react";
import "./App.css";
import { type } from "os";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>();

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

    const newNote: Note = {
      inputValue: inputValue,
      id: notes.length,
      checked: false,
      imageUrl:imagePreview
    };

    setNotes([newNote, ...notes]);
    setInputValue("");
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = event.clipboardData?.items;
    console.log(items);

    if (items) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.type.indexOf("image") !== -1) {
          console.log(item);
          const file = item.getAsFile();
          const blob = new Blob([file!], { type: file!.type });
          const imageUrl = URL.createObjectURL(blob);
          setImagePreview(imageUrl);
        }
      }
    }
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
