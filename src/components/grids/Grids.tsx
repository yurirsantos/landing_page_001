import React from 'react'

type typesGridTwoElements = {
  children: any
}

export function GridTwoElements(props: typesGridTwoElements) {
  return (
    <div className="lg:flex lg:justify-center lg:items-center gap-10 mt-32">
      {props.children}
    </div>
  )
}
