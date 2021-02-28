import "./notes.css";

function handleColorChange(note, colorVlaue) {
  console.log(note, colorVlaue);
}
export function Notes({
  notes,
  triggerUnpinNote,
  triggerDeleteNote,
  triggerColorChange
}) {
  return (
    <>
      <h1>Pinned Notes</h1>
      <div className="div--pinned">
        {notes.map((note, index) => {
          if (note.isPinned) {
            return (
              <>
                <div
                  key={index}
                  className="note-card"
                  style={{ backgroundColor: note.bgColor }}
                >
                  <p>{note.title}</p>
                  <p>{note.desc}</p>
                  <h4> Tag : {note.tag}</h4>

                  <button onClick={(e) => triggerUnpinNote(note)}>
                    Unpin Note
                  </button>
                  <input
                    type="color"
                    onChange={(e) => triggerColorChange(note, e.target.value)}
                  />
                  <button onClick={(e) => triggerDeleteNote(note)}>
                    Delete
                  </button>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
