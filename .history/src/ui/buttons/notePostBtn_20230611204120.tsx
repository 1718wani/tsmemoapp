import { type } from "os";
import { Note } from "../../types/notetype";

type NewType = Pick<Note, "inputValue">


export const NotePostBtn = (props: NewType) => {
  const inputValue = props;
  return (
    <>
      {inputValue.inputValue.length > 0 ? (
        <button
          type="submit"
          className="bg-indigo-700 hover:bg-indigo-500  font-semibold text-white py-2 px-4 rounded"
        >
          作成
        </button>
      ) : (
        <button
          type="submit"
          className="bg-indigo-100   font-semibold text-white py-2 px-4 rounded"
          disabled
        >
          作成
        </button>
      )}
    </>
  );
};
