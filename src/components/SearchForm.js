import React, { useState } from "react";
import { setState } from "expect/build/jestMatchersObject";

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
  const [name, newName] = useState("")

  const handleInputChange = () => {
    setState(newName);
  }
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
