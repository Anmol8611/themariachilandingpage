import React from 'react'

const Button = (props) => {
  return (
    <button className={`py-3 px-16 font-bold text-center bg-[var(${props.bg})] rounded-3xl hover:shadow-2xl`}>
        {props.text}
    </button>
  )
}

export default Button