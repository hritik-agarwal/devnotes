import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [itemList, setItemList] = useState(() => {
    const localTodos = localStorage.getItem("itemList");
    if (localStorage === null) return [];
    return JSON.parse(localTodos);
  });

  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }, [itemList]);

  const handleAddTodo = (newItem) => {
    if (newItem.length === 0) return;
    setItemList((list) => [
      ...list,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  };

  const handleToggleTodo = (id, completed) => {
    setItemList((list) => {
      return list.map((item) => {
        if (item.id === id) return { ...item, completed };
        return item;
      });
    });
  };

  const handleDeleteTodo = (id) => {
    setItemList((list) => list.filter((item) => item.id !== id));
  };

  return (
    <>
      <NewTodoForm onSubmit={handleAddTodo} />
      <TodoList
        itemList={itemList}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </>
  );
}
