import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NotePage = ({ match }) => {
    const { id } = useParams
  let noteId = id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}/`);
    let data = await response.json();
    setNote(data);
  };

  return (
    <div>
      <h1>{note?.body}</h1>
    </div>
  );
};

export default NotePage;
