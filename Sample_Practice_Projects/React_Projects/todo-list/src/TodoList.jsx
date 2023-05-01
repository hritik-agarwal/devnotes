import TodoItem from "./TodoItem";

export default function TodoList({ itemList, onToggle, onDelete }) {
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {itemList.length === 0 && "No Todos"}
        {itemList.map((item) => (
          <TodoItem item={item} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
