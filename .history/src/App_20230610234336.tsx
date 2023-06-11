import React, { FC, useState } from "react";
import "./App.css";
import { type } from "os";
import dayjs from 'dayjs';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [imagePreview, setImagePreview] = useState<string | undefined>();

  type Note = {
    inputValue: string;
    id: number;
    checked: boolean;
    createdDate: Da
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
      createdDate: 
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
        <h2 className="font-bold text-center text-gray-600 text-3xl mt-8 mb-7">
          メモ
        </h2>
        <div></div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center"
        >
          <textarea
            value={inputValue}
            onPaste={handlePaste}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 focus:border-blue-500 h-24 w-80 rounded-2xl p-3 mb-4"
          />
          <button
            type="submit"
            className="bg-indigo-700 hover:bg-indigo-500  font-semibold text-white py-2 px-4 rounded"
          >
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Jul
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    18
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="blog"
                      src="https://dummyimage.com/103x103"
                      className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Alper Kamu
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
