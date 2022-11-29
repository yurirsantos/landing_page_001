import React from 'react'
import { ButtonMainBlue } from '../../components/buttons/Buttons'
import {
  CardMain,
  CardPricingBlue,
  CardPricingWhite
} from '../../components/cards/Cards'
import { NavBar } from '../../components/navbar/NavBar'

import image from '../../assets/image.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.svg'
import googleImage from '../../assets/googleImage.png'
import amazonImage from '../../assets/amazonImage.png'
import uberImage from '../../assets/uberImage.png'
import microsoftImage from '../../assets/microsoftImage.png'
import IMBImage from '../../assets/IMBImage.png'
import mapImage from '../../assets/mapImage.png'
import personImage from '../../assets/personImage.png'
import macbookImage from '../../assets/macbookImage.png'
import twitterImage from '../../assets/twitterImage.png'
import facebookImage from '../../assets/facebookImage.png'
import linkedinImage from '../../assets/linkedinImage.png'
import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'
import icon5 from '../../assets/icons/icon5.svg'
import icon6 from '../../assets/icons/icon6.svg'
import { Paragraph, Title } from '../../components/texts/Texts'
import { GridTwoElements } from '../../components/grids/Grids'
import { InputMain, TextAreaMain } from '../../components/inputs/Inputs'
import { Footer } from '../../components/footer/Footer'

