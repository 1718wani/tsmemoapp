import React, { FC, useState } from "react";
import { type } from "os";
import dayjs, { Dayjs } from "dayjs";
import { NotePostBtn } from "../ui/buttons/NotePostBtn";
import { OnNotePostImportantBtn } from "../ui/buttons/OnNotePostImportantBtn";
import { NoteCard } from "../ui/cards/NoteCard";
import { Note } from "../types/notetype";

import { NotePostForm } from "../ui/forms/NotePostForm";

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
          <NotePostForm
            handleSubmit={handleSubmit}
            imagePreview={imagePreview}
            inputValue={inputValue}
            handleChange={handleChange}
            handlePaste={handlePaste}
            isImportant={isImportant}
            handleTagBtn={handleTagBtn}
          />

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
