import FeatureSection from '../components/FeatureSection'
import Main from '../components/Main'
import Header from '../components/Header'
import JobCard from '../components/JobCard'
import ValuesCards from '../components/ValuesCards'

import jobs from '../data/jobs.json'
import { Job } from '../types'

export default function Careers() {
  return (
    <>
      <Header page="Careers" />
      <Main>
        <FeatureSection
          title="Care to join our mission?"
          text="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          image="/images/join-us.jpg"
          imageAlt="Man standing while collaborating with a group of people."
          pattern="bottom-left-down"
          actionLink="#"
          buttonText="Say Hello"
        />

        <section className="px-8 md:px-10">
          <h2 className="font-mono font-bold text-h4 leading-h4 tracking-h4 text-dark-navy text-center mb-16 md:text-h2 md:leading-h2 md:tracking-h2 md:mb-[6.5rem]">
            Why join us?
          </h2>
          <ValuesCards />
        </section>

        <section className="mt-6 px-8 md:mt-0 md:px-10">
          <h2 className="sr-only">Job listings</h2>

          <ul className="max-w-container mx-auto flex flex-col gap-4 xl:gap-6">
            {jobs.map((job: Job) => (
              <JobCard key={job.id} item={job} />
            ))}
          </ul>
        </section>
      </Main>
    </>
  )
}
