import dayjs, { Dayjs } from "dayjs";

type Note = {
    inputValue: string;
    id: number;
    checked: boolean;
    createdDate: Dayjs;
    imageUrl?: string;
    isImportant: boolean;
  };