import { type } from "os";
import { NotePostBtn } from "../buttons/NotePostBtn";
import { OnNotePostImportantBtn } from "../buttons/OnNotePostImportantBtn";
import brankImage from "/Users/mitaniikuya/tstodolist/src/images/noImage.jpeg";
import { ClipboardEventHandler, MouseEventHandler } from "react";
import { PostForm } from "../../types/postformtype";



export const NotePostForm = (props: PostForm) => {
  const {
    handleSubmit,
    imagePreview,
    inputValue,
    handleChange,
    handlePaste,
    isImportant,
    handleTagBtn,
  } = props;

  return (
    <>
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
    </>
  );
};
