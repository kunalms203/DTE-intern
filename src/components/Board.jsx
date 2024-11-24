import  React , {useState} from 'react'
import "./board.css"
const Board = ({name}) => {
    const [arrow, setarrow] = useState(true);
    console.log(name)
  return (
    <div className='board' style={arrow?{left:"-300px"}:{left:"0px"}}>
      <div className="top">
        <span>Journey Board</span>
        <img src="arrow.png" alt="" onClick={()=>{setarrow(prev=>!prev)}} style={!arrow?{transform: "scaleX(-1)"}:{}} />
      </div>
      <div className="center">
      <div >
            <ul>
                <li style={{fontSize:"16px" , fontWeight:"600"}}>Explore the world of management</li>
            </ul>
        </div>
        <span>
          <ul>
        {name ? (
          name.map((task, index) => (
            <li>{task.asset_title}</li>
          ))
        ) : (
          <p>Loading...</p>
        )}
        </ul>
        </span>
      </div>
    </div>
  )
}

export default Board
