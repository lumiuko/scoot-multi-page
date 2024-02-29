type ValuesCardProps = {
  id: number
  image: string
  imageAlt: string
  title: string
  text: string
}

export default function ValuesCard({ id, image, title, text, imageAlt }: ValuesCardProps) {
  return (
    <div className="flex-1 flex flex-col items-center max-w-[457px] mx-auto">
      <img src={image} className="w-full rounded-full max-w-[240px]" alt={imageAlt} />
      <p className="size-24 flex items-center justify-center bg-yellow rounded-full text-h5 leading-h5 tracking-h5 text-dark-navy font-mono font-bold -mt-11">
        {String(id).padStart(2, '0')}
      </p>
      <h3 className="mt-4 font-mono font-bold text-h5 leading-h5 tracking-h5 text-dark-navy md:mt-8">{title}</h3>
      <p className="mt-7 text-center">{text}</p>
    </div>
  )
}
