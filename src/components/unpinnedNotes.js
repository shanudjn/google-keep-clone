export function UnpinnedNotes({
  notes,
  triggerPinNote,
  triggerDeleteNote,
  triggerColorChange
}) {
  return (
    <>
      <h1>Unpinned</h1>
      {notes.map((unpinnedNote, index) => {
        if (!unpinnedNote.isPinned) {
          return (
            <>
              <div
                key={index}
                className="note-card"
                style={{ backgroundColor: unpinnedNote.bgColor }}
              >
                <p>{unpinnedNote.title}</p>
                <p>{unpinnedNote.desc}</p>
                <h4> Tag : {unpinnedNote.tag}</h4>

                <button onClick={(e) => triggerPinNote(unpinnedNote)}>
                  Pin Note
                </button>
                <input
                  type="color"
                  onChange={(e) =>
                    triggerColorChange(unpinnedNote, e.target.value)
                  }
                />
                <button onClick={(e) => triggerDeleteNote(unpinnedNote)}>
                  Delete
                </button>
              </div>
            </>
          );
        }
      })}
    </>
  );
}
