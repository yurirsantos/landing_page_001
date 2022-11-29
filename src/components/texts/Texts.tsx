import React from 'react'

type typesTitle = {
  title: string
  colorTitle?: string
}

export function Title(props: typesTitle) {
  const styleTitle = 'text-5xl font-extralight '

  return <h1 className={styleTitle + props.colorTitle}>{props.title}</h1>
}

type typesParagraph = {
  paragraph: string
  colorParagraph?: string
}

export function Paragraph(props: typesParagraph) {
  const styleParagraph = 'text-xl font-light '

  return (
    <p className={styleParagraph + props.colorParagraph}>{props.paragraph}</p>
  )
}
