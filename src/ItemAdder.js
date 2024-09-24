import React, { useState } from "react";
import "./App.css";

const ItemAdder = ({ addItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemCount, setItemCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim()) {
      addItem({ name: itemName, count: itemCount, isPacked: false });
      setItemName("");
      setItemCount(1);
    }
  };

  return (
    <div className="item-adder">
      <p>What do you need for your trip?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item name"
          required
        />
        <select
          value={itemCount}
          onChange={(e) => setItemCount(Number(e.target.value))}
        >
          {[...Array(10).keys()].map((number) => (
            <option key={number + 1} value={number + 1}>
              {number + 1}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ItemAdder;
