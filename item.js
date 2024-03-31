export default function Item({
  packed,
  description,
  quantity,
  id,
  handledeleteitem,
  togglepacked,
}) {
  return (
    <li style={packed === true ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => togglepacked(id)}
      />
      {quantity + " "}
      {description}
      <button onClick={() => handledeleteitem(id)}>❌</button>
    </li>
  );
}
