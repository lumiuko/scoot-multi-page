import { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

type NavLinksProps = {
  onClick?: MouseEventHandler
}

const links = [
  {
    to: 'about',
    text: 'About'
  },
  {
    to: 'locations',
    text: 'Location'
  },
  {
    to: 'careers',
    text: 'Careers'
  }
]

export default function NavLinks({ onClick }: NavLinksProps) {
  return links.map(link => (
    <li key={link.to}>
      <Link to={link.to} onClick={onClick} className="hover:text-yellow transition-colors">
        {link.text}
      </Link>
    </li>
  ))
}
