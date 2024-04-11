/* eslint-disable no-unused-vars */
import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { FiSlash } from "react-icons/fi";

function NoteItemList({ notes }) {
  if (!notes.length) {
    return (
      <section className="flex justify-center min-h-[31rem]">
        <div className="flex flex-col items-center justify-center">
          <FiSlash className="text-5xl " />
          <p className="text-center">EMPTY</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[31rem] flex flex-wrap gap-4 p-6 flex-grow border-t-[1px] border-black place-content-center">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
        />
      ))}
    </section>
  );
}

NoteItemList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteItemList;
