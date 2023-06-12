import { ClipboardEventHandler, MouseEventHandler } from "react";

export type PostForm = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    imagePreview: string|undefined;
    inputValue: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handlePaste: ClipboardEventHandler<HTMLTextAreaElement> | undefined;
    isImportant: boolean;
    handleTagBtn: MouseEventHandler<HTMLButtonElement> | undefined
  };