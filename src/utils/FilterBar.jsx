import React from "react";

const FilterBar = ({ filterBy, setFilterBy }) => {
  const options = [
    {
      name: "Default",
      value: "default",
    },
    {
      name: "Beans",
      value: "Coffee Beans",
    },
    {
      name: "Drinks",
      value: "Coffee Drinks",
    },
  ];

  return (
    <div className="tw-flex tw-items-center tw-gap-5">
      <h3>Filter by: </h3>
      <div class="btn-group" role="group" aria-label="Basic example">
        {options.map(({ name, value }) => (
          <button
            type="button"
            class={`btn btn-outline-primary ${
              filterBy === value ? "active" : ""
            }`}
            onClick={() => setFilterBy(value)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
