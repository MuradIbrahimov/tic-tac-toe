import { useState } from "react";
import "../component/Player.css";

export default function Player({name, symbol}) {
   const [isEditing, setIsEditing] = useState(false);
   const [newName, setNewName] = useState(name);
    return (
      <li className="player">
        <span className="player-symbol"> {symbol}</span>
        <div className="player-row">
          {isEditing ? (
            <input className="player-input" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
          ) : (
            <span className="player-name"> {newName}</span>
          )}
          {isEditing ? (
            <button className="player-btn save-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>Save</button>   
          ) : (
            <button className="player-btn edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit</button>
          )}
        </div>
      </li>
    )
}