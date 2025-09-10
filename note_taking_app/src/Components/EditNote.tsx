import React from "react";
import { useNote } from "./NoteLayout";
import type { NoteData, Tag } from "../App";
import NoteForm from "./NoteForm";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
  const note = useNote();
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      
      <NoteForm
        title={note.title}
        textBody={note.textBody}
        tags={note.tags}
        availableTags={availableTags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
      />
    </>
  );
};

export default EditNote;
