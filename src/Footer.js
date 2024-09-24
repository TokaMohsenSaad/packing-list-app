import React from "react";
import "./App.css";

const Footer = ({ items }) => {
  const itemCount = items.length;
  const packedCount = items.filter((item) => item.isPacked).length;

  return (
    <footer className="footer">
      {itemCount === 0 ? (
        <p>You have no items yet.</p>
      ) : (
        <p>
          You have {itemCount} {itemCount === 1 ? "item" : "items"} and{" "}
          {packedCount} {packedCount === 1 ? "is" : "are"} packed.
        </p>
      )}
    </footer>
  );
};

export default Footer;
