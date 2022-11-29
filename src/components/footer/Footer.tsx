import React from 'react'
import icon7 from '../../assets/icons/icon7.svg'
import icon8 from '../../assets/icons/icon8.svg'
import twitterImageWhite from '../../assets/twitterImageWhite.png'
import facebookImageWhite from '../../assets/facebookImageWhite.png'
import linkedinImageWhite from '../../assets/linkedinImageWhite.png'

export function Footer() {
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
  const itemsTomothy = [
    {
      title: 'Eleanor Edwards',
      link: '/'
    },
    {
      title: 'Ted Robertson',
      link: '/'
    },
    {
      title: 'Annette Russell',
      link: '/'
    },
    {
      title: 'Jennie Mckinney',
      link: '/'
    },
    {
      title: 'Gloria Richards',
      link: '/'
    }
  ]
  const itemsJaneBlack = [
    {
      title: 'Philip Jones',
      link: '/'
    },
    {
      title: 'Product',
      link: '/'
    },
    {
      title: 'Coleen Russell',
      link: '/'
    },
    {
      title: 'Marvin Hawkins',
      link: '/'
    },
    {
      title: 'Bruce Simmons',
      link: '/'
    }
  ]

  return (
    <footer className="bg-[#252B42] text-white p-5 mt-28">
      <div className="lg:flex lg:justify-center lg:items-center lg:gap-40 mt-10 mb-10">
        <div className="lg:mb-0 mb-10">
          <ul className="text-center">
            <li className="font-bold">Pages</li>
            {itemsMenu.map(itemMenu => {
              return (
                <li className="mt-5">
                  <a
                    href={itemMenu.link}
                    className="font-thin hover:font-normal"
                  >
                    {itemMenu.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="lg:mb-0 mb-10">
          <ul className="text-center">
            <li className="font-bold">Tomothy</li>
            {itemsTomothy.map(itemMenu => {
              return (
                <li className="mt-5">
                  <a
                    href={itemMenu.link}
                    className="font-thin hover:font-normal"
                  >
                    {itemMenu.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="lg:mb-0 mb-10">
          <ul className="text-center">
            <li className="font-bold">Jane Black</li>
            {itemsJaneBlack.map(itemMenu => {
              return (
                <li className="mt-5">
                  <a
                    href={itemMenu.link}
                    className="font-thin hover:font-normal"
                  >
                    {itemMenu.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <div className="lg:w-full w-[50%] lg:m-0 m-auto">
            <div className="flex justify-start items-center gap-5 mb-5 hover:scale-105 duration-200">
              <img src={icon7} />
              <h3>7480 Mockingbird Hill</h3>
            </div>

            <div className="flex justify-start items-center gap-5 mb-10 hover:scale-105 duration-200">
              <img src={icon8} />
              <h3>(49) 99999-9999</h3>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            <img
              src={twitterImageWhite}
              className="hover:scale-125 duration-200 cursor-pointer"
            />
            <img
              src={facebookImageWhite}
              className="hover:scale-125 duration-200 cursor-pointer"
            />
            <img
              src={linkedinImageWhite}
              className="hover:scale-125 duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
