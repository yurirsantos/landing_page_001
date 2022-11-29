import React from 'react'

type typesInputMainAll = {
  placeholder: string
  stylePlusInputMain?: string
}

export function InputMain(props: typesInputMainAll) {
  const styleInputMain =
    'bg-gray-100 p-4 pl-6 rounded-full placeholder:text-sm lg:mr-5 lg:w-[400px] w-[360px] focus:outline-none'

  return (
    <>
      <input
        placeholder={props.placeholder}
        className={styleInputMain + props.stylePlusInputMain}
      />
    </>
  )
}

export function TextAreaMain(props: typesInputMainAll) {
  const styleTextAreaMain =
    'bg-gray-100 p-4 pl-6 rounded-2xl placeholder:text-sm h-[200px] lg:w-[400px] w-[360px] focus:outline-none'

  return (
    <div>
      <textarea
        placeholder={props.placeholder}
        className={styleTextAreaMain + props.stylePlusInputMain}
      />
    </div>
  )
}
