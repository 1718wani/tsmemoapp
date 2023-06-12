import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }