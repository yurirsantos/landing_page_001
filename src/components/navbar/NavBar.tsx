import React, { useState } from 'react'
import logoImage from '../../assets/logoImage.png'
import twitterImageWhite from '../../assets/twitterImageWhite.png'
import facebookImageWhite from '../../assets/facebookImageWhite.png'
import linkedinImageWhite from '../../assets/linkedinImageWhite.png'
import iconMenu from '../../assets/icons/iconMenu.png'

export function NavBar() {
  const itemsMenu = [
    {
      title: 'Home',
      link: '#home'
    },
    {
      title: 'Product',
      link: '#product'
    },
    {
      title: 'Pricing',
      link: '#pricing'
    },
    {
      title: 'About',
      link: '#about'
    },
    {
      title: 'Contact',
      link: '#contact'
    }
  ]
  const imagesSocial = [
    {
      image: twitterImageWhite
    },
    {
      image: facebookImageWhite
    },
    {
      image: linkedinImageWhite
    }
  ]
  const styleLiMenu =
    'hover:font-normal lg:block lg:mt-0 lg:mb-0 mt-2 mb-2 lg:p-0 p-2 text-white lg:hover:bg-transparent hover:bg-white lg:hover:text-white hover:text-black rounded-md '

  const [menuHidden, setMenuHidden] = useState('hidden')

  return (
    <>
      <nav className="lg:relative -mb-32 z-30 fixed w-full">
        <ul className="lg:flex lg:justify-start lg:items-center font-thin lg:gap-14 lg:text-[1.3rem] text-xl p-3 text-center lg:ml-60 lg:bg-transparent bg-[#252B42]">
          {itemsMenu.map(itemMenu => {
            return (
              <li className={styleLiMenu + menuHidden}>
                <a href={itemMenu.link}>{itemMenu.title}</a>
              </li>
            )
          })}
          <ul className="flex justify-between items-center">
            <li className="ml-5">
              <img src={logoImage} />
            </li>
            <li className="mr-5">
              <img
                src={iconMenu}
                className="lg:hidden block cursor-pointer"
                onClick={() => {
                  if (menuHidden == 'hidden') {
                    setMenuHidden('block')
                  } else {
                    setMenuHidden('hidden')
                  }
                }}
              />
            </li>
          </ul>
          <ul className="lg:flex lg:justify-start lg:items-center lg:ml-48 lg:gap-5 hidden">
            {imagesSocial.map(imageSocial => {
              return (
                <li>
                  <img
                    src={imageSocial.image}
                    className="hover:scale-125 cursor-pointer duration-200"
                  />
                </li>
              )
            })}
          </ul>
        </ul>
      </nav>
    </>
  )
}
