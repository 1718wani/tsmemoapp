import { Dayjs } from "dayjs";

export type Note = {
    inputValue: string;
    id: number;
    checked: boolean;
    createdDate: Dayjs;
    imageUrl?: string;
    isImportant: boolean;
  };