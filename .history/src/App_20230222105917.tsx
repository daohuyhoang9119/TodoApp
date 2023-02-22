import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TaskItem from "./components/TaskItem/TaskItem";
function App() {
  return (
    <div className="w-full h-full p-20 bg-gray-100">
      <Header />
      <main className="mx-5">
        <div className="left">
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
        <div className="left"></div>
      </main>
    </div>
  );
}

export default App;
