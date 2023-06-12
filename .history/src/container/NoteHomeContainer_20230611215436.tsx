import React, { FC, useState } from "react";
import "./";
import { type } from "os";
import dayjs, { Dayjs } from "dayjs";
import brankImage from "../src/images/noImage.jpeg";
import { Note } from "../types/notetype";
import { NotePostBtn } from "../ui/buttons/NotePostBtn";
import { OnNotePostImportantBtn } from "../ui/buttons/OnNotePostImportantBtn";
import { NoteCard } from "../ui/cards/NoteCard";
import { Router } from "../routes/Router";

export const NoteHomeContainer = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [isImportant, setIsImportant] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleTagBtn = () => {
    if (isImportant) setIsImportant(false);
    else setIsImportant(true);
  };

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

    if (isImportant) newNote.isImportant = true;

    setNotes([newNote, ...notes]);
    setImagePreview(undefined);
    setInputValue("");
    setIsImportant(false);
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
    <>
      <div>
        <div>
          <h2 className="font-bold text-center text-gray-600 text-3xl mt-8 mb-7">
            画像も保存できるメモ
          </h2>
          <div>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col items-center"
            >
              <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] w-7/12">
                <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
                  <img
                    className="w-full h-full absolute top-0 left-0 object-cover"
                    src={!imagePreview ? brankImage : imagePreview}
                    alt="Description32"
                  />
                </div>

                <textarea
                  value={inputValue}
                  onPaste={handlePaste}
                  onChange={(e) => handleChange(e)}
                  className=" focus:border-blue-500 w-full p-3 "
                />
              </div>

              <div className="flex flex-row mt-7 ">
                <NotePostBtn inputValue={inputValue} />
                <OnNotePostImportantBtn
                  isImportant={isImportant}
                  handleTagBtn={handleTagBtn}
                />
              </div>
            </form>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 w-9/12 mx-auto">
              <div className="flex flex-wrap -mx-4 -my-8">
                {notes.map((todo) => (
                  <NoteCard
                    inputValue={todo.inputValue}
                    id={todo.id}
                    checked={todo.checked}
                    createdDate={todo.createdDate}
                    imageUrl={todo.imageUrl}
                    isImportant={todo.isImportant}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};


