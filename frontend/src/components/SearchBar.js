import React from "react";
import { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataObj = {
      searchInput: searchInput
    }
    axios.post("http://localhost:4000/getVideo", dataObj).then(() => {
      console.log(dataObj);
      setSearchInput("");
    });
  };

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 col-sm-10">
          <form onSubmit={handleSubmit} class="d-flex">
            <input
              id="searchInput"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <button class="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
