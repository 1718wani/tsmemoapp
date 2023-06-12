import { BrowserRouter, Route, Routes } from "react";
import { Note } from "../pages/Note";

export function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Note />} />
        </Routes>
      </BrowserRouter>
    );
  }