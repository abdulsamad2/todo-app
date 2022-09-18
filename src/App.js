import { useEffect, useState } from "react";
import TodoFrom from "./components/TodoFrom";
import TodoList from "./components/TodoList";
import uniqid from "uniqid";

function App() {
  const arr = JSON.parse(localStorage.getItem("task"));
  const [tasklist, setTasklist] = useState(arr);

  const saveSubmitHanlder = (enteredData) => {
    const sumitedData = {
      ...enteredData,
      id: uniqid(),
    };

    setTasklist((prevState) => [...prevState, sumitedData]);
  };
  function deleteHandler(id) {
    setTasklist((oldTask) => oldTask.filter((item) => item.id !== id));
  }
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasklist));
  }, [tasklist]);

  const element = tasklist.map((item) => {
    let task = item.task;
    let id = item.id;

    if (task) {
      return (
        <TodoList
          key={id}
          elementId={id}
          taskName={task}
          deleteHandler={() => deleteHandler(id)}
        />
      );
    }
  });

  return (
    <div className="App">
      <h1 className="text-2xl text-center py-4 bg-green-400 capitalize">
        Todo List
      </h1>
      <TodoFrom onsaveSubmitData={saveSubmitHanlder} />
      {element}
    </div>
  );
}

export default App;
