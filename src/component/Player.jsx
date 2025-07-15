export default function Player({name, symbol}) {
    return (
       <><li className="player">
        <span className="player-name"> {name}</span>
        <span className="player-symbol"> {symbol}</span>
      </li>
      <button>Edit</button>
      </> 
    )
}