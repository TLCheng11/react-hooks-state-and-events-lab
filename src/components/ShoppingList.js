import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")
  function filterCategory(e) {
    setCategory(e.target.value)
  }

  function filterItem(items) {
    if (selectedCategory === "All") {
      return items.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))
    } else {
      return items.filter(item => item.category === selectedCategory).map(item => <Item key={item.id} name={item.name} category={item.category}/>)
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
        {filterItem(items)}
      </ul>
    </div>
  );
}

export default ShoppingList;
