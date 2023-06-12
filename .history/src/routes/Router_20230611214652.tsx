import { BrowserRouter, Route, Routes } from "reac"
import { Note } from "../pages/Note";

export function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Note />} />
        </Routes>
      </BrowserRouter>
    );
  }