import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateEmployee from "./pages/CreateEmployee";
import ShowEmployee from "./pages/ShowEmployee";
import EditEmployee from "./pages/EditEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees/create" element={<CreateEmployee />} />
      <Route path="/employees/details/:id" element={<ShowEmployee />} />
      <Route path="/employees/edit/:id" element={<EditEmployee />} />
      <Route path="/employees/delete/:id" element={<DeleteEmployee />} />
    </Routes>
  );
}

export default App;
