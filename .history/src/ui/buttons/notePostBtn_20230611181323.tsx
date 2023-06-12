export const NotePostBtn = (props:string):   JSX.Element => {
  const inputValue = props;
  return (
    <>
      {props.inputValue.length > 0 ? (
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
