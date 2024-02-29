import { Link } from 'react-router-dom'

type ButtonProps = {
  to: string
  text: string
  isNative?: boolean
  onClick?: () => void
}

export default function Button({ to, text, isNative, onClick }: ButtonProps) {
  const classNames =
    'inline-block bg-yellow text-white text-center leading-6 min-w-[180px] px-4 py-3 border-[3px] border-yellow font-bold font-mono hover:bg-transparent hover:text-yellow transition-all'

  return isNative ? (
    <a href={to} className={classNames} onClick={onClick}>
      {text}
    </a>
  ) : (
    <Link to={to} className={classNames} onClick={onClick}>
      {text}
    </Link>
  )
}
