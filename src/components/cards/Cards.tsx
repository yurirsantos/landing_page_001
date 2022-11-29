import React from 'react'
import { ButtonMainBlue, ButtonMainWhite } from '../buttons/Buttons'

type typesCardMain = {
  title: string
  paragraph: string
  icon: any
}

export function CardMain(props: typesCardMain) {
  return (
    <div className="lg:h-[290px] lg:w-[290px] p-4 w-full text-center rounded-lg hover:scale-105 hover:bg-gray-100 duration-200">
      <div className="flex justify-center items-center">
        <img src={props.icon} className="flex justify-center items-center" />
      </div>
      <div className="font-bold text-2xl mt-5 mb-5 flex justify-center items-center">
        {props.title}
      </div>
      <div className="font-extralight text-lg flex justify-center items-center">
        {props.paragraph}
      </div>
    </div>
  )
}

type typesCardPricingAll = {
  title: string
  paragraph: string
  pricing: number
  moneySing: string
  formPayment: string
  resources: string
}

export function CardPricingWhite(props: typesCardPricingAll) {
  return (
    <div className="bg-white text-center w-[400px] h-[800px] p-5 rounded-md hover:scale-105 duration-200 lg:mt-0 lg:mb-0 mt-10 mb-10">
      <h3 className="font-bold text-2xl mb-5">{props.title}</h3>
      <p className="font-thin text-lg mb-10">{props.paragraph}d</p>
      <div className="flex justify-center">
        <span className="font-bold text-[6rem]">{props.pricing}</span>
        <div className="relative top-10 text-start ml-3">
          <div className="font-bold text-xl">{props.moneySing}</div>
          <div className="font-thin text-lg">{props.formPayment}</div>
        </div>
      </div>

      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>
      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>
      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>
      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>
      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>

      <ButtonMainBlue title="Order Now" link="/" />
    </div>
  )
}

export function CardPricingBlue(props: typesCardPricingAll) {
  return (
    <div className="bg-[#2091F9] text-center w-[400px] h-[900px] p-5 rounded-md hover:scale-105 duration-200 text-white lg:mt-0 lg:mb-0 mt-10 mb-10">
      <h3 className="font-bold text-2xl mb-5">{props.title}</h3>
      <p className="font-thin text-lg mb-10">{props.paragraph}d</p>
      <div className="flex justify-center">
        <span className="font-bold text-[6rem]">{props.pricing}</span>
        <div className="relative top-10 text-start ml-3">
          <div className="font-bold text-xl">{props.moneySing}</div>
          <div className="font-thin text-lg">{props.formPayment}</div>
        </div>
      </div>

      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>
      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>
      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>
      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>
      <h4 className="mt-10 mb-10 font-thin text-lg">{props.resources}</h4>

      <ButtonMainWhite title="Order Now" link="/" />
    </div>
  )
}
