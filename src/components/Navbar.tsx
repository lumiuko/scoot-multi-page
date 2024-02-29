import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

import Button from './Button'
import NavLinks from './NavLinks'

import { fade, slide } from '../utils/transition'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  function toggleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  useEffect(() => {
    scrollTo(0, 0)
    document.documentElement.className = isMenuOpen ? 'no-scroll' : ''
  }, [isMenuOpen])

  return (
    <>
      <nav className="px-8 py-[1.375rem] bg-white relative z-30 md:px-10">
        <div className="max-w-container mx-auto flex justify-center items-center gap-[3.625rem] relative font-mono font-bold md:justify-start">
          <button
            onClick={toggleMenu}
            className="absolute left-0 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="menu"
          >
            {isMenuOpen ? (
              <img src="/icons/close.svg" alt="Close menu" aria-hidden="true" />
            ) : (
              <img src="/icons/hamburger.svg" alt="Hamburger menu" aria-hidden="true" />
            )}
          </button>
          <Link to="." aria-label="Homepage" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo.svg" alt="Scoot logo" className="h-[20px] md:h-[28px]" />
          </Link>
          <div className="hidden md:flex flex-1 justify-between items-center leading-6">
            <ul className="hidden md:flex gap-8 mr-auto">
              <NavLinks />
            </ul>
            <Button to="#download" text="Get Scootin" isNative />
          </div>
        </div>
      </nav>

      <Transition show={isMenuOpen}>
        <Transition.Child as={Fragment} {...fade}>
          <div className="fixed w-full z-20 h-dvh top-0 left-0 bg-overlay md:hidden"></div>
        </Transition.Child>
        <Transition.Child as={Fragment} {...slide}>
          <div className="h-[calc(100dvh-4rem)] fixed z-20 top-16 left-0 flex flex-col justify-between px-8 pt-16 pb-6 bg-navy text-light-gray w-full max-w-[256px] text-body-2 leading-body-2 font-mono font-bold md:hidden">
            <ul className="flex flex-col gap-6">
              <NavLinks onClick={() => setIsMenuOpen(false)} />
            </ul>
            <Button to="#download" text="Get Scootin" isNative onClick={() => setIsMenuOpen(false)} />
          </div>
        </Transition.Child>
      </Transition>
    </>
  )
}
