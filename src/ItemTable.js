import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const ItemTable = ({ items, togglePacked, removeItem }) => {
  return (
    <div className="table-container">
      <table className="item-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Count</th>
            <th>Packed</th>
            <th>Actions</th> {/* Added a column for actions */}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.isPacked}
                  onChange={() => togglePacked(index)}
                />
              </td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
