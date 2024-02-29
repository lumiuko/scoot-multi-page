type HeaderProps = {
  page: string
}

export default function Header({ page }: HeaderProps) {
  return (
    <header
      className={`px-8 py-[3.75rem] text-white bg-no-repeat overflow-hidden bg-cover relative after:hidden after:w-[234px] after:h-[63px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-8 after:bg-white-circles after:bg-cover md:px-24 md:py-[4.5rem] md:after:block md xl:px-10 ${`${page.toLowerCase()}-hero`}`}
    >
      <div className="max-w-container mx-auto">
        <h1 className="text-center text-[2.5rem] leading-10 tracking-h3 font-mono font-bold md:text-left md:text-h1 md:leading-h1 md:tracking-h1">
          {page}
        </h1>
      </div>
    </header>
  )
}
