import { useState, useEffect } from "react";
import "../component/Player.css";

export default function Player({name, symbol , isActive , isChanged}) {
   const [isEditing, setIsEditing] = useState(false);
   const [newName, setNewName] = useState(name);

   // Update local state when name prop changes
   useEffect(() => {
     setNewName(name);
   }, [name]);

   const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing)
   }

   const handleSaveClick = () => {
    isChanged(symbol, newName)
    setIsEditing(false)
   }
    return (
      <li className={"player " + (isActive ? 'active' : '')} >
        <span className="player-symbol"> {symbol}</span>
        <div className="player-row">
          {isEditing ? (
            <input className="player-input" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
          ) : (
            <span className="player-name"> {newName}</span>
          )}
          {isEditing ? (
            <button className="player-btn save-btn" onClick={handleSaveClick}>Save</button>   
          ) : (
            <button className="player-btn edit-btn" onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </li>
    )
}