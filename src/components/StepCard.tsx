type StepCardProps = {
  icon: string
  title: string
  text: string
}

export default function StepCard({ icon, text, title }: StepCardProps) {
  return (
    <article className="flex-1 flex flex-col gap-6 items-center md:flex-row md:items-start md:gap-20 xl:flex-col xl:gap-10">
      <img src={icon} alt="" className="w-[56px] md:w-[96px]" />
      <div className="text-center md:text-left">
        <h3 className="font-mono font-bold text-dark-navy text-h6 leading-h6 tracking-h6 md:text-h5 md:leading-h5 md:tracking-h5">
          {title}
        </h3>
        <p className="mt-6 md:mt-7">{text}</p>
      </div>
    </article>
  )
}
