import { Note } from "../../types/notetype";

export const NoteCard = (props: Note) => {
  const { inputValue, id, checked, createdDate, imageUrl, isImportant } = props;
  return (
    <>
      <div className="py-6 px-4 w-full border rounded-xl m-5" key={id}>
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-700 pb-2 mb-2 border-b-2 border-gray-200">
              {createdDate.month()}
            </span>
            <span className="font-medium text-lg text-gray-500  leading-none">
              {createdDate.date()}
            </span>
          </div>
          <div className="flex-grow pl-6">
            <p className="leading-relaxed mb-3">{inputValue}</p>

            <span className="flex">
              {imageUrl && (
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

              {isImportant ? (
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
                  <text className="font-color text-slate-300">重要</text>
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
