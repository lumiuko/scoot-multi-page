import { Link } from 'react-router-dom'

type ButtonProps = {
  to: string
  text: string
  isNative?: boolean
}

export default function Button({ to, text, isNative }: ButtonProps) {
  const classNames =
    'inline-block bg-yellow text-white text-center leading-6 min-w-[180px] px-4 py-3 border-[3px] border-yellow font-bold font-mono hover:bg-transparent hover:text-yellow transition-all'

  return isNative ? (
    <a href={to} className={classNames}>
      {text}
    </a>
  ) : (
    <Link to={to} className={classNames}>
      {text}
    </Link>
  )
}
