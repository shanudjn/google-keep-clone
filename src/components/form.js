import "./form.css";
import { useState } from "react";

export default function Form({ triggerSubmit, tags }) {
  const [pin, setPin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let newNote = {
      title: e.target[0].value,
      desc: e.target[1].value,
      bgColor: e.target[2].value,
      tag: e.target[3].value,
      isPinned: pin
    };
    console.log(newNote);
    triggerSubmit(newNote);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" />
      <textarea placeholder="Description" rows="2" cols="30" />
      <div className="task-info">
        <input type="color" className="color" />

        <select>
          {tags.map((tag) => {
            return <option value={tag}>{tag}</option>;
          })}
        </select>
        <input type="checkbox" onClick={(e) => setPin(!pin)} />
      </div>
      <button>Add Task</button>
    </form>
  );
}
