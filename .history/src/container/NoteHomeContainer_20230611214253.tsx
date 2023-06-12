import React, { FC, useState } from "react";
import "./App.css";
import { type } from "os";
import dayjs, { Dayjs } from "dayjs";
import brankImage from "../src/images/noImage.jpeg";
import { Note } from "./types/notetype";
import { NotePostBtn } from "./ui/buttons/NotePostBtn";
import { OnNotePostImportantBtn } from "./ui/buttons/OnNotePostImportantBtn";
import { NoteCard } from "./ui/cards/NoteCard";
import { Router } from "./routes/Router";


export const NoteHomeContainer = () =>{
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


    return(
        <>
        

        </>
    )

} 






  return (
    
  );
}

export default App;