import "./styles.css";
import Form from "./components/form";
import { Notes } from "./components/notes";
import { UnpinnedNotes } from "./components/unpinnedNotes";
import { Tags } from "./components/Tags";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([
    {
      title: "First Title",
      desc:
        "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:",
      bgColor: "",
      tag: "workout",
      isPinned: true
    },
    {
      title: "Second Title",
      desc:
        "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:",
      bgColor: "",
      tag: "college",
      isPinned: true
    },
    {
      title: "Third Title",
      desc:
        "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:",
      bgColor: "white",
      tag: "workout",
      isPinned: false
    },
    {
      title: "Fourth Title",
      desc:
        "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:",
      bgColor: "white",
      tag: "workout",
      isPinned: true
    },
    {
      title: "Fifth Title",
      desc:
        "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:",
      bgColor: "white",
      tag: "workout",
      isPinned: false
    }
  ]);
  const [tags, setTags] = useState(["workout", "college", "personal"]);

  function handleSubmit(newNote) {
    setNotes([...notes, newNote]);
  }
  function handleUnpinNote(note) {
    note.isPinned = !note.isPinned;

    setNotes([...notes]);
  }
  function handlePinNote(note) {
    note.isPinned = !note.isPinned;
    setNotes([...notes]);
  }
  function handleDeleteNote(note) {
    let remainingNotes = notes.filter(
      (noteItem) => noteItem.title !== note.title
    );
    setNotes(remainingNotes);
  }
  function handleColorChange(note, bgColor) {
    console.log(note, bgColor);
    note.bgColor = bgColor;
    setNotes([...notes]);
  }
  function handleAddTag(newTag) {
    console.log(newTag);
    setTags([...tags, newTag]);
  }
  function filterNotes(tag) {
    console.log(tag);
    let filteredNotes = notes.filter((noteItem) => noteItem.tag === tag);
    setNotes(filteredNotes);
  }

  return (
    <div className="App">
      <h1>Google Keep</h1>

      <div className="container">
        {" "}
        <div className="left">
          <Tags
            tags={tags}
            triggerAddTag={handleAddTag}
            triggerFilter={filterNotes}
          />
        </div>
        <div className="right">
          <Form triggerSubmit={handleSubmit} tags={tags} />
          <Notes
            notes={notes}
            triggerUnpinNote={handleUnpinNote}
            triggerDeleteNote={handleDeleteNote}
            triggerColorChange={handleColorChange}
          />
          <UnpinnedNotes
            notes={notes}
            triggerPinNote={handlePinNote}
            triggerDeleteNote={handleDeleteNote}
            triggerColorChange={handleColorChange}
          />
        </div>
      </div>
    </div>
  );
}
