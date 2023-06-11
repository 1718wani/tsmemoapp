import React, { FC, useState } from "react";
import "./App.css";
import { type } from "os";
import dayjs, { Dayjs } from "dayjs";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [imagePreview, setImagePreview] = useState<string | undefined>();

  type Note = {
    inputValue: string;
    id: number;
    checked: boolean;
    createdDate: Dayjs;
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
      createdDate: dayjs(),
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
            className="border border-gray-300 focus:border-blue-500 h-24 w-3/5 rounded-2xl p-3 mb-4"
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

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 w mx-auto">
            <div className="flex flex-wrap -mx-4 -my-8">
              {notes.map((todo) => (
                <div className="py-6 px-4 w-full border rounded-xl m-5">
                  <div className="h-full flex items-start">
                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                        {todo.createdDate.month()}
                      </span>
                      <span className="font-medium text-lg text-gray-800 title-font leading-none">
                        {todo.createdDate.date()}
                      </span>
                    </div>
                    <div className="flex-grow pl-6">
                      <p className="leading-relaxed mb-3">{todo.inputValue}</p>

                      <span className="flex">
                        {todo.imageUrl && (
                          <span>
                            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                className="w-3 h-3"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 6L9 17l-5-5"></path>
                              </svg>
                            </span>
                            画像ファイル
                          </span>
                        )}

                        <span>
                          <span className=" text-red-500 bg-red-100 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center ml-3">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              className="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          重要
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
