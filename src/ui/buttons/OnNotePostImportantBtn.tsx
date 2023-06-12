import { MouseEventHandler } from "react";
import { Note } from "../../types/notetype";

type NewType = Pick<Note, "isImportant" >

interface ExistendedType extends NewType{
    handleTagBtn: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const OnNotePostImportantBtn  = (props:ExistendedType) =>{
    const {isImportant,handleTagBtn} = props;

    return(
        <>
        {isImportant ? (
                <button type="button" onClick={handleTagBtn}>
                  <span className="text-red-500 bg-red-100 w-4 h-4 mr-2 mt-5 rounded-full inline-flex items-center justify-center ml-6">
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
                  <text>重要</text>
                </button>
              ) : (
                <button type="button" onClick={handleTagBtn}>
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
                </button>
              )}
        </>
    )
}