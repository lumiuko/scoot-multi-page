import Main from '../components/Main'
import DisclosureCard from '../components/DisclosureCard'
import FeatureSection from '../components/FeatureSection'
import Header from '../components/Header'
import ValuesCards from '../components/ValuesCards'

export default function About() {
  return (
    <>
      <Header page="About" />
      <Main>
        <FeatureSection
          title="Mobility for the digital era"
          text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
          image="/images/digital-era.jpg"
          imageAlt="Woman using a phone."
          pattern="bottom-left-up"
        />
        <FeatureSection
          title="Better urban living"
          text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
          image="/images/better-living.jpg"
          imageAlt="A moving tram."
          pattern="top-right-down"
        />
        <section className="px-8 md:px-10">
          <h2 className="font-mono font-bold text-h4 leading-h4 tracking-h4 text-dark-navy text-center mb-16 md:text-h2 md:leading-h2 md:tracking-h2 md:mb-[6.5rem]">
            Our values
          </h2>
          <ValuesCards />
        </section>
        <section className="mt-6 px-8 md:px-10 md:mt-0">
          <h2 className="font-mono font-bold text-h4 leading-h4 tracking-h4 text-dark-navy text-center mb-16 md:text-h2 md:leading-h2 md:tracking-h2">
            FAQs
          </h2>
          <div className="max-w-container mx-auto flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col justify-between gap-8 xl:flex-row xl:gap-[1.875rem]">
              <h3 className="font-mono font-bold text-h5 leading-h5 tracking-h5 text-dark-navy text-center md:text-h3 md:leading-h3 md:tracking-h3">
                How it works
              </h3>
              <div className="flex-1 flex flex-col gap-4 md:gap-6 xl:gap-4 xl:max-w-[730px]">
                <DisclosureCard
                  title="How do I download the app?"
                  text="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                />
                <DisclosureCard
                  title="Can I find a nearby Scoots?"
                  text="Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information."
                />
                <DisclosureCard
                  title="Do I need a license to ride?"
                  text="Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 xl:flex-row xl:gap-[1.875rem]">
              <h3 className="font-mono font-bold text-h5 leading-h5 tracking-h5 text-dark-navy text-center md:text-h3 md:leading-h3 md:tracking-h3">
                Safe driving
              </h3>
              <div className="flex-1 flex flex-col gap-4 md:gap-6 xl:gap-4 xl:max-w-[730px]">
                <DisclosureCard
                  title="Should I wear a helmet?"
                  text="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
                />
                <DisclosureCard
                  title="How about the rules & regulations?"
                  text="Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."
                />
                <DisclosureCard
                  title="What if I damage my Scoot?"
                  text="Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
                />
              </div>
            </div>
          </div>
        </section>
      </Main>
    </>
  )
}
