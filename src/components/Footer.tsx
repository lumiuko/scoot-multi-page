import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

export default function Footer() {
  return (
    <div className="bg-navy px-8 pt-16 pb-[5.5rem] md:py-[2.125rem]">
      <div className="max-w-container mx-auto flex flex-col items-center md:flex-row">
        <Link to="/" aria-label="Homepage">
          <img src="/logo-light.svg" alt="Scoot light logo" className="h-[28px]" />
        </Link>
        <ul className="mt-10 flex flex-col gap-4 text-center font-mono font-bold md:mt-0 md:flex-row md:ml-[3.625rem] md:mr-auto md:gap-8">
          <NavLinks />
        </ul>
        <ul className="mt-[5.25rem] flex items-center gap-6 md:mt-0">
          <li>
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook icon" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.svg" alt="Twitter icon" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram icon" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
