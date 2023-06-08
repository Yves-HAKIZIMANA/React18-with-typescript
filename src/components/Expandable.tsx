import React, { useState } from 'react'

interface Props{
    children: string;
    maxChars : number;
}

const Expandable = ({children, maxChars = 100}: Props) => {
    const [ isExpanded, setIsExpanded] = useState(false)
    if(children.length <= maxChars) return <p>{children}</p>
    const text = isExpanded ? children : children.substring(0, maxChars)
  return (
    <div>
        <p>{text}</p>
        <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Less" : "More"}</button>
    </div>
  )
}

export default Expandable