import ValuesCard from './ValuesCard'

export default function ValuesCards() {
  return (
    <div className="max-w-container mx-auto flex flex-col gap-14 xl:flex-row xl:gap-[1.875rem]">
      <ValuesCard
        id={1}
        title="Our tech"
        text="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
        image="/images/our-tech.jpg"
        imageAlt="A person is holding a phone."
      />
      <ValuesCard
        id={2}
        title="Our integrity"
        text="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
        image="/images/our-integrity.jpg"
        imageAlt="A person on a scooter."
      />
      <ValuesCard
        id={3}
        title="Our community"
        text="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
        image="/images/our-community.jpg"
        imageAlt="Walking people."
      />
    </div>
  )
}
