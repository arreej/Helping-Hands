import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.campaignsAPI.category;
  const [sort, setSort] = state.campaignsAPI.sort;
  const [search, setSearch] = state.campaignsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="filter_menu">
      <div className="row">
        <span>Filters: </span>
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">All Campaigns</option>
          {categories.map((category) => (
            <option value={"category=" + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input
        style={{ marginTop: "26px" }}
        type="text"
        value={search}
        placeholder="Enter your search!"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      <div className="row sort">
        <span>Sort By: </span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Newest</option>
          <option value="sort=oldest">Oldest</option>
          {/* <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-amount_req'>Amount: Hight-Low</option>
                    <option value='sort=amount_req'>Amount: Low-Hight</option> */}
        </select>
      </div>
    </div>
  );
}

export default Filters;
