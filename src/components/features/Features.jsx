import React from "react";
import Theme from "./Theme";
import Filter from "./Filter";
import Sort from "./Sort";

const Features = ({ handleFilterButton }) => {
  return (
    <div className="flex gap-3 lg:gap-5 md:justify-end overflow-x-auto pb-3 md:py-0">
      <Theme />
      <Filter handleFilterButton={handleFilterButton} />
      <Sort />
    </div>
  );
};

export default Features;
