import {FaRegStar} from "react-icons/fa"
const Star = ({classname,onclick}) => {
  return(
    <div className="icon">
    <FaRegStar className={classname} onClick={onclick}/>
    </div>
  )
}

export default Star;
