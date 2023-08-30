import Image from 'next/image'
import Button from '../Button'
import SocialMedia from '../Utils/SocialMedia'
import { useRouter } from 'next/navigation'
const Footer = () => {
  const { push } = useRouter()
  return (
    <footer className="lg:px-8l mx-auto p-12 px-2 text-white sm:px-6 lg:max-w-[1600px]">
      <div className="flex items-center justify-between">
        <Image width={190} height={190} src="/logoFooter.png" alt="Your Company" />

        <div className="invisible sm:visible">
          <Button title="Get in touch" variant="white" />
        </div>
      </div>

      <div className="mt-10 flex justify-between ">
        <div className="hidden sm:inline">
          <p className="text-2xl">Main</p>
          <div className="mt-4 flex gap-8 text-[14px] font-light leading-6 opacity-80 ">
            <div className="space-y-2">
              <p className="cursor-pointer" onClick={() => push('/about-us')}>
                About Us
              </p>
              <p className="cursor-pointer" onClick={() => push('/meet-our-team')}>
                Meet the team
              </p>
              <p className="cursor-pointer" onClick={() => push('/our-work')}>
                Our Work
              </p>
              <p className="cursor-pointer" onClick={() => push('case-studies')}>
                Case Studies
              </p>
            </div>
            <div>
              {/* <p>Content Hub</p>
              <p>Join us</p> */}
              <p className="cursor-pointer" onClick={() => push('/contact')}>
                Contact
              </p>
            </div>
          </div>
        </div>

        <div className="hidden sm:inline">
          <p className="text-2xl">Solutions</p>

          <div className="mt-4 space-y-2 text-[14px] font-light leading-6 opacity-80">
            <p>Startia</p>
            <p>Devify</p>
            <p>Go Elevate</p>
          </div>
        </div>

        <div className="hidden sm:inline">
          <p className="text-2xl">Contact us</p>

          <div className="mt-4 space-y-2 text-[14px] font-light leading-6 opacity-80">
            <p>Castillo 1366 (1414) CABA, Argentina</p>
            <p>info@ingenia.la</p>
            <p>+549 11 3645 8835</p>
          </div>
        </div>

        <SocialMedia className="ml-1 flex w-full cursor-pointer justify-between gap-5 sm:ml-0 sm:w-auto sm:flex-col" />
        <div className="w-1/2 sm:hidden"></div>
      </div>
      <hr className="mx-1 mt-10 block opacity-25 sm:hidden" />

      <div className="mt-14 flex flex-col justify-between gap-6 text-xs tracking-wider sm:flex-row sm:gap-0">
        <p className="order-2 text-[10px]  font-light leading-5 tracking-[0.6px] opacity-50 sm:order-first  sm:text-[11.44px] sm:opacity-70 ">
          © {new Date().getFullYear()} Ingenia. All rights reserved
        </p>

        <div className="flex gap-8 opacity-70">
          <p className="order-2 sm:order-first">Privacy policy</p>
          <p>Cookie settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
