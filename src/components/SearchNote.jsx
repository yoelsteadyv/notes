// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTyes from "prop-types";
import { Input } from "@material-tailwind/react";

function SearchNote({ onSearch }) {
  return (
    <section className="py-4">
      <div className="w-[13rem]">
        <Input
          label="Search"
          size="sm"
          type="text"
          placeholder="Search title..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </section>
  );
}

SearchNote.propTypes = {
  onSearch: PropTyes.func.isRequired,
};

export default SearchNote;
