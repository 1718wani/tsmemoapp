import { BrowserRouter, } from "react-router-dom";
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