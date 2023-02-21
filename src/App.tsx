import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TaskItem from "./components/TaskItem/TaskItem";
function App() {
  return (
    <div className="w-full p-20 bg-gray-100">
      <Header />
      <TaskItem />
    </div>
  );
}

export default App;
