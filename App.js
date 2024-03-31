import { useState } from "react";
import Form from "./form.js";
import Head from "./head.js";
import List from "./list.js";
import Stats from "./stats.js";

export default function App() {
  const [item, Setitem] = useState([]);

  function handleadditem(item) {
    Setitem((items) => [...items, item]);
  }
  function handledeleteitem(id) {
    Setitem((items) => items.filter((item) => item.id !== id));
  }

  function togglepacked(id) {
    Setitem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleclearlist() {
    const confirm = window.confirm("are you sure you want to clear list");

    if (confirm) Setitem([]);
  }
  return (
    <div className="app">
      <Head />
      <Form handleadditem={handleadditem} />
      <List
        items={item}
        handledeleteitem={handledeleteitem}
        togglepacked={togglepacked}
        handleclearlist={handleclearlist}
      />
      <Stats item={item} />
    </div>
  );
}
