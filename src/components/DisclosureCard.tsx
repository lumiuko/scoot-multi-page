import { Disclosure } from '@headlessui/react'

type DisclosureCardProps = {
  title: string
  text: string
}

export default function DisclosureCard({ title, text }: DisclosureCardProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="bg-snow text-dark-navy p-8 pr-7 md:pl-10 xl:pr-10">
          <Disclosure.Button className="w-full flex justify-between items-center gap-4">
            <p className="font-mono font-bold text-left text-body-2 leading-body-2 tracking-[-0.8px] md:text-h5 md:leading-h5 md:tracking-h5">
              {title}
            </p>
            <img src="/icons/chevron.svg" alt="Chevron" aria-hidden="true" style={{ rotate: open ? '180deg' : '0deg' }} />
          </Disclosure.Button>
          <Disclosure.Panel>
            <p className="pt-6">{text}</p>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
