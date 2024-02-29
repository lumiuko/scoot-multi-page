import Button from '../components/Button'
import Header from '../components/Header'

export default function Locations() {
  return (
    <>
      <Header page="Locations" />
      <main className="my-[4.5rem] px-8 md:px-10 md:mt-36 md:mb-[7.5rem] xl:my-[7.5rem]">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col items-center gap-10 relative mx-auto md:max-w-[689px] xl:max-w-full">
            <picture>
              <source srcSet="/images/world-map-desktop.png" media="(min-width: 1110px)" />
              <source srcSet="/images/world-map-tablet.png" media="(min-width: 768px)" />
              <img src="/images/world-map-mobile.png" alt="World map with location points." className="w-full" />
            </picture>
            <ul className="w-full flex flex-col gap-4 text-center text-h5 leading-h5 tracking-h5 text-dark-navy font-mono font-bold md:block md:absolute md:left-0 md:top-0 md:w-full md:h-full md:text-[0.8125rem] md:leading-8 xl:text-h5 xl:leading-h5">
              <li className="py-[1.375rem] bg-light-yellow md:bg-yellow md:absolute md:w-full md:max-w-[120px] md:top-[52px] md:left-[98px] md:py-0 xl:max-w-[190px] xl:py-[1.375rem] xl:left-[147px] xl:top-[71px] relative location-item">
                New York
              </li>
              <li className="py-[1.375rem] bg-light-yellow md:bg-yellow md:absolute md:w-full md:max-w-[120px] md:top-[25px] md:left-[243px] md:py-0 xl:max-w-[190px] xl:py-[1.375rem] xl:left-[393px] xl:top-[18px] relative location-item">
                London
              </li>
              <li className="py-[1.375rem] bg-light-yellow md:bg-yellow md:absolute md:w-full md:max-w-[120px] md:top-[169px] md:left-[480px] md:py-0 xl:max-w-[190px] xl:py-[1.375rem] xl:left-[856px] xl:top-[78px] relative location-item">
                Jakarta
              </li>
              <li className="py-[1.375rem] bg-light-yellow md:bg-yellow md:absolute md:w-full md:max-w-[120px] md:top-[65px] md:left-[530px] md:py-0 xl:max-w-[190px] xl:py-[1.375rem] xl:left-[779px] xl:top-[251px] relative location-item">
                Yokohama
              </li>
            </ul>
          </div>

          <section className="mt-[4.5rem] flex flex-col gap-8 items-center text-center md:mt-16 md:gap-10 xl:mt-[7.5rem] xl:flex-row xl:text-left">
            <h2 className="flex-1 text-h4 leading-h4 tracking-h4 font-mono font-bold text-dark-navy md:text-h2 md:leading-h2 md:tracking-h2 md:max-w-[457px] xl:max-w-[350px]">
              Your City Not Listed?
            </h2>
            <p className="md:max-w-[575px] xl:max-w-[445px] xl:mr-auto">
              If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel
              free to message us by clicking the link or messaging us on social.
            </p>
            <Button to="#" text="Message Us" />
          </section>
        </div>
      </main>
    </>
  )
}