export function Home() {
  const cardServices = [
    {
      icon: icon1,
      title: 'OpenType features Variable fonts',
      paragraph:
        'Slate helps you see how many more dys you need to work to reach your financial goal.'
    },
    {
      icon: icon2,
      title: 'Design with real data',
      paragraph:
        'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
      icon: icon3,
      title: 'Fastest way to take action',
      paragraph:
        'Slate helps you see how many more days you need to work to reach your financial goal.'
    }
  ]
  const clientsImages = [
    {
      image: googleImage
    },
    {
      image: amazonImage
    },
    {
      image: microsoftImage
    },
    {
      image: uberImage
    }
  ]
  const imagesSocial = [
    {
      image: twitterImage
    },
    {
      image: facebookImage
    },
    {
      image: linkedinImage
    }
  ]

  return (
    <>
      <div id="home">
        <NavBar />
        <img
          src={image}
          className="w-full lg:h-[780px] h-[450px] filter brightness-75"
        />

        <div className="relative lg:-mt-[420px] -mt-[280px] text-white text-center lg:pl-20 lg:pr-20 pl-10 pr-10">
          <h1 className="font-extrabold lg:text-[5rem] text-2xl mb-10">
            The best products start with Figma
          </h1>
          <p className="lg:text-lg text-sm font-normal">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
          <ButtonMainBlue title="Try For Free" link="/" />
        </div>
      </div>

      <div className="lg:pl-20 lg:pr-20 pl-10 pr-10">
        <div id="product" className="lg:mt-[370px] mt-[170px] text-center">
          <Title title="Feature" />
          <div className="mt-5">
            <Paragraph paragraph="Most calendars are designed for teams." />
            <Paragraph paragraph="Slate is designed for freelancers" />
          </div>
        </div>

        <div className="lg:flex lg:col-span-3 lg:justify-center gap-20 mt-20">
          {cardServices.map(cardService => {
            return (
              <CardMain
                title={cardService.title}
                paragraph={cardService.paragraph}
                icon={cardService.icon}
              />
            )
          })}
        </div>

        <div className="flex justify-center items-center">
          <img
            src={image2}
            className="lg:w-[900px] w-[400px] mt-10 hover:scale-105 duration-200"
          />
        </div>

        <GridTwoElements>
          <div className="lg:text-start text-center">
            <Title title="Fast way to organize" />

            <div className="mt-5 mb-5">
              <Paragraph paragraph="Most calendars are designed for teams." />
              <Paragraph paragraph="Slate is designed for freelancers" />
            </div>
            <div className="lg:flex lg:justify-start lg:items-start">
              <ButtonMainBlue title="Try For Free" link="/" />
            </div>
          </div>

          <div className="lg:mt-0 mt-10">
            <img src={macbookImage} className="hover:scale-105 duration-200" />
          </div>
        </GridTwoElements>

        <GridTwoElements>
          <div>
            <img src={image3} className="hover:scale-105 duration-200" />
          </div>

          <div className="lg:text-start text-center mt-10">
            <p className="font-bold">At your fingertips</p>
            <Title title="Lightning fast prototyping" />

            <div className="mt-10">
              <p className="font-bold">Subscribe to our Newsletter</p>
              <p>Available exclusivery on Figmaland</p>
            </div>

            <div className="lg:mt-0 mt-10">
              <InputMain placeholder="Your E-mail" />
              <ButtonMainBlue title="Subscribe" link="/" />
            </div>
          </div>
        </GridTwoElements>

        <div>
          <div className="text-center lg:mb-10 mt-32">
            <div className="mb-5">
              <Title title="Partners" />
            </div>
            <Paragraph paragraph="Most calendars are designed for teams." />
            <Paragraph paragraph="Slate is designed for freelancers" />
          </div>

          <div className="lg:flex lg:justify-center lg:items-center lg:mt-0 mt-10 lg:mb-0 mb-10">
            {clientsImages.map(clientImage => {
              return (
                <img
                  src={clientImage.image}
                  className="lg:hover:scale-125 hover:scale-110 duration-200 lg:w-max lg:h-40 w-full"
                />
              )
            })}
          </div>

          <div className="lg:flex lg:justify-center lg:items-center text-center">
            <ButtonMainBlue title="Try For Free" link="" />
          </div>
        </div>

        <div className="text-center mt-32">
          <Title title="Testimonials" />

          <div className="flex justify-center items-center lg:mt-20 lg:mb-20 mt-10 mb-10">
            <img src={IMBImage} className="hover:scale-105 duration-200" />
          </div>

          <p className="text-2xl font-extralight italic">
            " Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule. "
          </p>

          <div className="flex justify-center items-center mt-10 hover:scale-105 duration-200">
            <div className="mr-5">
              <img src={personImage} className="lg:h-20 lg:w-20" />
            </div>
            <div className="text-start">
              <h3 className="font-normal text-lg">Organize across</h3>
              <h3 className="font-thin text-md text-gray-900">Ui designer</h3>
            </div>
          </div>
        </div>
      </div>

      <div
        id="pricing"
        className="bg-[#252B42] text-center mt-32 lg:pl-20 lg:pr-20 lg:pb-40 pl-10 pr-10 pb-5"
      >
        <div className="pt-20">
          <Title title="Pricing" colorTitle="text-white" />
          <div className="mt-10">
            <Paragraph
              paragraph="Most calendars are designed for teams."
              colorParagraph="text-white"
            />
            <Paragraph
              paragraph="Slate is designed for freelancers"
              colorParagraph="text-white"
            />
          </div>

          <div className="lg:flex lg:justify-center lg:items-center lg:gap-24 mt-20 w-max m-auto">
            <CardPricingWhite
              title="FREE"
              paragraph="Organize across all pps by hand"
              moneySing="$"
              pricing={0}
              formPayment="Per Month"
              resources="Pricing Feature"
            />
            <CardPricingBlue
              title="STANDARD"
              paragraph="Organize across all pps by hand"
              moneySing="$"
              pricing={10}
              formPayment="Per Month"
              resources="Pricing Feature"
            />

            <CardPricingWhite
              title="BUSINESS"
              paragraph="Organize across all pps by hand"
              moneySing="$"
              pricing={99}
              formPayment="Per Month"
              resources="Pricing Feature"
            />
          </div>
        </div>
      </div>

      <div className="lg:pl-20 lg:pr-20 pl-10 pr-10 mt-32">
        <div id="contact" className="text-center mt-32">
          <Title title="Contact Us" />
          <div className="mt-5 mb-5">
            <Paragraph paragraph="Most calendars are designed for teams." />
            <Paragraph paragraph="Slate is designed for freelancers" />
          </div>

          <div className="lg:flex lg:justify-center lg:items-center lg:gap-20 lg:mt-20">
            <div className="bg-white lg:w-[450px] p-5 rounded-md shadow-2xl">
              <h2 className="mb-10 text-2xl">Contact Us</h2>

              <InputMain
                placeholder="Your Name"
                stylePlusInputMain="mt-5 mb-5"
              />

              <InputMain
                placeholder="Your E-mail"
                stylePlusInputMain="mt-5 mb-5"
              />

              <TextAreaMain placeholder="Your Message" />

              <div className="lg:text-start text-center">
                <ButtonMainBlue title="Send" link="/" />
              </div>
            </div>

            <div className="">
              <div className="lg:flex lg:justify-center lg:items-center lg:gap-10 mt-10 mb-10 ">
                <div className="lg:bg-white lg:hover:bg-white bg-gray-50 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl lg:pt-2 lg:pb-2 lg:p-0 p-3 lg:mt-0 lg:mb-0 mt-5 mb-5 rounded-2xl duration-200">
                  <div className="flex justify-center items-center mb-5">
                    <img src={icon4} />
                  </div>
                  <p className="font-thin lg:w-[300px]">
                    6386 Spring St undefined Anchorage, Georgia 12473 United
                    States
                  </p>
                </div>

                <div className="lg:bg-white lg:hover:bg-white bg-gray-50 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl lg:p-2 p-3 lg:mt-0 lg:mb-0 mt-5 mb-5 rounded-2xl duration-200">
                  <div className="flex justify-center items-center mb-5">
                    <img src={icon5} />
                  </div>
                  <p className="font-thin">(49) 99999-9999</p>
                </div>

                <div className="lg:bg-white lg:hover:bg-white bg-gray-50 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl lg:p-2 p-3 lg:mt-0 lg:mb-0 mt-5 mb-5 rounded-2xl duration-200">
                  <div className="flex justify-center items-center mb-5">
                    <img src={icon6} />
                  </div>
                  <p className="font-thin">example@mail.com</p>
                </div>
              </div>

              <div className="flex justify-center items-center lg:mt-10">
                <img
                  src={mapImage}
                  className="rounded-3xl hover:scale-105 duration-200"
                />
              </div>

              <div className="flex justify-start items-center lg:ml-20 mt-2 gap-3">
                {imagesSocial.map(imageSocial => {
                  return (
                    <img
                      src={imageSocial.image}
                      className="hover:scale-125 duration-200 cursor-pointer"
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
