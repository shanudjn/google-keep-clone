import { useState } from "react";
import "./Tags.css";
export function Tags({ tags, triggerAddTag, triggerFilter }) {
  const [tag, setTag] = useState("");
  return (
    <div className="div--tags">
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => {
          return <li onClick={(e) => triggerFilter(tag)}>{tag}</li>;
        })}
      </ul>
      <input placeholder="Add Tag" onChange={(e) => setTag(e.target.value)} />
      <button onClick={(e) => triggerAddTag(tag)}>+ Add Tags</button>
    </div>
  );
}
