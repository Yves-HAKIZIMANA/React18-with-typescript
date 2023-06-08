import React, { useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from 'react-icons/ai';

interface Props {
    onSelect : () => void;
}




const Like = ({onSelect} : Props) => {

    const [status, setStatus] = useState(false)
    const handleClick = () => {
        setStatus(!status)
        onSelect()
    }

  return (
    <div>
      
      {status ? <AiFillHeart color="red" size={30} onClick={handleClick} /> : <AiOutlineHeart size={30} onClick={handleClick}  /> }
    </div>
  );
}

export default Like