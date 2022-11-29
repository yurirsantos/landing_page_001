import React from 'react'

type typesButtonMainBlue = {
  title: string
  link: string
  onClick?: any
}

export function ButtonMainBlue(props: typesButtonMainBlue) {
  return (
    <a href={props.link}>
      <button
        onClick={props.onClick}
        className="bg-[#2091F9] lg:h-[50px] lg:w-[220px] h-[35px] w-[190px] rounded-full hover:bg-[#2091F9]/90 hover:scale-105 duration-200 lg:mt-10 mt-5 text-white"
      >
        {props.title}
      </button>
    </a>
  )
}

export function ButtonMainWhite(props: typesButtonMainBlue) {
  return (
    <a href={props.link}>
      <button
        onClick={props.onClick}
        className="bg-white lg:h-[50px] lg:w-[220px] h-[35px] w-[190px] rounded-full hover:scale-105 duration-200 lg:mt-10 mt-5 text-[#2091F9]"
      >
        {props.title}
      </button>
    </a>
  )
}
