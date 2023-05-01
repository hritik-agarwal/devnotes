export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <li key={item.id}>
      <label>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={(e) => onToggle(item.id, e.target.checked)}
        />
        {item.title}
      </label>
      <button className="btn btn-danger" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
}
