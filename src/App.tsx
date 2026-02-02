import ShadcnSidebar from "./components/ui/ShadcnSidebar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Uddannelse from "./pages/Uddannelse";
import UseStateHook from "./pages/showcase/Hooks/UseState";
import UseReducerHook from "./pages/showcase/Hooks/UseReducer";
import ToDoList from "./pages/showcase/Demos/ToDoList";


function App() {
  return (
    
    <ShadcnSidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/uddannelse" element={<Uddannelse />} />
          <Route path="/useStateHook" element={<UseStateHook />} />
          <Route path="/useReducerHook" element={<UseReducerHook />} />
          <Route path="/toDoList" element={<ToDoList />} />
        </Routes>
    </ShadcnSidebar>
    
  );
}

export default App;