import React, { useState, useEffect, useRef } from "react";
import Trie from "./Trie";
import "./SearchComponent.css";

const SearchComponent = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const trieRef = useRef(new Trie());

  useEffect(() => {
    // Insert all items into the Trie
    items.forEach((item) => trieRef.current.insert(item.toLowerCase()));
  }, [items]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    if (query === "") {
      setFilteredItems([]);
    } else {
      const results = trieRef.current.searchPrefix(query);
      setFilteredItems(results);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
