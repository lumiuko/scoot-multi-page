import Button from './Button'

type FeatureSectionProps = {
  title: string
  text: string
  image: string
  imageAlt?: string
  actionLink?: string
  buttonText?: string
  pattern: 'bottom-left-down' | 'bottom-left-up' | 'top-right-down' | 'top-left-down'
}

export default function FeatureSection({
  title,
  text,
  image,
  actionLink,
  pattern,
  imageAlt = '',
  buttonText = 'Learn More'
}: FeatureSectionProps) {
  return (
    <section className="group px-8 relative overflow-hidden md:px-10">
      <div className="max-w-container mx-auto flex flex-col justify-between items-center gap-14 xl:flex-row">
        <div
          className={`relative after:hidden md:after:block after:absolute after:top-0 after:-right-full after:translate-x-16 after:w-[445px] after:h-[445px] after:bg-circle before:absolute before:w-[735px] before:h-[150px] before:bg-no-repeat before:bg-cover before:z-10 group-even:after:-left-full group-even:after:-translate-x-16 xl:group-odd:order-1 pattern-${pattern}`}
        >
          <img src={image} alt={imageAlt} className="rounded-full w-full max-w-[311px] md:max-w-[445px]" />
        </div>
        <div className="flex flex-col items-center text-center md:max-w-[575px] xl:max-w-[445px] xl:items-start xl:text-left">
          <h2 className="text-h4 leading-h4 tracking-h4 font-mono font-bold text-dark-navy md:text-h2 md:leading-h2 md:tracking-h2 md:max-w-[457px]">
            {title}
          </h2>
          <p className="my-8 md:mt-10 xl:mt-6 md:mb-10">{text}</p>
          {actionLink && <Button to={actionLink} text={buttonText} />}
        </div>
      </div>
    </section>
  )
}
