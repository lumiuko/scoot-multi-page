export default function SignupBanner() {
  return (
    <section
      className="px-8 py-[5.5rem] bg-dark-navy text-white bg-semi-circles bg-no-repeat bg-[bottom_right_-162px] md:py-[3.875rem] xl:py-[6.375rem]"
      id="download"
    >
      <div className="max-w-container mx-auto flex flex-col gap-10 justify-between items-center xl:flex-row">
        <h2 className="text-center text-h4 leading-h4 tracking-h4 font-mono font-bold md:text-h2 md:leading-h2 md:tracking-h2 md:max-w-[445px] xl:text-left">
          Sign up and Scoot off today
        </h2>
        <div className="flex justify-center items-center gap-3 xl:gap-[1.125rem]">
          <a href="#" aria-label="App Store">
            <img src="/icons/app-store.svg" alt="" className="h-[40px] xl:h-[56px]" />
          </a>
          <a href="#" aria-label="Google Play">
            <img src="/icons/google-play.svg" alt="" className="h-[40px] xl:h-[56px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
