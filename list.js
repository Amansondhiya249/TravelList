import { useState } from "react";
import Item from "./item.js";
export default function List({
  items,
  handledeleteitem,
  togglepacked,
  handleclearlist,
}) {
  const [sort, setsortby] = useState("input");

  let sorteditem;

  if (sort === "input") sorteditem = items;

  if (sort === "description")
    sorteditem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sorteditem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sorteditem.map((item) => (
          <Item
            description={item.description}
            quantity={item.quantity}
            handledeleteitem={handledeleteitem}
            id={item.id}
            packed={item.packed}
            togglepacked={togglepacked}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sort} onChange={(e) => setsortby(e.target.value)}>
          <option value={"input"}>sort by input order</option>
          <option value={"description"}>sort by description</option>
          <option value={"packed"}>sort by packed status</option>
        </select>

        <button onClick={handleclearlist}>Clearlist</button>
      </div>
    </div>
  );
}
