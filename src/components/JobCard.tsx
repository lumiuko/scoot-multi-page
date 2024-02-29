import { Job } from '../types'
import Button from './Button'

type JobCardProps = {
  item: Job
}

export default function JobCard({ item }: JobCardProps) {
  return (
    <li className="p-8 pt-9 bg-snow text-dark-navy flex flex-col justify-between gap-4 text-center md:flex-row md:text-left md:items-center">
      <div className="space-y-1 md:space-y-2">
        <p className="text-body-2 leading-6 tracking-[-0.8px] font-mono font-bold md:text-h5 md:leading-h5 md:tracking-h5">{item.title}</p>
        <p className="md:leading-6">{item.location}</p>
      </div>
      <Button to={item.applyLink} text="Apply" isNative />
    </li>
  )
}
