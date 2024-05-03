import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateEmployee from "./components/CreateEmployee";
import ShowEmployee from "./components/ShowEmployee";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";

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
