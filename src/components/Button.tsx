import React from 'react'

interface Props {
    children : string,
    color: string,

}

const Button = ({children, color} : Props) => {
  return (
    <button className={'btn btn-'+ color} >{children}</button>
  )
}

export default Button