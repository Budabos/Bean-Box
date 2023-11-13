import React from "react";

const SortBar = ({ sortBy, setSortBy }) => {
  const options = [
    {
      name: "Default",
      value: "default",
    },
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Category",
      value: "category",
    },
  ];

  return (
    <div className="tw-flex tw-items-center tw-gap-5">
      <h3 className="tw-overflow-hidden">Sort by: </h3>
      <div class="btn-group" role="group" aria-label="Basic example">
        {options.map(({ name, value }) => (
          <button
            type="button"
            class={`btn btn-outline-primary ${
              sortBy === value ? "active" : ""
            }`}
            onClick={() => setSortBy(value)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortBar;
