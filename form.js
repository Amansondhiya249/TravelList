import { useState } from "react";

export default function Form({ handleadditem }) {
  const [description, SetDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submithandle(e) {
    e.preventDefault();

    if (!description) return;

    const newitem = {
      description: description,
      quantity: quantity,
      id: Date.now(),
      packed: false,
    };

    handleadditem(newitem);

    setQuantity(1);
    SetDescription("");
  }

  return (
    <form className="add-form" onSubmit={submithandle}>
      <h3>what do you need for your 😍 trip </h3>

      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="add item"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
      />

      <button>add</button>
    </form>
  );
}
