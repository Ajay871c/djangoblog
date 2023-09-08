import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact Component={NotesListPage} />
          <Route path="/note/:id" Component={NotePage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
