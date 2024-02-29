import Button from '../components/Button'
import FeatureSection from '../components/FeatureSection'
import StepCard from '../components/StepCard'

export default function Homepage() {
  return (
    <>
      <header className="px-8 pt-[7.125rem] pb-[11.25rem] homepage-hero md:pt-[8.625rem] md:pb-[13.5rem] md:px-10 xl:py-[9.5rem]">
        <div className="text-center text-white flex flex-col items-center mx-auto md:max-w-[573px] xl:max-w-container xl:items-start xl:text-left">
          <h1 className="font-mono text-h3 leading-10 tracking-h3 font-bold md:text-h1 md:leading-h1 md:tracking-h1 xl:max-w-[500px]">
            Scooter sharing made simple
          </h1>
          <div className="mt-6 xl:max-w-[405px] xl:mt-10 xl:ml-24">
            <p className="mb-8 relative before:absolute before:hidden before:w-screen before:h-[15px] before:bg-yellow before:top-10 before:-left-14 before:-translate-x-full after:hidden after:absolute after:-right-10 after:translate-x-full after:top-10 after:w-[446px] after:h-[149px] after:bg-right-arrow after:bg-cover after:bg-no-repeat xl:before:block xl:after:block xl:mb-10">
              Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app
              to locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <Button to="#download" text="Get Scootin" isNative />
          </div>
        </div>
      </header>
      <main className="mb-[7.5rem] xl:mt-40 xl:mb-[12.5rem]">
        <section className="px-8 md:px-10">
          <h2 className="sr-only">How to get started</h2>
          <div className="pt-[7.5rem] mx-auto flex flex-col gap-12 md:max-w-[575px] md:gap-10 relative md:before:absolute md:before:w-[15px] md:before:h-full md:before:-top-12 md:before:left-[48px] md:before:bg-light-gray md:before:-z-10 md:before:-translate-x-1/2 xl:max-w-container xl:flex-row xl:gap-[1.875rem] xl:before:w-screen xl:before:h-[15px] xl:before:translate-x-0 xl:before:left-auto xl:before:-translate-y-1/2 xl:before:top-12 xl:before:right-[18.75rem] xl:pt-0">
            <StepCard
              icon="/icons/locate.svg"
              title="Locate with app"
              text="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
            />
            <StepCard
              icon="/icons/scooter.svg"
              title="Pick your scooter"
              text="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
            />
            <StepCard
              icon="/icons/ride.svg"
              title="Enjoy the ride"
              text="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
            />
          </div>
        </section>

        <div className="mt-[7.5rem] flex flex-col gap-[7.5rem] md:mt-36 xl:mt-[12.5rem] xl:gap-40">
          <FeatureSection
            title="Easy to use riding telemetry"
            text="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
            image="/images/telemetry.jpg"
            imageAlt="Woman holding a phone."
            actionLink="about"
            pattern="bottom-left-down"
          />
          <FeatureSection
            title="Coming to a city near you"
            text="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
            image="/images/near-you.jpg"
            imageAlt="City view."
            actionLink="locations"
            pattern="top-right-down"
          />
          <FeatureSection
            title="Zero hassle payments"
            text="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
            image="/images/payments.jpg"
            imageAlt="Man getting cash from a wallet."
            actionLink="about"
            pattern="top-left-down"
          />
        </div>
      </main>
    </>
  )
}
