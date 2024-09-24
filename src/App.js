import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ItemAdder from "./ItemAdder";
import ItemTable from "./ItemTable";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [sortOption, setSortOption] = useState("none"); // Default sorting option

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const togglePacked = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, isPacked: !item.isPacked } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const clearList = () => {
    setItems([]);
  };

  // Sort items based on the selected option
  const sortedItems = () => {
    if (sortOption === "item") {
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortOption === "count") {
      return [...items].sort((a, b) => b.count - a.count);
    }
    return items;
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <ItemAdder addItem={addItem} />
        <ItemTable
          items={sortedItems()}
          togglePacked={togglePacked}
          removeItem={removeItem}
        />
      </div>
      <div className="sort-controls">
        <select onChange={handleSortChange} value={sortOption}>
          <option value="none">Sort by...</option>
          <option value="item">Item Name</option>
          <option value="count">Item Count</option>
        </select>
        <button className="clear-btn" onClick={clearList}>
          Clear List
        </button>
      </div>
      <Footer items={items} />
    </div>
  );
}

export default App;
