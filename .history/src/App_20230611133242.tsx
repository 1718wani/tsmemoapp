import React, { FC, useState } from "react";
import "./App.css";
import { type } from "os";
import dayjs, { Dayjs } from "dayjs";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [isImportant, setIsImportant] = useState(false)

  type Note = {
    inputValue: string;
    id: number;
    checked: boolean;
    createdDate: Dayjs;
    imageUrl?: string;
    isImportant: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleTagBtn = () =>{
      setIsImportant(true)

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newNote: Note = {
      inputValue: inputValue,
      id: notes.length,
      checked: false,
      createdDate: dayjs(),
      imageUrl: imagePreview,
      isImportant: false,
    };

    if (isImportant) new

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
        <div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col items-center"
          >
            <textarea
              value={inputValue}
              onPaste={handlePaste}
              onChange={(e) => handleChange(e)}
              className="border border-gray-300 focus:border-blue-500 h-24 w-1/2 rounded-2xl p-3 mb-4"
            />
            <div className="flex flex-row">
              <button
                type="submit"
                className="bg-indigo-700 hover:bg-indigo-500  font-semibold text-white py-2 px-4 rounded"
              >
                作成
              </button>
              <div>
                <span className=" text-red-200 bg-gray-50 w-4 h-4 mr-2 mt-5 rounded-full inline-flex items-center justify-center ml-6">
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
                <text className="font-color text-slate-300">重要</text>
              </div>
            </div>
          </form>
        </div>

        <div>
          {imagePreview && <img src={imagePreview} alt="Pasted preview" />}
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 w-9/12 mx-auto">
            <div className="flex flex-wrap -mx-4 -my-8">
              {notes.map((todo) => (
                <div
                  className="py-6 px-4 w-full border rounded-xl m-5"
                  key={todo.id}
                >
                  <div className="h-full flex items-start">
                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span className="text-gray-700 pb-2 mb-2 border-b-2 border-gray-200">
                        {todo.createdDate.month()}
                      </span>
                      <span className="font-medium text-lg text-gray-500  leading-none">
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

                        {todo.isImportant ? (
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
                        ) : (
                          <span>
                            <span className=" text-red-200 bg-gray-50 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center ml-3">
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
                            <text className="font-color text-slate-300">
                              重要
                            </text>
                          </span>
                        )}
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
