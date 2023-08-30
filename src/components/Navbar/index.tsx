import Image from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialMedia from '../Utils/SocialMedia'

const Navbar = () => {
  const { locale } = useRouter()
  const pathname = usePathname()

  const items = [
    {
      title: 'About Us',
      content1: {
        title: 'We are Ingenia',
        click: '/about-us',
        query: null,
      },
      content2: {
        title: 'History Timeline',
        click: '/about-us',
        query: { timeline: true },
      },
      content3: {
        title: 'Ingeniacracy',
        click: '/about-us',
        query: { ingeniacracy: true },
      },
      content4: {
        title: 'Knowledge network',
        click: '/about-us',
        query: { network: true },
      },
      content5: {
        title: 'Join us',
        click: '/about-us',
        query: { join: true },
      },
      click: '/about-us',
    },
    {
      title: 'Meet the team',
      content1: {
        title: 'We are ingenials',
        click: '/meet-our-team',
        query: { we: true },
      },
      content2: {
        title: 'Ingeniacracy',
        click: '/meet-our-team',
        query: { ingeniacracy: true },
      },
      content3: {
        title: 'Benefits',
        click: '/meet-our-team',
        query: { benefits: true },
      },
      click: '/meet-our-team',
    },
    {
      title: 'Our Work',
      content1: {
        title: 'Drivers',
        click: '/our-work',
        query: { drivers: true },
      },
      content2: {
        title: 'Certifications',
        click: '/our-work',
        query: { certif: true },
      },
      click: '/our-work',
    },
    {
      title: 'Case studies',
      content1: {
        title: 'Cases',
        click: '/case-studies',
        query: { cases: true },
      },
      content2: {
        title: 'Industries',
        click: '/case-studies',
        query: { industry: true },
      },
      click: '/case-studies',
    },
    {
      title: 'Solutions',
      content1: {
        title: 'Startia',
        click: '/solutions/startia',
      },
      content2: {
        title: 'Devify',
        click: '/solutions/devify',
      },
      content3: {
        title: 'Go Elevate',
        click: '/solutions/go-elevate',
      },
      click: '/solutions',
    },
    {
      title: 'Content Hub',
      content1: {
        title: `Ingenia's news`,
        click: '/content-hub',
        query: { news: true },
      },
      content2: 'Stay updated',
      content3: 'In the media',
      content4: {
        title: 'Our podcast',
        click: '/content-hub',
        query: { podcast: true },
      },
      content5: 'Follow us',
      click: '/content-hub',
    },
    {
      title: 'Join Us',
      content1: {
        title: 'Open positions',
        click: '/join-us',
        query: { join: true },
      },
      content2: {
        title: 'Benefits',
        click: '/join-us',
        query: { benefits: true },
      },
      click: '/join-us',
    },
    {
      title: locale === 'en' ? 'EN' : 'ES',
    },
  ]
  const genericHamburgerLine = `h-[2px] w-6 my-[3px] rounded-full bg-white transition ease transform duration-300`
  return (
    <Disclosure as="nav" className="bg-black/40 backdrop-blur-[10px]">
      {({ open, close }) => (
        <>
          <div className="custom-container">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex h-16 items-center justify-between">
                <div className="flex flex-shrink-0 items-center ">
                  <Transition
                    show={!open}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Link href={'/'} onClick={() => close()}>
                      <Image
                        width={100}
                        height={100}
                        src="/logoImage.png"
                        alt="Your Company"
                        className="cursor-pointer"
                      />
                    </Link>
                  </Transition>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Transition
                  show={!open}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="hidden gap-3 lg:flex">
                    <Button title="Join us" />
                    <Button title="Get in touch" variant="secondary" />
                  </div>
                </Transition>
                <Disclosure.Button className="rounded-md bg-transparent text-gray-400 hover:text-white">
                  <div className="group flex h-12 flex-col items-center justify-center rounded border-2 border-none">
                    <div
                      className={`${genericHamburgerLine} ${
                        open
                          ? 'translate-y-1 rotate-45 group-hover:opacity-100'
                          : 'group-hover:opacity-100'
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        open ? 'opacity-0' : ' group-hover:opacity-100'
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        open
                          ? '-translate-y-3 -rotate-45 group-hover:opacity-100'
                          : ' group-hover:opacity-100'
                      }`}
                    />
                  </div>
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            className="overflow-hidden"
            enter="transition transition-[max-height] duration-500 ease-in"
            enterFrom="transform max-h-0"
            enterTo="transform max-h-screen"
            leave="transition transition-[max-height] duration-300 ease-out"
            leaveFrom="transform max-h-screen"
            leaveTo="transform max-h-0"
          >
            <Disclosure.Panel>
              <div className=" mx-auto justify-between gap-4 px-2 pb-28 pt-4 text-white   lg:flex lg:max-w-[1600px] lg:px-12 lg:pt-0">
                <div className="absolute left-4 top-0 hidden lg:static lg:block">
                  <Link href={'/'} onClick={() => close()}>
                    <Image
                      width={100}
                      height={100}
                      src="/logoImage.png"
                      alt="Your Company"
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
                {items.map((e, i) => (
                  <div
                    key={e.title}
                    className={`${
                      e.title === 'Join Us'
                        ? '!lg:pb-0 mb-4 border-b-[1px] border-white/[.1] !pb-14 lg:mb-0 lg:border-none'
                        : ''
                    } flex items-center gap-14 pb-6 pl-3 text-lg font-normal text-white lg:flex-col lg:items-start lg:pb-0 lg:pl-0 ${
                      items.length - 1 === i ? 'justify-between' : ''
                    }`}
                  >
                    {e.title === 'EN' || e.title === 'ES' ? (
                      <Link
                        href={pathname}
                        locale={locale === 'en' ? 'es' : locale === 'es' ? 'en' : 'en'}
                      >
                        <p
                          onClick={() => close()}
                          className="lg:order-0 order-2 mr-4 cursor-pointer rounded-[56px] bg-black/[.13]  px-3 py-[7px] text-[18px] font-bold lg:mr-0 lg:bg-none lg:px-0 lg:py-0 "
                        >
                          {e.title}
                        </p>
                      </Link>
                    ) : (
                      <Link
                        href={!['EN', 'ES'].includes(e.title) ? e?.click ?? '' : ''}
                        onClick={() => close()}
                      >
                        {e.title}
                      </Link>
                    )}

                    {['EN', 'ES'].includes(e.title) ? (
                      <div className="flex h-full  cursor-pointer items-center gap-8 space-y-6 lg:order-2 lg:flex-col lg:justify-between lg:gap-0 ">
                        <SocialMedia className="flex-col !gap-6" />
                      </div>
                    ) : (
                      <div className="hidden cursor-pointer flex-col gap-2 lg:flex">
                        {typeof e.content1 === 'object' ? (
                          <Link
                            onClick={() => close()}
                            href={{ pathname: e.content1.click, query: e.content1.query }}
                            as={e.content1.click}
                          >
                            <p>{e.content1.title}</p>
                          </Link>
                        ) : (
                          <p>{e.content1}</p>
                        )}
                        {typeof e.content2 === 'object' ? (
                          <Link
                            onClick={() => close()}
                            href={{ pathname: e.content2.click, query: e.content2.query }}
                            as={e.content2.click}
                          >
                            <p>{e.content2.title}</p>
                          </Link>
                        ) : (
                          <p>{e.content2}</p>
                        )}
                        {typeof e.content3 === 'object' ? (
                          <Link
                            onClick={() => close()}
                            href={{ pathname: e.content3.click, query: e.content3.query }}
                            as={e.content3.click}
                          >
                            <p>{e.content3.title}</p>
                          </Link>
                        ) : (
                          <p>{e.content3}</p>
                        )}
                        {typeof e.content4 === 'object' ? (
                          <Link
                            onClick={() => close()}
                            href={{ pathname: e.content4.click, query: e.content4.query }}
                            as={e.content4.click}
                          >
                            <p>{e.content4.title}</p>
                          </Link>
                        ) : (
                          <p>{e.content4}</p>
                        )}
                        {typeof e.content5 === 'object' ? (
                          <Link
                            onClick={() => close()}
                            href={{ pathname: e.content5.click, query: e.content5.query }}
                            as={e.content5.click}
                          >
                            <p>{e.content5.title}</p>
                          </Link>
                        ) : (
                          <p>{e.content5}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
