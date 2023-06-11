import React, { FC, useState } from "react";
import "./App.css";
import { type } from "os";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [imagePreview, setImagePreview] = useState<string | undefined>();

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
      imageUrl: imagePreview,
    };

    setNotes([newNote, ...notes]);
    setImagePreview(undefined);
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
    <div>
      <div>
        <h2 className="font-bold text-center text-gray-600 text-3xl mt-8 mb-7" >TODOリスト</h2>
        <div>

        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center" >
          <textarea
            value={inputValue}
            onPaste={handlePaste}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 focus:border-blue-500 h-24 w-80 rounded-2xl pt-4"
          />
          <button type="submit"  className="bg-indigo-700 hover:bg-indigo-500  font-semibold text-white py-2 px-4 rounded">
            作成
          </button>
          
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
