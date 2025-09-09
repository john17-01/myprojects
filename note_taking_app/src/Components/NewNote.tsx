import React from "react";
import NoteForm from "./NoteForm";
import type { NoteData, Tag } from "../App";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};
const NewNote = ({ onSubmit }: NewNoteProps) => {
  return (
    <div>
      <h1>NewNote</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewNote;
